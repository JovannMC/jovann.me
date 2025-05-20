<script>
	export let href;
</script>

{#if href}
	<a class="horizontal-card hoverable bg-surface-800 rounded-lg shadow-md overflow-hidden flex" {href} rel="me" target="_blank">
		<slot></slot>
	</a>
{:else}
	<div class="horizontal-card bg-surface-800 rounded-lg shadow-md overflow-hidden flex">
		<slot></slot>
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
