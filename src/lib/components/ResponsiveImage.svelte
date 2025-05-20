<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		src: string;
		// Width and height take rem units
		width?: string;
		height?: string;
		aspectRatio?: string;
		transparent?: boolean;
		loading?: boolean;
		hoverEffect?: boolean;
	}

	let {
		src = '',
		width = $bindable(''),
		height = $bindable(''),
		aspectRatio = $bindable(''),
		transparent = false,
		loading = false,
		hoverEffect = false
	}: Props = $props();

	// Simplified state variables
	let element: Element | undefined = $state();
	let computedWidth = $state('');
	let computedHeight = $state('');
	let paddingTop = $state(100); // 1:1
	let imageLoaded = $state(false);

	onMount(() => {
		const img = new Image();

		img.onload = () => {
			const naturalRatio = img.naturalWidth / img.naturalHeight;

			let finalRatio = naturalRatio;
			if (aspectRatio) {
				const [width, height] = aspectRatio.split(':').map(Number);
				if (width && height) finalRatio = width / height;
			}

			paddingTop = 100 / finalRatio;

			let containerWidth = '';
			let containerHeight = '';
			if (width === '' && height === '' && element) {
				const parent = element.parentNode as HTMLElement;
				if (parent) {
					containerWidth = `${parent.offsetWidth}px`;
					containerHeight = `${parent.offsetHeight}px`;
				}
			}

			let finalWidth = width || containerWidth || '10rem'; // default size
			let finalHeight = height || containerHeight || '';

			// if only one dimension is provided, calculate the other based on aspect ratio
			if (finalWidth && !finalHeight) {
				const widthValue = parseFloat(finalWidth);
				finalHeight = `${widthValue / finalRatio}rem`;
			} else if (!finalWidth && finalHeight) {
				const heightValue = parseFloat(finalHeight);
				finalWidth = `${heightValue * finalRatio}rem`;
			}

			computedWidth = finalWidth;
			computedHeight = finalHeight;
			imageLoaded = true;

			console.log(`ResponsiveImage: width=${finalWidth}, height=${finalHeight}, ratio=${finalRatio}`);
		};

		img.src = src;
	});
</script>

<div
	class={`image-container relative overflow-hidden rounded-lg ${!transparent ? 'bg-surface-400' : ''} ${loading ? 'animate-pulse' : ''} ${hoverEffect ? 'hover-effect' : ''}`}
	style={`width: ${computedWidth}; height: ${computedHeight};`}
	tabindex="-1"
	bind:this={element}
>
	<div
		class="image-content"
		style={`background-image: ${loading ? 'none' : `url(${src})`}; width: 100%; height: 100%;`}
	></div>
	<div class="aspect-ratio-box" style="width: 100%; padding-top: ${paddingTop}%;"></div>
</div>

<style>
	.image-container,
	.image-content {
		background-size: cover;
		background-position: center;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		transform: scale(1);
	}
	.image-container.hover-effect,
	.image-content-hover-effect {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.aspect-ratio-box:empty {
		display: block;
	}

	.image-container.hover-effect:hover,
	.image-container.hover-effect:active,
	.image-container.hover-effect:focus {
		transform: scale(1.05);
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
	}
</style>
