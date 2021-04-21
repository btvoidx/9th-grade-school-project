<script lang="ts">
	export let small: boolean = false;
	export let title: string = 'A title!';
	export let content: string = 'Content preview should be here';
</script>

<article class="w-full p-2 overflow-hidden rounded h-60 ring-4 ring-black" class:!h-40={small}>
	<h2 class="text-2xl">{title}</h2>
	<p>{content}</p>
</article>
