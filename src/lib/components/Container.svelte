<script lang="ts">
	interface Props {
		title?: string;
		id?: string;
		children?: import('svelte').Snippet;
	}

	let { title = '', id = '', children }: Props = $props();
</script>

<div class="container mx-auto flex flex-col items-center py-8" {id}>
	<div class="flex flex-col gap-6 w-11/12 bg-surface-700 text-white p-6 lg:py-10 lg:px-16 rounded-lg shadow-lg overflow-clip">
		{#if title}
			<h2 class="text-3xl md:text-4xl font-bold text-center">{title}</h2>
		{/if}
		{@render children?.()}
	</div>
</div>
