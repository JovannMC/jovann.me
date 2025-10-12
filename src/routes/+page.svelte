<script lang="ts">
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

	import ActionButton from '$lib/components/ActionButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import Container from '$lib/components/Container.svelte';
	import ResponsiveImage from '$lib/components/ResponsiveImage.svelte';

	onMount(() => {
		const phrases = [
			{ text: 'hates', deleteAfter: 150, typeAfter: 200 },
			{ text: 'loves technology', deleteAfter: 650, typeAfter: 650 },
			{ text: 'hangs out in VR', deleteAfter: 650, typeAfter: 650 },
			{ text: 'creates content', deleteAfter: 650, typeAfter: 650 },
			{ text: 'loves friends', deleteAfter: 650, typeAfter: 650 },
			{ text: 'sucks at programming', deleteAfter: 650, typeAfter: 650 },
			{ text: 'is gay af', deleteAfter: 70, typeAfter: 200 },
			{ text: 'is lazy af', deleteAfter: 650, typeAfter: 650 }
		];

		const typeItInstance = new TypeIt('#typewriter', {
			lifeLike: false,
			speed: 80,
			deleteSpeed: 40,
			loop: true,
			loopDelay: 650
		});

		phrases.forEach(({ text, deleteAfter, typeAfter }) => {
			typeItInstance.type(text).pause(deleteAfter).delete(text.length).pause(typeAfter);
		});

		typeItInstance.go();
	});

	let options = {
		type: 'loop',
		gap: '2rem',
		pagination: false,
		autoplay: true,
		mediaQuery: 'min',
		perPage: 1,
		breakpoints: {
			1024: {
				perPage: 3,
				perMove: 1,
				drag: 'free'
			},
			768: {
				perPage: 2,
				perMove: 1,
				drag: 'free'
			}
		}
	} as Options;

	const projects = [
		{
			title: 'SlimeTora',
			description: 'A program that connects all HaritoraX trackers to the SlimeVR server.',
			footer: 'Electron/Bulma/TS',
			thumbnail: '/images/projects/slimetora_icon.webp',
			href: 'https://github.com/OCSYT/SlimeTora'
		},
		{
			title: 'VERT.sh',
			description: 'The next-generation file converter. Open source, fully local* and free forever.',
			footer: 'SvelteKit/TS/WASM',
			thumbnail: '/images/projects/vert.webp',
			href: 'https://vert.sh',
			fit: 'cover'
		},
		{
			title: 'SlimeVR Team Page',
			description: 'Affordable, comfortable, wireless full-body tracking for VR - made the Team page!',
			footer: 'SolidJS/TS',
			thumbnail: '/images/projects/slimevr-team.webp',
			href: 'https://slimevr.dev/team',
			fit: 'cover'
		},
		{
			title: 'silence-remover',
			description: 'A Python script to remove silence from the beginning and end of audio files.',
			footer: 'Python',
			href: 'https://github.com/JovannMC/silence-remover'
		},
		// {
		// 	title: 'Mastodon',
		// 	description: 'The Mastodon instance with the funny domain - @username@femboyfurry.net',
		// 	footer: 'Active',
		// 	thumbnail: '/images/socials/mastodon.svg',
		// 	href: 'https://mastodon.femboyfurry.net',
		// 	fit: 'contain',
		// 	fitPadding: 'p-12'
		// },
		{
			title: 'Salad Simulator',
			description: 'A (bad) game based off the program that earns you money, Salad.',
			footer: 'Unity/C#',
			thumbnail: '/images/projects/salad-simulator.webp',
			href: 'https://github.com/JovannMC/salad-simulator',
			fit: 'cover',
			fitPadding: 'p-12'
		},
		{
			title: 'Silly Creative Collective',
			description: 'Soon to host many projects and services, SCC is ran by a group of friends!',
			footer: 'In development',
			thumbnail: '/images/projects/scc_logo.webp',
			fit: 'contain'
		},
		// {
		// 	title: 'femboyfurry.net',
		// 	description: 'My previous website - more of a joke. Most of my self-hosted projects will be hosted here.',
		// 	footer: 'Bulma/JS',
		// 	thumbnail: '/images/projects/femboyfurry-net.webp',
		// 	href: 'https://femboyfurry.net',
		// 	fit: 'cover'
		// },
		{
			title: 'MentionChat',
			description: 'A simple plugin to mention other players in chat.',
			footer: 'Spigot/Java',
			thumbnail: '/images/projects/mentionchat.png',
			href: 'https://www.spigotmc.org/resources/mentionchat-mention-other-players-in-chat-1-8-1-20-4.111656/',
			fit: 'contain',
			fitPadding: 'p-2'
		}
	];

	const videos = [
		{
			title: "i'm back again.. with a 24 hour stream!",
			description: "surprise! i'm back again, returning with a 24+ hour live stream challenge!",
			footer: 'April 4, 2025',
			thumbnail: '/images/videos/24_hour_stream.webp',
			href: 'https://www.youtube.com/watch?v=t8WeSwSCzZ0'
		},
		{
			title: 'finding insecure vnc sessions w/ VNC Resolver',
			description: "I take a look at ComputerNewb's VNC Resolver project and find.. concerning VNC sessions.",
			footer: 'May 23, 2024',
			thumbnail: '/images/videos/insecure_vnc_sessions.webp',
			href: 'https://www.youtube.com/watch?v=1KzjaRx9rWA'
		},
		{
			title: 'playing tf2.. with a drawing tablet? (NO KB/MOUSE)',
			description: "TF2 is a fun game, let's play it entirely on a drawing tablet. No keyboard or mouse allowed.",
			footer: 'September 14, 2023',
			thumbnail: '/images/videos/tf2_with_drawing_tablet.webp',
			href: 'https://www.youtube.com/watch?v=4gKv2x5-lMg'
		},
		{
			title: 'a cheaper FBT solution for PCVR and Quest users! | HaritoraX Wireless',
			description: 'I unbox the HaritoraX Wireless from Shiftall, a cheaper VR full body tracking kit using IMUs!',
			footer: 'January 26, 2024',
			thumbnail: '/images/videos/haritorax_wireless_unboxing.webp',
			href: 'https://www.youtube.com/watch?v=Ta7ZFd_VPDU'
		},
		{
			title: "what's a resonite ft. @AnnoyingRains | Resonite #1",
			description:
				"time for a social VR game that's not VRChat! i get introduced to Resonite by Resonite mentor and friend, AnnoyingRains.",
			footer: 'February 20, 2024',
			thumbnail: '/images/videos/whats_a_resonite.webp',
			href: 'https://www.youtube.com/watch?v=MZAYtfQpwFY'
		},
		{
			title: 'trolling apple with trollstore 2.0',
			description: 'trollstore 2.0 is out, and supports even more iOS versions thanks to a new exploit with CoreTrust!',
			footer: 'December 27, 2023',
			thumbnail: '/images/videos/trolling_apple_with_trollstore.webp',
			href: 'https://www.youtube.com/watch?v=_DCEyP5Qqdk'
		},
		{
			title: 'booting into an old IDE HDD w/ IDE to SATA adapter & VMs',
			description:
				"a year ago, i found an old windows xp laptop. i just got an IDE to SATA adapter, so let's try to get it working!",
			footer: 'September 26, 2023',
			thumbnail: '/images/videos/windows_xp_ide_hdd.webp',
			href: 'https://www.youtube.com/watch?v=9ON_-wmOfHk'
		},
		{
			title: 'fortnite.. with a drawing tablet? (NO KB/MOUSE) | Fortnite OG',
			description:
				'time to play another game with a drawing tablet - Fortnite! No KB or mouse, just the drawing tablet.',
			footer: 'November 24, 2023',
			thumbnail: '/images/videos/fortnite_with_drawing_tablet.webp',
			href: 'https://www.youtube.com/watch?v=4MTo6PDZhSo'
		},
		{
			title: 'exploring my old roblox games',
			description: 'let\'s explore some of my "good" roblox games from when i joined roblox - early 2016!',
			footer: 'October 13, 2023',
			thumbnail: '/images/videos/old_roblox_games.webp',
			href: 'https://www.youtube.com/watch?v=kab5UHNQy_8'
		}
	];
