<script lang="ts">
	import { onMount } from 'svelte';

	export let src = '';

	// Width and height take rem units
	export let width = '';
	export let height = '';
	export let aspectRatio = '';

	export let transparent = false;
	export let loading = false;
	export let hoverEffect = false;

	let defaultAspectRatioValue = 0;
	let element: Element;

	// If aspect ratio is not provided, load image and calculate aspect ratio
	onMount(() => {
		const img = new Image();
		img.onload = () => {
			defaultAspectRatioValue = img.naturalWidth / img.naturalHeight;
			if (aspectRatio === '') aspectRatio = `${img.naturalWidth}:${img.naturalHeight}`;
		};
		img.src = src;

		// If no width and height specified, take the parent's size
		if (width === '' && height === '') {
			const parent = element.parentNode as HTMLElement;
			if (parent !== null) {
				width = `${parent.offsetWidth}px`;
				height = `${parent.offsetHeight}px`;
			}
		}
	});

	// Calculate padding top for aspect ratio box
	$: numeratorDenominator = aspectRatio.split(':').map(Number);
	$: aspectRatioValue =
		numeratorDenominator.length === 2 ? numeratorDenominator[0] / numeratorDenominator[1] : defaultAspectRatioValue;
	$: paddingTop = 100 / aspectRatioValue;

	// Calculate dimensions based on aspect ratio if one is provided without the other
	$: {
		if (width !== '' && height === '') {
			const widthValue = parseFloat(width);
			height = `${widthValue / aspectRatioValue}rem`;
		} else if (height !== '' && width === '') {
			const heightValue = parseFloat(height);
			width = `${heightValue * aspectRatioValue}rem`;
		}
	}

	// Compute final width and height
	$: defaultSize = 10;
	$: computedWidth = width.trim() !== '' ? width : `${defaultSize}rem`;
	$: computedHeight = height.trim() !== '' ? height : `${defaultSize / aspectRatioValue}rem`;
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
