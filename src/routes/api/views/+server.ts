import { json } from "@sveltejs/kit";
import { getViews } from "$lib/server/db";

export function GET({ url }) {
	const slugsParam = url.searchParams.get("slugs");
	if (!slugsParam) return json({ error: "slugs query param required" }, { status: 400 });
	const slugs = slugsParam
		.split(",")
		.map((s) => s.trim())
		.filter(Boolean);
	const counts = getViews(slugs);
	return json({ counts });
}