</script>

<svelte:head>
	<title>jovann.me</title>
</svelte:head>

<section class="content">
	<div class="flex flex-col items-center justify-center" style="min-height: calc(100vh - var(--navbar-height));">
		<div class="w-9/12 text-center lg:w-1/3">
			<h1 class="text-4xl font-bold">Hey!</h1>
			<p class="mt-2 text-xl">
				I'm <b>Maya</b>, better known online as <b>JovannMC</b>. I'm just another person that
				<span class="font-bold" id="typewriter"></span>.
				<!-- No JS -->
				<noscript
					><del>hates</del> loves <b>technology</b>, creates <b>content</b>, hangs out with friends, and sucks at
					<b>programming</b>.</noscript
				>
			</p>
		</div>
	</div>

	<div class="scroll-indicator">
		<svg class="h-7 w-7 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
		</svg>
	</div>
</section>

<!-- TODO: add fade in scrolling effect? -->

<!-- About me Section -->
<Container title="A little about me!">
	<p class="text-center text-xl">
		I'm a 16 year old from the Philippines (living abroad) that grew up with technology, gaming, and the internet at a
		young age. I love learning new things, starting projects I never finish, and hanging out with friends (especially in
		VR)!<br />
		<br />
		I do content creation, try to program stuff, and self-host random services on my "funny" project domain with a.. free
		VPS from Oracle. I also have way too many VR full body trackers. Here are some of the "skills" I have:
	</p>
	<div class="flex flex-col items-center justify-center lg:flex-row lg:gap-16">
		<ResponsiveImage src="/images/jovann_hi.webp" width="22.25rem" aspectRatio="1:1" transparent={true} />
		<div class="mt-6 text-center lg:mt-0 lg:text-left">
			<ul class="flex list-inside list-disc flex-col gap-y-3 text-xl">
				<li>16 years of life (via Earth)</li>
				<li>3 years of content creation (video editing + bad thumbnails)</li>
				<li>2 years of self-hosting services</li>
				<span class="text-center font-bold lg:text-left">and</span>
				<li>4 years of Java (via SpigotMC)</li>
				<li>3 years of C# (via Unity)</li>
				<li>2 years of JS/TS (via multiple projects)</li>
				<li>2 years of web development (svelte my beloved)</li>
			</ul>
		</div>
	</div>
