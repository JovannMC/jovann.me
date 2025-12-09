<script>
	import Container from '$lib/components/Container.svelte';
	
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<Container title="Blog">
    <p class="justify-center text-center text-xl mb-8">
        Some little posts where I write about stuff! Ranges from personal updates to personal findings and more.
    </p>

    {#if data.posts.length === 0}
        <p class="text-center text-surface-400">No posts yet. Check back soon!</p>
    {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each data.posts as post, i}
                <article
                    class="bg-surface-900 border-2 border-surface-500 rounded-lg p-6 hover:border-surface-300 transition-colors
                        {data.posts.length % 2 === 1 && i === data.posts.length - 1 ? 'md:col-span-2' : ''}"
                >
                    <a href="/blog/{post.slug}" class="block">
                        <h2 class="text-2xl font-bold mb-2 transition-colors">
                            {post.title}
                        </h2>
                        {#if post.date}
                            <time class="text-sm text-surface-300">
                                {new Date(post.date).toLocaleDateString()}
                            </time>
                        {/if}
                        {#if post.description}
                            <p class="mt-3 text-surface-200">{post.description}</p>
                        {/if}
                    </a>
                </article>
            {/each}
        </div>
    {/if}
</Container>
