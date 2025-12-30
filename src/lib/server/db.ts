import Database from "better-sqlite3";
import type { Statement } from "better-sqlite3";
import fs from "fs";
import path from "path";

const dbPath = process.env.DB_PATH || path.join(process.cwd(), "data", "views.db");
const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) {
	fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);
db.pragma("journal_mode = WAL");

db.exec(`
CREATE TABLE IF NOT EXISTS views (
	slug TEXT PRIMARY KEY,
	count INTEGER NOT NULL DEFAULT 0,
	updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`);

const incrementStmt = db.prepare(
	"INSERT INTO views (slug, count) VALUES (?, 1) ON CONFLICT(slug) DO UPDATE SET count = count + 1, updated_at = CURRENT_TIMESTAMP RETURNING count"
);

const getStmt = db.prepare("SELECT count FROM views WHERE slug = ?");

const stmtCache = new Map<number, Statement>();

function getStmts(length: number) {
	let stmt = stmtCache.get(length);
	if (stmt) return stmt;
	const placeholders = Array.from({ length }, () => "?").join(",");
	stmt = db.prepare(`SELECT slug, count FROM views WHERE slug IN (${placeholders})`);
	stmtCache.set(length, stmt);
	return stmt;
}

export function incrementView(slug: string): number {
	const result = incrementStmt.get(slug) as { count: number };
	return result.count;
}

export function getView(slug: string): number {
	const row = getStmt.get(slug) as { count: number } | undefined;
	return row?.count ?? 0;
}

export function getViews(slugs: string[]): Record<string, number> {
	if (slugs.length === 0) return {};
	const limited = slugs.slice(0, 999);
	const stmt = getStmts(limited.length);
	const rows = stmt.all(...limited) as { slug: string; count: number }[];
	const map: Record<string, number> = {};
	for (const slug of limited) map[slug] = 0;
	for (const row of rows) map[row.slug] = row.count;
	return map;
}
