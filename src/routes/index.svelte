<script lang="ts">
	import Card from '$lib/components/common/Card.svelte';
	import ArticlePreview from '$lib/components/articles/ArticlePreview.svelte';
</script>

<svelte:head>
	<title>Hello world!</title>
</svelte:head>

<div class="flex flex-row items-center justify-center space-x-32">
	<Card
		pic="/shell_shocked.webp"
		name="Понкратов Антон"
		desc="Небольшой текст про меня, про то, чем занимаюсь, и про то, что это за сайт такой."
	/>
	<div class="space-y-6 w-96">
		<h1 class="text-3xl text-center">Недавние статьи</h1>
		<ArticlePreview small title="Заголовок 1" content="Небольшой отрывок текста..." />
		<ArticlePreview small />
		<ArticlePreview small />
	</div>
</div>
