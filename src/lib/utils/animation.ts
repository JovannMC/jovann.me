// stolen from VERT.sh - https://github.com/VERT-sh/VERT
// it's okay, i'm one of the main developers there :3
import { writable } from "svelte/store";
import { fade as svelteFade, fly as svelteFly, type FadeParams, type FlyParams } from "svelte/transition";

export const goingLeft = writable(false);

export const transition =
	"linear(0,0.006,0.025 2.8%,0.101 6.1%,0.539 18.9%,0.721 25.3%,0.849 31.5%,0.937 38.1%,0.968 41.8%,0.991 45.7%,1.006 50.1%,1.015 55%,1.017 63.9%,1.001)";

export const duration = 500;

export function fade(node: HTMLElement, options: FadeParams) {
	const animation = svelteFade(node, options);
	return animation;
}

export function fly(node: HTMLElement, options: FlyParams) {
	const animation = svelteFly(node, options);
	return animation;
}
