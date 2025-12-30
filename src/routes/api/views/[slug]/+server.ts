import { json } from "@sveltejs/kit";
import { getView, incrementView } from "$lib/server/db";

export async function GET({ params }) {
	const slug = params.slug;
	if (!slug) return json({ error: "slug is required" }, { status: 400 });
	const count = await getView(slug);
	return json({ count });
}

export async function POST({ params }) {
	const slug = params.slug;
	if (!slug) return json({ error: "slug is required" }, { status: 400 });
	const count = await incrementView(slug);
	return json({ count });
}
