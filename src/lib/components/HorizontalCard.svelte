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
		<div class="thumbnail bg-surface-500 flex min-w-24 items-center justify-center"></div>
	{/if}

	{#if thumbnail}
		<div class="thumbnail bg-surface-500 flex min-w-24 items-center justify-center">
			<img src={thumbnail} alt={title} class="h-16 w-16 object-contain" onerror={() => (loading = false)} />
		</div>
	{/if}

	<div class="flex flex-grow flex-col justify-between p-4">
		<h3 class="mb-2 text-xl font-bold">{title}</h3>
		<p class="text-surface-200 mb-2">{description}</p>
		<p class="text-surface-300 text-sm">{footer}</p>
	</div>
</HorizontalCardWrapper>
