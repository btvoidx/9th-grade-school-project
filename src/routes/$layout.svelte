<script>
	import '../app.postcss';
	import { camera } from '$lib/stores';

	$: style = `--tw-translate-x: ${$camera.x * -1}%; --tw-translate-y: ${$camera.y * -1}%`;
</script>

<div class="fixed top-0 left-0 z-10 flex flex-col">
	<a href="/">index</a>
	<a href="/first">first</a>
	<a href="/second">second</a>
	<a href="/third">third</a>
</div>

<main class="w-screen h-screen overflow-hidden bg-gray-50">
	<div {style} class="relative w-full h-full transition-transform duration-500 transform-gpu">
		<slot />
	</div>
</main>
