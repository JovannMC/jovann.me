import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { codeToHtml } from 'shiki';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const html = await codeToHtml(code, {
						lang,
						theme: 'github-dark'
					});
					return html
						.replace(/[{]/g, '&#123;')
						.replace(/[}]/g, '&#125;')
						.replace(/`/g, '&#96;');
				}
			},
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, { behavior: 'wrap' }]
			]
		})
	],
	kit: { adapter: adapter() }
};

export default config;
