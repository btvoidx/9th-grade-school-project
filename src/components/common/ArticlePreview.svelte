<script lang="ts">
	export let small: boolean = false;
</script>

<article class="w-full h-56 p-2 overflow-hidden rounded ring-4 ring-black" class:!h-32={small}>
	<slot name="title">
		<h2 class="text-2xl">Стандартный заголовок статьи</h2>
	</slot>
	<slot name="text">
		<p>Небольшой отрывок текста статьи. Буквально пара-другая слов.</p>
	</slot>
</article>