</Container>

<!-- Featured projects section -->
<Container title="Some of my work..">
	<Splide {options} aria-label="Featured projects">
		{#each projects as project}
			<SplideSlide>
				<Card
					title={project.title}
					description={project.description}
					footer={project.footer}
					thumbnail={project.thumbnail ?? ''}
					href={project.href ?? ''}
					fit={project.fit}
					fitPadding={project.fitPadding}
				/>
			</SplideSlide>
		{/each}
	</Splide>
	<ActionButton text="Projects" href="/projects" />
</Container>

<!-- Featured videos section -->
<Container title="..and my videos too!">
	<Splide {options} aria-label="Featured videos">
		{#each videos as video}
			<SplideSlide>
				<Card
					title={video.title}
					description={video.description}
					footer={video.footer}
					thumbnail={video.thumbnail}
					href={video.href}
				/>
			</SplideSlide>
		{/each}
	</Splide>
	<ActionButton text="Videos" href="/videos" />
</Container>

<!-- Contact section -->
<Container title="Contact">
	<p class="justify-center text-center text-xl">
		That's some of my stuff - did you like my work? Want to contact me? Maybe to sponsor me or give me free stuff? (I
		wish)<br />
		Head over to the contact page to see all the (hundred) platforms you could use to contact me!
	</p>
	<div class="flex flex-col content-center items-center justify-center lg:flex-row lg:gap-16">
		<ResponsiveImage src="/images/jovann_pout.webp" width="20.75rem" aspectRatio="1:1" transparent={true} />
		<div class="mt-6 text-center lg:mt-0 lg:text-left">
			<div class="flex flex-col text-xl">
				<span class="mt-0 mb-2 text-center font-bold lg:text-left">You could contact to:</span>
				<ul class="flex list-inside list-disc flex-col gap-y-2">
					<li>get to know me and become friends :D</li>
					<li>report issues/ask for help on something I have</li>
					<li>suggest ideas for my next projects</li>
					<li>give me free stuff and support me! (pls ty)</li>
				</ul>
				<span class="mt-8 mb-2 text-center font-bold lg:text-left">You can't contact to:</span>
				<ul class="flex list-inside list-disc flex-col gap-y-2">
					<li>buy your (or give you) stuff; you'd be surprised</li>
					<li>get mad at me for who I am; tough luck</li>
				</ul>
			</div>
		</div>
	</div>

	<ActionButton text="Contact" href="/contact" />
</Container>

<br /><br />

<style>
	.content {
		position: relative;
		overflow: hidden;
	}
	.scroll-indicator {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
	}
</style>
