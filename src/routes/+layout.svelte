<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { slide } from 'svelte/transition';
	import '../app.css';

	import Footer from '$lib/components/Footer.svelte';
	import { quintOut } from 'svelte/easing';
	import { duration, fade, fly, goingLeft } from '$lib/utils/animation';
	import { page } from '$app/state';

	let { children } = $props();

	const items = [
		{
			name: "Home",
			url: "/",
			activeMatch: (pathname: string) => pathname === "/",
		},
		{
			name: "Blog",
			url: "/blog",
			activeMatch: (pathname: string) =>
				pathname === "/blog" || pathname === "/blog/",
		},
		{
			name: "Contact",
			url: "/contact",
			activeMatch: (pathname: string) => pathname.startsWith("/contact"),
		},
		{
			name: "Projects",
			url: "/projects",
			activeMatch: (pathname: string) => pathname.startsWith("/projects"),
		},
	];

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	beforeNavigate((e) => {
		const oldIndex = items.findIndex((i) =>
			i.activeMatch(e.from?.url.pathname || ""),
		);
		const newIndex = items.findIndex((i) =>
			i.activeMatch(e.to?.url.pathname || ""),
		);
		if (newIndex < oldIndex) {
			goingLeft.set(true);
			console.log("going left");
		} else {
			goingLeft.set(false);
			console.log("going right");
		}
	});

	afterNavigate(() => {
		// Fixes sveltekit issue w/ scroll preservation on navigation
		document.getElementById('page')?.scrollTo(0, 0);
		menuOpen = false;
	});
</script>

<svelte:head>
	<!-- Favicons -->
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="icon" type="image/png" sizes="192x192" href="/images/favicons/android-chrome-192x192.png" />
	<link rel="icon" type="image/png" sizes="512x512" href="/images/favicons/android-chrome-512x512.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />
</svelte:head>

<div class="main flex min-h-screen flex-col">
	<header class="bg-surface-900 fixed top-0 right-0 left-0 z-50 shadow-lg">
		<!-- App Bar -->
		<AppBar>
			{#snippet lead()}
				<!-- Hamburger menu -->
				<button class="mr-4 h-8 w-8 cursor-pointer md:hidden" onclick={toggleMenu} aria-label="Navigation bar menu">
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
				<!-- Wordmark -->
				<a href="/"><img class="h-9" src="/images/jovannmc_white_wordmark.png" alt="JovannMC wordmark logo" /></a>
			{/snippet}
			{#snippet trail()}
				<div class="hidden items-center gap-8 md:flex">
					{#each items as item (item.name)}
						<a
							href={item.url}
							class="{item.activeMatch(page.url.pathname) ? 'font-bold' : ''} {item.name === 'Projects' ? 'btn rounded-full text-sm' : ''}"
							data-sveltekit-preload-data="hover"
						>
							{item.name}
						</a>
					{/each}
				</div>
			{/snippet}
		</AppBar>
	</header>

	<!-- Hamburger menu contents -->
	<div class="md:hidden" class:open={menuOpen}>
		{#if menuOpen}
			<div transition:slide={{ duration: 300 }} class="fixed top-(--navbar-height) left-0 z-40 w-full">
				<div class="bg-surface-900 flex flex-col items-center justify-center gap-1 px-4 py-2 shadow-lg">
					{#each items as item (item.name)}
						<a
							href={item.url}
							class="block w-full py-2 text-center {item.activeMatch(page.url.pathname) ? 'font-bold' : ''} {item.name === 'Projects' ? 'btn mb-2 rounded-full' : ''}"
							data-sveltekit-preload-data="tap"
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<!-- Main content -->
	<main id="page" class="container mx-auto mt-(--navbar-height) flex-1 grid grid-rows-1 grid-cols-1 h-full">
		{#key page.url.pathname}
		<div
			class="row-start-1 col-start-1"
			in:fly={{
				x: $goingLeft ? -window.innerWidth : window.innerWidth,
				duration,
				easing: quintOut,
				delay: 25,
			}}
			out:fly={{
				x: $goingLeft ? window.innerWidth : -window.innerWidth,
				duration,
				easing: quintOut,
			}}
		>
			<div
				class="flex flex-col"
				in:fade={{
					duration,
					easing: quintOut,
					delay: 100,
				}}
				out:fade={{
					duration,
					easing: quintOut,
					delay: 200,
				}}
			>
				{@render children()}
			</div>
		</div>
	{/key}
	</main>

	<!-- Footer -->
	<footer>
		<Footer />
	</footer>
</div>


<style>
	:root {
		--navbar-height: 68px;
	}

	:global(.splide__track),
	:global(.splide__slide),
	:global(.splide__list) {
		overflow: visible !important;
	}
</style>
