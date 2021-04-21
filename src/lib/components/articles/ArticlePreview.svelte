<script lang="ts">
	export let small: boolean = false;
	export let title: string = 'A title!';
	export let content: string = 'Content preview should be here';
</script>

<article class="relative w-full p-4 overflow-hidden bg-gray-100 rounded filter drop-shadow h-60" class:!h-40={small}>
	<h2 class="mb-2 text-2xl">{title}</h2>
	<p>{content}</p>
	{#if !small}
		<p class="absolute text-xl bottom-4 left-4">Read more</p>
	{/if}
</article>
