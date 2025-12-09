import { getPosts } from '$lib/utils/posts';

export const prerender = true;

export async function load() {
	return { posts: await getPosts() };
}
