import sqlite3 from "sqlite3";
import crypto from "crypto";
import fs from "fs";
import path from "path";

interface ViewRow {
	count: number;
}

interface ViewsRow {
	slug: string;
	count: number;
}

const dbPath = process.env.DB_PATH || path.join(process.cwd(), "data", "views.db");
const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) {
	fs.mkdirSync(dbDir, { recursive: true });
}

const db = new sqlite3.Database(dbPath, (err: Error | null) => {
	if (err) console.error(`error initializing database: ${err.message}`);
});

db.configure("busyTimeout", 5000);

db.serialize(() => {
	db.run(`
    CREATE TABLE IF NOT EXISTS views (
        slug TEXT PRIMARY KEY,
        count INTEGER NOT NULL DEFAULT 0,
        updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
`);
	db.run(`
    CREATE TABLE IF NOT EXISTS view_tokens (
        token TEXT PRIMARY KEY,
        slug TEXT NOT NULL,
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
`);
	// clean old tokens on startup (older than 1 hour)
	db.run("DELETE FROM view_tokens WHERE created_at < datetime('now', '-1 hour')");
});

function generateToken(slug: string, clientId: string): string {
	const now = new Date();
	const dateHour = `${now.toISOString().split("T")[0]}-${now.getUTCHours().toString().padStart(2, "0")}`; // YYYY-MM-DD-HH
	const hash = crypto.createHash("sha256").update(`${slug}:${clientId}:${dateHour}`).digest("hex");
	return hash;
}

export async function incrementView(slug: string, clientId: string): Promise<number> {
	const token = generateToken(slug, clientId);

	return new Promise((resolve, reject) => {
		// check if token already exists
		db.get(
			"SELECT token FROM view_tokens WHERE token = ?",
			[token],
			(err: Error | null, row: { token: string } | undefined) => {
				if (err) return reject(err);

				if (row) {
					// if token exists, do not increment
					db.get("SELECT count FROM views WHERE slug = ?", [slug], (err: Error | null, row: ViewRow | undefined) => {
						if (err) return reject(err);
						resolve(row?.count ?? 0);
					});
				} else {
					// if token does not exist, increment and store token
					db.run(
						"INSERT INTO views (slug, count) VALUES (?, 1) ON CONFLICT(slug) DO UPDATE SET count = count + 1, updated_at = CURRENT_TIMESTAMP",
						[slug],
						function (err: Error | null) {
							if (err) return reject(err);
							db.run("INSERT INTO view_tokens (token, slug) VALUES (?, ?)", [token, slug], (err: Error | null) => {
								if (err) console.error("Error storing token:", err);
							});
							db.get(
								"SELECT count FROM views WHERE slug = ?",
								[slug],
								(err: Error | null, row: ViewRow | undefined) => {
									if (err) return reject(err);
									resolve(row?.count ?? 0);
								}
							);
						}
					);
				}
			}
		);
	});
}

export async function getView(slug: string): Promise<number> {
	return new Promise((resolve, reject) => {
		db.get("SELECT count FROM views WHERE slug = ?", [slug], (err: Error | null, row: ViewRow | undefined) => {
			if (err) return reject(err);
			resolve(row?.count ?? 0);
		});
	});
}

export async function getViews(slugs: string[]): Promise<Record<string, number>> {
	if (slugs.length === 0) return {};
	const limited = slugs.slice(0, 999);
	const placeholders = Array.from({ length: limited.length }, () => "?").join(",");

	return new Promise((resolve, reject) => {
		db.all(
			`SELECT slug, count FROM views WHERE slug IN (${placeholders})`,
			limited,
			(err: Error | null, rows: ViewsRow[]) => {
				if (err) return reject(err);
				const map: Record<string, number> = {};
				for (const slug of limited) map[slug] = 0;
				for (const row of rows) map[row.slug] = row.count;
				resolve(map);
			}
		);
	});
}
