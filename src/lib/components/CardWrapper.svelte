<script>
	export let href;
</script>

{#if href}
	<a {href} rel="me" target="_blank">
		<div class="card hoverable bg-surface-800 rounded-lg shadow-md overflow-hidden">
			<slot></slot>
		</div>
	</a>
{:else}
	<div class="card bg-surface-800 rounded-lg shadow-md overflow-hidden">
		<slot></slot>
	</div>
{/if}

<style>
	a {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.card.hoverable {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		transform: scale(1);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.card.hoverable:hover,
	.card.hoverable:active,
	.card.hoverable:focus {
		transform: scale(1.05);
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
	}
</style>
