<script lang="ts">
	interface Props {
		title?: string;
		id?: string;
		children?: import('svelte').Snippet;
	}

	let { title = '', id = '', children }: Props = $props();
</script>

<div class="container mx-auto flex flex-col items-center py-8" {id}>
	<div
		class="bg-surface-700 flex w-[95%] md:w-full flex-col gap-6 overflow-clip rounded-lg p-6 text-white shadow-lg lg:px-12 lg:py-10"
	>
		{#if title}
			<h2 class="text-center text-3xl font-bold md:text-4xl">{title}</h2>
		{/if}
		{@render children?.()}
	</div>
</div>
