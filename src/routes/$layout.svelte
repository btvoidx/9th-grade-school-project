<script>
	import '../app.postcss';
	import { camera } from '$lib/stores';

	$: style = `--tw-translate-x: ${$camera.x * -1}%; --tw-translate-y: ${$camera.y * -1}%`;
</script>

<main class="w-screen h-screen overflow-hidden bg-bg-primary">
	<div {style} class="relative w-full h-full transition-transform duration-500 transform-gpu">
		<slot />
	</div>
</main>
