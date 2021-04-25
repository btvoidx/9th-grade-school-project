<script lang="ts" context="module">
	import type { Dimensions } from '$lib/types';

	const spriteSize = 32;

	enum Sprite {
		CornerUL,
		CornerUR,
		CornerDL,
		CornerDR,
		SideU,
		SideL,
		SideR,
		SideD,
	}

	const snapToSize = (num: number): number => Math.ceil(num / spriteSize) * spriteSize;

	const createCanvas = (dim: Dimensions): HTMLCanvasElement => {
		let canvas = document.createElement('canvas');
		canvas.width = dim[0];
		canvas.height = dim[1];

		return canvas;
	};

	const getSprite = (type: Sprite, variant: number, sheetDim: Dimensions): [number, number] => {
		if (variant === -1) {
			variant = type > 3 ? Math.floor(Math.random() * (sheetDim[0] / spriteSize - 1)) : 0;
		}

		let x = variant * spriteSize;
		let y = type * spriteSize;

		return [x, y];
	};

	const drawCanvas = (canvas: HTMLCanvasElement, dim: Dimensions, spriteSheet: HTMLImageElement) => {
		let ctx = canvas.getContext('2d');
		let sheetDim: Dimensions = [spriteSheet.width, spriteSheet.height];

		const drawSprite = (sprite: Sprite, pos: [number, number], variant = -1) => {
			ctx.drawImage(spriteSheet, ...getSprite(sprite, variant, sheetDim), spriteSize, spriteSize, ...pos, spriteSize, spriteSize);
		};

		// Corners
		drawSprite(Sprite.CornerUL, [0, 0]);
		drawSprite(Sprite.CornerUR, [dim[0] - spriteSize, 0]);
		drawSprite(Sprite.CornerDL, [0, dim[1] - spriteSize]);
		drawSprite(Sprite.CornerDR, [dim[0] - spriteSize, dim[1] - spriteSize]);

		let fx = dim[0] / spriteSize - 1;
		let fy = dim[1] / spriteSize - 1;

		// X-Axis
		for (let i = 1; i < fx; i++) {
			drawSprite(Sprite.SideU, [i * 32, 0]);
			drawSprite(Sprite.SideD, [i * 32, dim[1] - spriteSize]);
		}

		// Y-Axis
		for (let i = 1; i < fy; i++) {
			drawSprite(Sprite.SideL, [0, i * 32]);
			drawSprite(Sprite.SideR, [dim[0] - spriteSize, i * 32]);
		}
	};

	const generateNoteStyle = (el: HTMLElement, spriteSheet: HTMLImageElement): string => {
		let width = snapToSize(el.offsetWidth);
		let height = snapToSize(el.offsetHeight);

		let canvas = createCanvas([width, height]);
		drawCanvas(canvas, [width, height], spriteSheet);

		return `
			width: ${width}px;
			height: ${height}px;

			background: url(${canvas.toDataURL()}) no-repeat center, #EFE7CE content-box;
		`.replace(/[\t\n]/g, '');
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	let self: HTMLDivElement | undefined;
	let noteStyle = 'background: #EFE7CE; border: solid #6B6B6B 6px; border-radius: 12px; padding: 28px';

	onMount(() => {
		let spriteSheet = new Image();
		spriteSheet.src = '/note_borders.png';
		spriteSheet.onload = () => {
			noteStyle = generateNoteStyle(self, spriteSheet);
		};
	});
</script>

{#if true}
	<div bind:this={self} style={noteStyle} class="relative filter drop-shadow-md p-8">
		<slot />
	</div>
{:else}
	<p>Invalid note params</p>
{/if}

<style>
	div {
		image-rendering: pixelated;
	}
</style>
