<script lang="ts">
	let { href, children } = $props();
</script>

{#if href}
	<a class="horizontal-card hoverable bg-surface-900 rounded-lg shadow-md overflow-hidden flex" {href} rel="me" target="_blank">
		{@render children?.()}
	</a>
{:else}
	<div class="horizontal-card bg-surface-900 rounded-lg shadow-md overflow-hidden flex">
		{@render children?.()}
	</div>
{/if}

<style>
	.horizontal-card.hoverable {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		transform: scale(1);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.horizontal-card.hoverable:hover,
	.horizontal-card.hoverable:active,
	.horizontal-card.hoverable:focus {
		transform: scale(1.05);
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
	}
</style>
