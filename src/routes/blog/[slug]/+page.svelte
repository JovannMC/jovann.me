<script>
	import Container from '$lib/components/Container.svelte';
	
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title}</title>
	{#if data.post.description}
		<meta name="description" content={data.post.description} />
	{/if}
</svelte:head>

<Container>
	<div class="flex flex-col gap-8">
		<a href="/blog" class="text-surface-50 hover:text-surface-100 transition-colors">← Back to Blog</a>
		<div class="flex flex-col gap-3">
			<h2 class="text-3xl font-bold md:text-4xl">{data.post.title}</h2>
					{#if data.post.description}
			<p class="text-surface-50 text-lg">{data.post.description}</p>
		{/if}
		{#if data.post.date}
			<p class="text-surface-100 mt-2">{new Date(data.post.date).toLocaleDateString()}</p>
		{/if}
		</div>

		<article class="prose bg-surface-900 border-2 border-surface-300 rounded-lg p-4 md:p-6 -mx-4 md:mx-0">
			<data.post.component />
		</article>
	</div>
</Container>

<style>
	.prose {
		color: white;
	}
	
	.prose :global(h1),
	.prose :global(h2),
	.prose :global(h3),
	.prose :global(h4) {
		font-weight: 700;
		margin-bottom: 1rem;
        padding-bottom: 0.5rem;
		line-height: 1.25;
		position: relative;
		scroll-margin-top: 3rem;
	}
	
	.prose :global(h1 a),
	.prose :global(h2 a),
	.prose :global(h3 a),
	.prose :global(h4 a) {
		color: inherit !important;
		text-decoration: none !important;
	}
	
	.prose :global(h1 a:hover),
	.prose :global(h2 a:hover),
	.prose :global(h3 a:hover),
	.prose :global(h4 a:hover) {
		color: var(--color-surface-200) !important;
	}
	
	.prose :global(h1) {
		font-size: 2rem;
		border-bottom: 2px solid white;
	}
	
	.prose :global(h2) {
		font-size: 1.5rem;
		border-bottom: 2px solid white;
	}
	
	.prose :global(h3) {
		font-size: 1.5rem;
	}
	
	.prose :global(p) {
		margin-bottom: 1.5rem;
		line-height: 1.75;
	}
	
	.prose :global(a) {
		color: var(--color-blue-400);
		text-decoration: underline;
		transition: color 0.2s;
	}
	
	.prose :global(a:hover) {
		color: var(--color-blue-500);
	}
	
	.prose :global(img) {
		border-radius: 8px;
		margin: 2rem auto;
		max-width: 100%;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
        border: 4px solid var(--color-surface-400);
	}
	
	.prose :global(pre) {
		border-radius: 8px;
		padding: 1rem;
		overflow-x: auto;
		margin: 1.5rem 0;
		font-size: 0.875rem;
		line-height: 1.5;
	}
	
	.prose :global(code) {
		font-family: 'Courier New', monospace;
	}
	
	.prose :global(p code) {
		background: #24292e;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.875em;
		color: #F97583;
	}
	
	.prose :global(blockquote) {
		border-left: 4px solid var(--color-surface-200);
		padding-left: 1rem;
		font-style: italic;
		color: var(--color-surface-100);
		margin: 1.5rem 0;
	}
	
    .prose :global(ul) {
		margin: 1.25rem 0;
		padding-left: 2rem;
		color: rgb(var(--color-surface-300));
		list-style-type: disc;
		list-style-position: outside;
	}
	
	.prose :global(ol) {
		margin: 1.25rem 0;
		padding-left: 2rem;
		color: rgb(var(--color-surface-300));
		list-style-type: decimal;
		list-style-position: outside;
	}
	
	.prose :global(li) {
		margin-bottom: 0.5rem;
		display: list-item;
	}

	.prose :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5rem 0;
	}
	
	.prose :global(th),
	.prose :global(td) {
		border: 1px solid white;
		padding: 0.75rem;
		text-align: left;
	}
	
	.prose :global(th) {
		background: var(--color-surface-300);
		font-weight: 600;
	}
</style>
