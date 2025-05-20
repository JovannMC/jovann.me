<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Container from '$lib/components/Container.svelte';

	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

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

	let projectCategories = [
		{
			category: 'Self-hosted Projects',
			projects: [
				{
					title: 'Silly Creative Collective',
					description: 'Soon to host many projects and services, SCC is ran by a group of friends!',
					footer: 'In development',
					thumbnail: '/images/projects/scc_logo.webp',
					fit: 'contain',
					fitPadding: 'p-12'
				},
				{
					title: 'Mastodon',
					description: 'The Mastodon instance with the funny domain - @username@femboyfurry.net',
					footer: 'Active',
					thumbnail: '/images/socials/mastodon.svg',
					href: 'https://mastodon.femboyfurry.net',
					fit: 'contain',
					fitPadding: 'p-12'
				},
				{
					title: 'FurryFlix',
					description: 'Yet another PeerTube instance with the funny domain - vid.femboyfurry.net',
					footer: 'Active',
					thumbnail: '/images/socials/peertube.svg',
					href: 'https://vid.femboyfurry.net',
					fit: 'contain',
					fitPadding: 'p-12'
				}
			]
		},
		{
			category: 'Software Development',
			projects: [
				{
					title: 'SlimeTora',
					description: 'A program that connects all HaritoraX trackers to the SlimeVR server.',
					footer: 'Electron/Bulma/TS',
					thumbnail: '/images/projects/slimetora_icon.webp',
					href: 'https://github.com/OCSYT/SlimeTora',
					fit: 'cover',
					fitPadding: 'p-12'
				},
				{
					title: 'haritorax-interpreter',
					description: 'A node.js package that allows you to communicate with the HaritoraX FBT trackers.',
					footer: 'NodeJS/TS',
					thumbnail: '/images/projects/haritorax-interpreter.png',
					href: 'https://github.com/JovannMC/haritorax-interpreter',
					fit: 'cover',
					fitPadding: 'p-12'
				},
				{
					title: 'silence-remover',
					description: 'A Python script to remove silence from the beginning and end of audio files.',
					footer: 'Python',
					href: 'https://github.com/JovannMC/silence-remover',
					fit: 'contain',
					fitPadding: 'p-12'
				},
				{
					title: 'haritora-gx-poc',
					description: 'A proof-of-concept app that interprets the GX(6/2) dongle data for the HaritoraX Wireless.',
					footer: 'Python',
					thumbnail: '/images/projects/haritora-gx-poc.png',
					href: 'https://github.com/JovannMC/haritora-gx-poc',
					fit: 'contain',
					fitPadding: 'p-2'
				},
				{
					title: 'ServerMC',
					description: 'A Minecraft server manager taking inspiration from MultiMC.',
					footer: 'Electron/TS',
					thumbnail: '/images/projects/servermc.webp',
					href: 'https://github.com/JovannMC/ServerMC',
					fit: 'cover',
					fitPadding: 'p-12'
				}
			]
		},
		{
			category: 'Web Development',
			projects: [
				{
					title: 'jovann.me',
					description: 'The website you\'re on! My personal (and more "serious") website.',
					footer: 'SvelteKit/TS',
					fit: 'contain',
					fitPadding: 'p-12'
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
					title: 'femboyfurry.net',
					description: 'My previous website - more of a joke. Most of my self-hosted projects will be hosted here.',
					footer: 'Bulma/JS',
					thumbnail: '/images/projects/femboyfurry-net.webp',
					href: 'https://femboyfurry.net',
					fit: 'cover'
				},
				{
					title: 'TheSauceSage',
					description: 'A website for the content creator, TheSauceSage, and their SMP. A free commission.',
					footer: 'Vanilla/JS',
					thumbnail: '/images/projects/thesaucesage.webp',
					href: 'https://thesaucesage.com/',
					fit: 'cover',
					fitPadding: 'p-12'
				},
				{
					title: "Sky's portfolio",
					description: 'A small portfolio for Sky for their art and commissions. A free commission.',
					footer: 'Vanilla/JS',
					thumbnail: '/images/projects/sky_pfp.webp',
					href: 'https://sky.femboyfurry.net',
					fit: 'cover',
					fitPadding: 'p-12'
				}
			]
		},
		{
			category: 'Minecraft Development',
			projects: [
				{
					title: 'MentionChat',
					description: 'A simple plugin to mention other players in chat.',
					footer: 'Spigot/Java',
					thumbnail: '/images/projects/mentionchat.png',
					href: 'https://www.spigotmc.org/resources/mentionchat-mention-other-players-in-chat-1-8-1-20-4.111656/',
					fit: 'contain',
					fitPadding: 'p-2'
				},
				{
					title: 'PlayerInvincibility',
					description:
						"Let players be invincible to other player attacks. I couldn't find a similar plugin, so I did it myself!",
					footer: 'Spigot/Java',
					thumbnail: '/images/socials/spigotmc.webp',
					href: 'https://github.com/JovannMC/PlayerInvincibility',
					fit: 'contain',
					fitPadding: 'p-12'
				},
				{
					title: 'ArcherySMP',
					description: 'A plugin for the ArcherySMP server to add archers and hunters. A free commission.',
					footer: 'Spigot/Java',
					thumbnail: '/images/socials/spigotmc.webp',
					fit: 'contain',
					fitPadding: 'p-12'
				},
				{
					title: 'JustFly',
					description: 'Yet another flight plugin.',
					footer: 'Spigot/Java',
					thumbnail: '/images/socials/spigotmc.webp',
					href: 'https://www.spigotmc.org/resources/justfly-yet-another-flight-plugin.84407/',
					fit: 'contain',
					fitPadding: 'p-12'
				},
				{
					title: 'IslandTurfs',
					description: "A plugin recreating Protocraft's IslandTurfs minigame as a Spigot plugin.",
					footer: 'Spigot/Java',
					thumbnail: '/images/socials/spigotmc.webp',
					href: 'https://github.com/JovannMC/IslandTurfs',
					fit: 'contain',
					fitPadding: 'p-12'
				}
			]
		},
		{
			category: '"Game" Development',
			projects: [
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
					title: 'Salad Clicker',
					description: 'A (bad) clicker game.. also based off the program that earns you money, Salad.',
					footer: 'Unity/C#',
					thumbnail: '/images/projects/salad-clicker.webp',
					href: 'https://github.com/JovannMC/salad-clicker',
					fitPadding: 'p-12'
				},
				{
					title: 'Actually Planned 3D Shooter',
					description: 'A really old Unity game I abandoned.. yeah that is actually the name.',
					footer: 'Unity/C#',
					thumbnail: '/images/projects/actually-planned-3d-shooter.webp',
					href: 'https://github.com/JovannMC/actually-planned-3d-shooter',
					fitPadding: 'p-12'
				}
			]
		}
	];
</script>

<header>
	<title>My projects!</title>
</header>

<Container title="My projects!">
	<p class="justify-center text-center text-xl">
		Here are some of the projects I've worked on ranging from programs and websites, to games and Minecraft plugins!<br
		/>
		<br />
		Click on any of the project cards to visit and learn more about them.
	</p>
</Container>

{#each projectCategories as category}
	<Container title={category.category}>
		<Splide {options} aria-label={category.category}>
			{#each category.projects as project}
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
	</Container>
{/each}
