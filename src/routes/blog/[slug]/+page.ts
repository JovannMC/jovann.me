import { getPost, getPosts } from '$lib/utils/posts';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }) {
	const post = await getPost(params.slug);
	if (!post) error(404, 'Post not found');
	return { post };
}

export async function entries() {
	const posts = await getPosts();
	return posts.map((post) => ({ slug: post.slug }));
}
