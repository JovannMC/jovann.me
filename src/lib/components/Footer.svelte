<script lang="ts">
	const socialLinks = [
		{ name: 'Email', src: '/images/socials/email.svg', href: 'mailto:contact@femboyfurry.net' },
		{ name: 'Discord', src: '/images/socials/discord.svg', href: 'https://discord.com/invite/fPrjXeN9fe' },
		{ name: 'Matrix', src: '/images/socials/matrix.svg', href: 'https://matrix.to/#/@jovannmc:tchncs.de' },
		{ name: 'Twitter', src: '/images/socials/twitter.svg', href: 'https://twitter.com/JovannMC' },
		{ name: 'Mastodon', src: '/images/socials/mastodon.svg', href: 'https://mastodon.femboyfurry.net/@JovannMC' },
		{ name: 'Bluesky', src: '/images/socials/bluesky.svg', href: 'https://bsky.app/profile/femboyfurry.net' },
		{ name: 'GitHub', src: '/images/socials/github.svg', href: 'https://github.com/JovannMC' },
		{ name: 'YouTube', src: '/images/socials/youtube.svg', href: 'https://youtube.com/@JovannMC' },
		{ name: 'Vanillo', src: '/images/socials/vanillo.svg', href: 'https://vanillo.tv/u/JovannMC' },
		{ name: 'Twitch', src: '/images/socials/twitch.svg', href: 'https://twitch.tv/JovannMC' },
		{ name: 'PeerTube', src: '/images/socials/peertube.svg', href: 'https://vid.femboyfurry.net/c/jovannmc' },
		{ name: 'Ko-fi', src: '/images/socials/ko-fi.svg', href: 'https://ko-fi.com/JovannMC' }
	];

	let firstRowLinks = socialLinks.slice(0, Math.ceil(socialLinks.length / 2));
	let secondRowLinks = socialLinks.slice(Math.ceil(socialLinks.length / 2));
</script>

<footer class="bg-surface-900 text-white py-4">
	<div class="container mx-auto px-4">
		<div class="flex flex-col lg:flex-row justify-around items-center space-y-4 lg:space-y-0">
			<!-- Logo and message -->
			<div class="flex-1 px-2 text-center lg:text-left lg:ml-4">
				<img src="/images/jovannmc_white.png" alt="Logo" class="h-10 mb-4 mx-auto lg:mx-0" />
				<p class="w-full lg:w-9/12 mx-auto lg:mx-0">
					Hey, thanks for scrolling to the end of the page. The site is <a
						href="https://github.com/JovannMC/jovann.me"
						target="_blank"
						class="text-blue-400">open source</a
					>, maybe check it out?
				</p>
			</div>

			<!-- Links -->
			<div class="flex-1 flex justify-center items-start px-2">
				<div class="w-full text-center">
					<h3 class="font-bold mb-2">Cool links</h3>
					<ul class="flex flex-row lg:flex-col lg:gap-1 gap-6 justify-center">
						<li><a href="https://litdevs.org/" class="hover:underline" target="_blank">LIT Devs</a></li>
						<li><a href="https://github.com/OCSYT/SlimeTora" class="hover:underline" target="_blank">SlimeTora</a></li>
						<li><a href="https://github.com/SlimeVR/" class="hover:underline" target="_blank">SlimeVR</a></li>
					</ul>
				</div>
			</div>

			<!-- Social media icons -->
			<div class="flex-1 text-center lg:text-right px-2 lg:mr-4">
				<div>
					<h3 class="font-bold mb-4 lg:mb-2">Find me</h3>
					<!-- First row of icons -->
					<div class="flex justify-end lg:gap-4 gap-6 lg:mb-2 mb-4">
						{#each firstRowLinks as { name, src, href }}
							<a class="social-link w-8 h-8 lg:w-7 lg:h-7" {href} rel="me" target="_blank">
								<img class="w-8 h-8 lg:w-7 lg:h-7" {src} alt={name} />
							</a>
						{/each}
					</div>
					<!-- Second row of icons -->
					<div class="flex justify-end lg:gap-4 gap-6">
						{#each secondRowLinks as { name, src, href }}
							<a class="social-link w-8 h-8 lg:w-7 lg:h-7" {href} rel="me" target="_blank">
								<img class="w-8 h-8 lg:w-7 lg:h-7" {src} alt={name} />
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="mt-4 flex justify-between items-center border-t pt-4 border-gray-700 text-xs lg:text-base">
			<p class="lg:w-auto w-2/4 text-left">© 2025 JovannMC. All rights reserved. All wrongs not reserved.</p>
			<p class="lg:w-auto w-3/4 text-right">
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
