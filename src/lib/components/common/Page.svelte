<script context="module" lang="ts">
	const delay = (_: HTMLElement, p: { delay?: number }) => {
		return {
			delay: p.delay || 500,
		};
	};
</script>

<script lang="ts">
	import type { Pos } from '$lib/types';
	import { camera } from '$lib/stores';

	export let pos: Pos = { x: 0, y: 0 };

	$: style = `--tw-translate-x: ${pos.x}%; --tw-translate-y: ${pos.y}%`;
	$: camera.set(pos);
</script>

<div class="absolute w-full h-full bg-purple-100 transform-gpu" {style} out:delay>
	<slot />
</div>
