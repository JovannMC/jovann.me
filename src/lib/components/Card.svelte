<script lang="ts">
	import CardWrapper from './CardWrapper.svelte';

	interface Props {
		title: string;
		description: string;
		footer?: string;
		thumbnail: string;
		href: string;
		fit?: string;
		fitPadding?: string;
		loading?: boolean;
	}

	let {
		title = '',
		description = '',
		footer = '',
		thumbnail = '',
		href = '',
		fit = 'cover',
		fitPadding = 'p-12',
		loading = $bindable(false)
	}: Props = $props();
</script>

<CardWrapper {href}>
	{#if loading}
		<header>
			<div class="bg-surface-500 h-64"></div>
		</header>
	{/if}

	{#if thumbnail}
		<header>
			<img
				src={thumbnail}
				alt={title}
				style="object-fit: {fit};"
				class="h-64 w-full {fit === 'contain' ? `${fitPadding} bg-surface-500` : ''}"
				onerror={() => (loading = true)}
			/>
		</header>
	{:else}
		<header>
			<img
				src="/images/jovannmc_white.png"
				alt={title}
				style="object-fit: contain;"
				class="h-64 w-full {fitPadding} bg-surface-500"
				onerror={() => (loading = true)}
			/>
		</header>
	{/if}

	<div class="flex flex-col p-4">
		<h3 class="mb-4 text-xl font-bold">{title}</h3>
		<p class="text-surface-200 text-wrap">{description}</p>
	</div>

	<footer class="card-footer">
		<p class="text-surface-300 text-sm">{footer}</p>
	</footer>
</CardWrapper>

<style>
	@reference "../../app.css";
	.card-footer {
		@apply pb-4 pl-4;
	}

	.card-footer p {
		margin: 0;
	}
</style>
