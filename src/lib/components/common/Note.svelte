<script lang="ts" context="module">
	type sprites = { x: number; y: number }[];

	const computeBorders = (size: Size) => {
		let borderArray: sprites = [];

		//  Corners
		borderArray.push(
			{
				x: 0,
				y: 0,
			},
			{
				x: size[0] + 1,
				y: 0,
			},
			{
				x: 0,
				y: size[1] + 1,
			},
			{
				x: size[0] + 1,
				y: size[1] + 1,
			}
		);

		// X-axis
		for (let i = 1; i <= size[0]; i++) {
			borderArray.push(
				{
					x: i,
					y: 0,
				},
				{
					x: i,
					y: size[1] + 1,
				}
			);
		}

		// Y-axis
		for (let i = 1; i <= size[1]; i++) {
			borderArray.push(
				{
					x: 0,
					y: i,
				},
				{
					x: size[0] + 1,
					y: i,
				}
			);
		}

		console.clear();
		console.log(borderArray);

		return borderArray;
	};
</script>

<script lang="ts">
	import type { Size } from '$lib/types';

	export let size: Size = [0, 0];
	const borders: string = 'url("/static/note_borders.png")';

	$: actualSize = <Size>[size[0] + 2, size[1] + 2];
	$: noteStyle = `
		width: ${actualSize[0] * 32}px;
		height: ${actualSize[1] * 32}px;
	`.replace(/[\t\n]/g, '');
	$: borderSprites = computeBorders(size);
</script>

{#if size[0] >= 1 && size[1] >= 1}
	<div style={noteStyle} class="note relative filter drop-shadow-md">
		{#each borderSprites as sprite}
			<div class="bg-red-600 w-8 h-8 absolute" style={`top: ${sprite.y * 32}px; left: ${sprite.x * 32}px;`} />
		{/each}
	</div>
{:else}
	<p>Invalid note params</p>
{/if}

<style>
	.note {
		image-rendering: pixelated;
	}
</style>
