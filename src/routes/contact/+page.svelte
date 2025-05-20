<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import HorizontalCard from '$lib/components/HorizontalCard.svelte';

	let socialCategories = [
		{
			category: 'Communication',
			links: [
				{
					name: 'Email',
					description: "Send me an email, if that's more your thing!",
					footer: 'Click to email me!',
					thumbnail: '/images/socials/email.svg',
					href: 'mailto:contact@femboyfurry.net'
				},
				{
					name: 'Discord',
					description: 'Join my Discord server and find me there!',
					footer: 'Click to join!',
					thumbnail: '/images/socials/discord.svg',
					href: 'https://discord.com/invite/fPrjXeN9fe'
				},
				{
					name: 'Matrix',
					description: 'Add me on Matrix on your favourite homeserver and client!',
					footer: 'Click to add me!',
					thumbnail: '/images/socials/matrix.svg',
					href: 'https://matrix.to/#/@jovannmc:tchncs.de'
				}
			]
		},
		{
			category: 'Social Media',
			links: [
				{
					name: 'Twitter',
					description: "Follow me on Twitter (no it's not X, and never will be)",
					footer: 'Click to follow!',
					thumbnail: '/images/socials/twitter.svg',
					href: 'https://twitter.com/JovannMC'
				},
				{
					name: 'Mastodon',
					description: 'Follow me on the fediverse (for micro-blogging)!',
					footer: 'Click to follow!',
					thumbnail: '/images/socials/mastodon.svg',
					href: 'https://mastodon.femboyfurry.net/@JovannMC'
				},
				{
					name: 'Bluesky',
					description: 'Follow me on the "Twitter replacement" people moved to!',
					footer: 'Click to follow!',
					thumbnail: '/images/socials/bluesky.svg',
					href: 'https://bsky.app/profile/femboyfurry.net'
				}
			]
		},
		{
			category: 'Content Creation',
			links: [
				{
					name: 'Ko-fi',
					description: 'Support me with either a one-time or a recurring donation!',
					footer: 'Click to donate!',
					thumbnail: '/images/socials/ko-fi.svg',
					href: 'https://ko-fi.com/JovannMC'
				},
				{
					name: 'GitHub',
					description: 'Find my open-sourced projects and my contributions!',
					footer: 'Click to view my profile!',
					thumbnail: '/images/socials/github.svg',
					href: 'https://github.com/JovannMC'
				},
				{
					name: 'YouTube',
					description: 'Subscribe and watch my videos on the platform we are all stuck with.',
					footer: 'Click to subscribe!',
					thumbnail: '/images/socials/youtube.svg',
					href: 'https://youtube.com/@JovannMC'
				},
				{
					name: 'Vanillo',
					description: 'Follow me and watch my videos on the cool ice cream platform!',
					footer: 'Click to follow!',
					thumbnail: '/images/socials/vanillo.svg',
					href: 'https://vanillo.tv/u/JovannMC'
				},
				{
					name: 'Twitch',
					description: 'Follow me and maybe watch my live streams (if I start again)!',
					footer: 'Click to follow!',
					thumbnail: '/images/socials/twitch.svg',
					href: 'https://twitch.tv/JovannMC'
				},
				{
					name: 'PeerTube',
					description: 'Subscribe to me on the fediverse (for video-sharing)!',
					footer: 'Click to subscribe!',
					thumbnail: '/images/socials/peertube.svg',
					href: 'https://vid.femboyfurry.net/c/jovannmc'
				}
			]
		}
	];
</script>

<header>
	<title>Contact me!</title>
</header>

<Container title="Contact me!">
	<p class="text-xl text-center justify-center">
		Here are all the ways you can contact me! Bug me about issues, ask me questions, or just say hi!<br /><br />
		You can also find all the other platforms I am active on - watching, creating, or just existing.
	</p>
	{#each socialCategories as category}
		<h2 class="text-2xl text-center font-bold my-4">{category.category}</h2>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			{#each category.links as link}
				<HorizontalCard
					title={link.name}
					description={link.description}
					footer={link.footer}
					thumbnail={link.thumbnail}
					href={link.href}
				></HorizontalCard>
			{/each}
		</div>
	{/each}
</Container>
