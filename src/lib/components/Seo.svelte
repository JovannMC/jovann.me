<script lang="ts">
	import { page } from '$app/state';

	interface Props {
		title?: string;
		description?: string;
		keywords?: string;
		ogTitle?: string;
		ogDescription?: string;
		ogImage?: string;
		ogType?: string;
		themeColor?: string;
		noIndex?: boolean;
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	}

	let {
		title = 'jovann.me',
		description = 'Personal website of JovannMC',
		keywords = 'JovannMC, portfolio, website, software development, programming, blog',
		ogTitle,
		ogDescription,
		ogImage = 'https://jovann.me/images/jovannmc_white.png',
		ogType = 'website',
		themeColor = '#dddddd',
		noIndex = false,
		jsonLd,
	}: Props = $props();

	const fullTitle = $derived(title === 'jovann.me' ? title : `${title} | jovann.me`);
	const currentUrl = $derived(`https://jovann.me${page.url.pathname}`);

	const jsonLdString = $derived(
		jsonLd ? JSON.stringify(jsonLd, null, 2) : null
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="JovannMC" />
	{#if noIndex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}

	<!-- Open Graph -->
	<meta property="og:title" content={ogTitle || title} />
	<meta property="og:description" content={ogDescription || description} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:type" content={ogType} />
	<meta name="theme-color" content={themeColor} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={ogTitle || title} />
	<meta name="twitter:description" content={ogDescription || description} />
	<meta name="twitter:image" content={ogImage} />

	{#if jsonLdString}
		{@html `<script type="application/ld+json">${jsonLdString}</script>`}
	{/if}
</svelte:head>
