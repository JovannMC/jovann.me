<script lang="ts">
	const socialLinks = [
		{ name: 'Email', src: '/images/socials/email.svg', href: 'mailto:contact@femboyfurry.net' },
		{
			name: 'Discord',
			src: '/images/socials/discord.svg',
			href: 'https://discord.com/invite/fPrjXeN9fe'
		},
		{
			name: 'Matrix',
			src: '/images/socials/matrix.svg',
			href: 'https://matrix.to/#/@jovannmc:tchncs.de'
		},
		{ name: 'Twitter', src: '/images/socials/twitter.svg', href: 'https://twitter.com/JovannMC' },
		{
			name: 'Mastodon',
			src: '/images/socials/mastodon.svg',
			href: 'https://mastodon.femboyfurry.net/@JovannMC'
		},
		{
			name: 'Bluesky',
			src: '/images/socials/bluesky.svg',
			href: 'https://bsky.app/profile/femboyfurry.net'
		},
		{ name: 'GitHub', src: '/images/socials/github.svg', href: 'https://github.com/JovannMC' },
		{ name: 'YouTube', src: '/images/socials/youtube.svg', href: 'https://youtube.com/@JovannMC' },
		{ name: 'Vanillo', src: '/images/socials/vanillo.svg', href: 'https://vanillo.tv/u/JovannMC' },
		{ name: 'Twitch', src: '/images/socials/twitch.svg', href: 'https://twitch.tv/JovannMC' },
		{
			name: 'PeerTube',
			src: '/images/socials/peertube.svg',
			href: 'https://vid.femboyfurry.net/c/jovannmc'
		},
		{ name: 'Ko-fi', src: '/images/socials/ko-fi.svg', href: 'https://ko-fi.com/JovannMC' }
	];

	let firstRowLinks = socialLinks.slice(0, Math.ceil(socialLinks.length / 2));
	let secondRowLinks = socialLinks.slice(Math.ceil(socialLinks.length / 2));
</script>

<footer class="bg-surface-900 py-4 text-white">
	<div class="container mx-auto px-4">
		<div class="flex flex-col items-center justify-around space-y-4 lg:flex-row lg:space-y-0">
			<!-- Logo and message -->
			<div class="flex-1 px-2 text-center lg:ml-4 lg:text-left">
				<img src="/images/jovannmc_white.png" alt="Logo" class="mx-auto mb-4 h-10 lg:mx-0" />
				<p class="mx-auto w-full lg:mx-0 lg:w-9/12">
					Hey, thanks for scrolling to the end of the page. The site is <a
						href="https://github.com/JovannMC/jovann.me"
						target="_blank"
						class="text-blue-400">open source</a
					>, maybe check it out?
				</p>
			</div>

			<!-- Links -->
			<div class="flex flex-1 items-start justify-center px-2">
				<div class="w-full text-center">
					<h3 class="mb-2 font-bold">Cool links</h3>
					<ul class="flex flex-row justify-center gap-6 lg:flex-col lg:gap-1">
						<li>
							<a href="https://vert.sh" class="hover:underline" target="_blank">VERT.sh</a>
						</li>
						<li>
							<a href="https://github.com/OCSYT/SlimeTora" class="hover:underline" target="_blank">SlimeTora</a>
						</li>
						<li>
							<a href="https://github.com/SlimeVR/" class="hover:underline" target="_blank">SlimeVR</a>
						</li>
						
					</ul>
				</div>
			</div>

			<!-- Social media icons -->
			<div class="flex-1 px-2 text-center lg:mr-4 lg:text-right">
				<div>
					<h3 class="mb-4 font-bold lg:mb-2">Find me</h3>
					<!-- First row of icons -->
					<div class="mb-4 flex justify-end gap-6 lg:mb-2 lg:gap-4">
						{#each firstRowLinks as { name, src, href }}
							<a class="social-link h-8 w-8 lg:h-7 lg:w-7" {href} rel="me" target="_blank">
								<img class="h-8 w-8 lg:h-7 lg:w-7" {src} alt={name} />
							</a>
						{/each}
					</div>
					<!-- Second row of icons -->
					<div class="flex justify-end gap-6 lg:gap-4">
						{#each secondRowLinks as { name, src, href }}
							<a class="social-link h-8 w-8 lg:h-7 lg:w-7" {href} rel="me" target="_blank">
								<img class="h-8 w-8 lg:h-7 lg:w-7" {src} alt={name} />
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="mt-4 flex items-center justify-between border-t border-gray-700 pt-4 text-xs lg:text-sm">
			<p class="w-2/4 text-left lg:w-auto">© 2025 JovannMC. All rights reserved. All wrongs not reserved.</p>
			<p class="w-3/4 text-right lg:w-auto">
				This site is under <br class="lg:hidden" />the
				<a href="https://opensource.org/license/MIT" class="text-blue-400">MIT License</a>.
			</p>
		</div>
	</div>
</footer>

<style>
	.social-link {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		transform: scale(1);
	}

	.social-link:hover,
	.social-link:active,
	.social-link:focus {
		transform: scale(1.25);
	}
</style>
