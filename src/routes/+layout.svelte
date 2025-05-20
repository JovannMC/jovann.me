<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import '../app.css';

	import Footer from '$lib/components/Footer.svelte';

	let menuOpen = false;

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

<div class="main">
    <header class="fixed top-0 left-0 right-0 z-50 bg-surface-900 shadow-lg">
        <!-- App Bar -->
        <AppBar>
            {#snippet lead()}
                <!-- Hamburger menu -->
                <button class="md:hidden mr-4 cursor-pointer h-8 w-8" on:click={toggleMenu} aria-label="Navigation bar menu">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <!-- Wordmark -->
                <a href="/"><img class="h-9" src="/images/jovannmc_white_wordmark.png" alt="JovannMC wordmark logo" /></a>
            {/snippet}
            {#snippet trail()}
                <div class="hidden md:flex gap-8 items-center">
                    <a href="/" id="home"> Home </a>
                    <a href="/videos" id="videos"> Videos </a>
                    <a href="/contact" id="contact"> Contact </a>
                    <a class="btn rounded-full text-sm" href="/projects" id="projects"> Projects </a>
                </div>
            {/snippet}
        </AppBar>
    </header>

    <!-- Hamburger menu contents -->
    <div class="md:hidden" class:open={menuOpen}>
        {#if menuOpen}
            <div transition:slide={{ duration: 300 }} class="absolute left-0 w-full z-50">
                <div class="flex flex-col gap-1 justify-center items-center bg-surface-900 shadow-lg px-4 py-2">
                    <a href="/" class="w-full text-center block py-2" id="home"> Home </a>
                    <a href="/videos" class="w-full text-center block py-2" id="videos"> Videos </a>
                    <a href="/contact" class="w-full text-center block py-2" id="contact"> Contact </a>
                    <a href="/projects" class="btn w-full text-center block rounded-full py-2 mb-2" id="projects"> Projects </a>
                </div>
            </div>
        {/if}
    </div>

    <main id="page" class="container mx-auto mt-[var(--navbar-height)]">
        <!-- Main content -->
        <slot />
    </main>

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
