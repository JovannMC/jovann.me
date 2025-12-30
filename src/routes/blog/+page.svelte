<script lang="ts">
    import Container from '$lib/components/Container.svelte';
	import { formatCount } from '$lib/utils/posts.js';
    import { onMount } from 'svelte';

    let { data } = $props();
    let viewCounts = $state<Record<string, number>>({});

    onMount(async () => {
        if (!data.posts.length) return;
        try {
            const slugs = data.posts.map((p) => p.slug).join(',');
            const res = await fetch(`/api/views?slugs=${encodeURIComponent(slugs)}`);
            if (!res.ok) return;
            const { counts } = await res.json();
            viewCounts = counts ?? {};
        } catch (err) {
            console.error(`error fetching view counts: ${err}`);
        }
    });
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
                        <h2 class="text-2xl font-bold transition-colors">
                            {post.title}
                        </h2>
                        {#if post.description}
                            <p class="mt-2 text-surface-200">{post.description}</p>
                        {/if}
                        <div class="mt-6 flex items-center gap-3 text-sm text-surface-300">
                            {#if post.date}
                                <time>
                                    {new Date(post.date).toLocaleDateString()}
                                </time>
                            {/if}
                            <span class="ml-auto">Views: {formatCount(viewCounts?.[post.slug])}</span>
                        </div>
                    </a>
                </article>
            {/each}
        </div>
    {/if}
</Container>
