<script lang="ts">
	import ArticlePreview from '../components/common/ArticlePreview.svelte';
	import Card from '../components/common/Card.svelte';
</script>

<svelte:head>
	<title>Hello world!</title>
</svelte:head>

<div class="flex flex-row items-center justify-center space-x-32">
	<Card pic="/shell_shocked.webp">
		<h1 class="text-4xl">Максим Тумозов</h1>
		<p class="text-xl">Небольшой текст про меня, про то, чем занимаюсь, и про то, что это за сайт такой.</p>
	</Card>
	<div class="space-y-6 w-96">
		<h1 class="text-3xl text-center">Недавние статьи</h1>
		<ArticlePreview small>
			<h2 class="text-2xl" slot="title">Заголовок 1</h2>
			<p slot="text">Небольшой отрывок текста...</p>
		</ArticlePreview>
		<ArticlePreview small>
			<h2 class="text-2xl" slot="title">Заголовок 2</h2>
			<p slot="text">Небольшой отрывок другого текста, который не связан с первым...</p>
		</ArticlePreview>
		<ArticlePreview small />
	</div>
</div>
