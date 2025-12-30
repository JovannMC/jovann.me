import { json } from "@sveltejs/kit";
import { getView, incrementView } from "$lib/server/db";

export async function GET({ params }) {
	const slug = params.slug;
	if (!slug) return json({ error: "slug is required" }, { status: 400 });
	const count = await getView(slug);
	return json({ count });
}

export async function POST({ params, request }) {
	const slug = params.slug;
	if (!slug) return json({ error: "slug is required" }, { status: 400 });
	
	const body = await request.json();
	const clientId = body?.clientId;
	if (!clientId) return json({ error: "clientId is required" }, { status: 400 });
	
	const count = await incrementView(slug, clientId);
	return json({ count });
}
