<script lang="ts">
	interface Props {
		text?: string;
		additionalClasses?: string;
		href?: string;
	}

	let { text = '', additionalClasses = '', href = '' }: Props = $props();
</script>

<div class="mt-8 text-center">
	<a class={`btn btn-lg bg-secondary-900 mt-4 rounded-full text-lg font-semibold ${additionalClasses}`} {href} rel="me">
		{text}
	</a>
</div>
