<script lang="ts">
	import HorizontalCardWrapper from './HorizontalCardWrapper.svelte';

	interface Props {
		title: string;
		description: string;
		footer?: string;
		thumbnail: string;
		href: string;
		loading?: boolean;
	}

	let {
		title = '',
		description = '',
		footer = '',
		thumbnail = '',
		href = '',
		loading = $bindable(false)
	}: Props = $props();
</script>

<HorizontalCardWrapper {href}>
	{#if loading}
		<div class="flex justify-center items-center thumbnail bg-surface-500 min-w-24"></div>
	{/if}

	{#if thumbnail}
		<div class="flex justify-center items-center thumbnail bg-surface-500 min-w-24">
			<img src={thumbnail} alt={title} class="object-contain w-16 h-16" onerror={() => (loading = false)} />
		</div>
	{/if}

	<div class="flex flex-col justify-between p-4 flex-grow">
		<h3 class="text-xl font-bold mb-2">{title}</h3>
		<p class="text-surface-300 mb-2">{description}</p>
		<p class="text-surface-400 text-sm">{footer}</p>
	</div>
</HorizontalCardWrapper>
