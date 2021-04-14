<script lang="ts">
	import ArticlePreview from '../components/common/ArticlePreview.svelte';
	import Card from '../components/common/Card.svelte';
</script>

<svelte:head>
	<title>Hello world!</title>
</svelte:head>

<div class="h-screen w-screen flex flex-row justify-center items-center space-x-32">
	<Card pic="/static/shell_shocked.webp">
		<h1 class="text-4xl">Максим Тумозов</h1>
		<p class="text-xl">Небольшой текст про меня, про то, чем занимаюсь, и про то, что это за сайт такой.</p>
	</Card>
	<div class="w-96 space-y-6">
		<h1 class="text-3xl text-center">Недавние статьи</h1>
		<ArticlePreview>
			<h2 class="text-2xl" slot="title">Заголовок 1</h2>
			<p slot="text">Небольшой отрывок текста...</p>
		</ArticlePreview>
		<ArticlePreview>
			<h2 class="text-2xl" slot="title">Заголовок 2</h2>
			<p slot="text">Небольшой отрывок другого текста, который не связан с первым...</p>
		</ArticlePreview>
		<ArticlePreview />
	</div>
</div>
