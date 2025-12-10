<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import '../app.css';

	import Footer from '$lib/components/Footer.svelte';
	import { quintOut } from 'svelte/easing';
	import { duration, fade, fly, goingLeft } from '$lib/utils/animation';
	import { page } from '$app/state';

	let { children } = $props();

		const items = $derived<
		{
			name: string;
			url: string;
			activeMatch: (pathname: string) => boolean;
		}[]
	>([
		{
			name: "Home",
			url: "/",
			activeMatch: (pathname) => pathname === "/",
		},
		{
			name: "Blog",
			url: "/blog",
			activeMatch: (pathname) =>
				pathname === "/blog" || pathname === "/blog/",
		},
		{
			name:"Contact",
			url: "/contact",
			activeMatch: (pathname) => pathname.startsWith("/contact"),
		},
		{
			name: "Projects",
			url: "/projects/",
			activeMatch: (pathname) => pathname.startsWith("/projects"),
		},
	]);

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
		// makes sure that highlighted link also shows in hamburger menu for mobile
		setTimeout(highlightCurrentLink, 0);
	}

	function highlightCurrentLink() {
		let url = window.location.href;
		let navLinks = document.querySelectorAll('a');

		navLinks.forEach((link) => {
			if (link.href === url) {
				link.classList.add('font-bold');
			} else {
				link.classList.remove('font-bold');
			}
		});
	}

	onMount(() => {
		highlightCurrentLink();
	});

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
		highlightCurrentLink();
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

	<!-- SEO -->
	<meta name="description" content="Personal website/portfolio of JovannMC" />
	<meta name="keywords" content="JovannMC, portfolio, website" />
	<meta name="author" content="JovannMC" />

	<!-- Open Graph Tags -->
	<meta content="jovann.me" property="og:title" />
	<meta content="Personal website/portfolio of JovannMC" property="og:description" />
	<meta content="https://jovann.me" property="og:url" />
	<meta content="https://jovann.me/images/jovannmc_white.png" property="og:image" />
	<meta content="#dddddd" data-react-helmet="true" name="theme-color" />
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
					<a href="/" id="home" data-sveltekit-preload-data="hover"> Home </a>
					<a href="/blog" id="blogs" data-sveltekit-preload-data="hover"> Blog </a>
					<a href="/contact" id="contact" data-sveltekit-preload-data="hover"> Contact </a>
					<a class="btn rounded-full text-sm" href="/projects" id="projects" data-sveltekit-preload-data="hover"> Projects </a>
				</div>
			{/snippet}
		</AppBar>
	</header>

	<!-- Hamburger menu contents -->
	<div class="md:hidden" class:open={menuOpen}>
		{#if menuOpen}
			<div transition:slide={{ duration: 300 }} class="absolute left-0 z-50 w-full">
				<div class="bg-surface-900 flex flex-col items-center justify-center gap-1 px-4 py-2 shadow-lg">
					<a href="/" class="block w-full py-2 text-center" id="home" data-sveltekit-preload-data="tap"> Home </a>
					<a href="/blog" class="block w-full py-2 text-center" id="blogs" data-sveltekit-preload-data="tap"> Blog </a>
					<a href="/contact" class="block w-full py-2 text-center" id="contact" data-sveltekit-preload-data="tap"> Contact </a>
					<a href="/projects" class="btn mb-2 block w-full rounded-full py-2 text-center" id="projects" data-sveltekit-preload-data="tap"> Projects </a>
				</div>
			</div>
		{/if}
	</div>

	<!-- Main content -->
	<main id="page" class="container mx-auto mt-(--navbar-height) flex-1 grid grid-rows-1 grid-cols-1 h-full grow">
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
				class="flex flex-col h-full pb-32"
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
