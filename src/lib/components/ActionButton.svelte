<script lang="ts">
	interface Props {
		text?: string;
		additionalClasses?: string;
		href?: string;
	}

	let { text = '', additionalClasses = '', href = '' }: Props = $props();
</script>

<div class="mt-8 text-center">
	<a class={`btn btn-lg rounded-full mt-4 bg-secondary-900 font-semibold text-xl ${additionalClasses}`} {href} rel="me">
		{text}
	</a>
</div>
