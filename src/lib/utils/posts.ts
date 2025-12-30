/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getPosts() {
	const modules = import.meta.glob("/src/posts/*.md");
	const posts: any[] = [];

	for (const path in modules) {
		const mod = (await modules[path]()) as Record<string, unknown>;
		const slug = path.split("/").pop()?.replace(".md", "");
		const metadata = (mod.metadata || {}) as Record<string, unknown>;

		if (metadata.published !== false) {
			posts.push({
				slug,
				...metadata,
				component: mod.default
			});
		}
	}

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string) {
	try {
		const post = await import(`../../posts/${slug}.md`);
		return {
			slug,
			...post.metadata,
			component: post.default
		};
	} catch {
		return null;
	}
}

export function formatCount(count: number | null | undefined): string {
	return typeof count === "number" ? count.toLocaleString() : "—";
}
