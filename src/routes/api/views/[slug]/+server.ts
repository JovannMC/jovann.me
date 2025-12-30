import { json } from "@sveltejs/kit";
import { getView, incrementView } from "$lib/server/db";

export function GET({ params }) {
	const slug = params.slug;
	if (!slug) return json({ error: "slug is required" }, { status: 400 });
	const count = getView(slug);
	return json({ count });
}

export function POST({ params }) {
	const slug = params.slug;
	if (!slug) return json({ error: "slug is required" }, { status: 400 });
	const count = incrementView(slug);
	return json({ count });
}
