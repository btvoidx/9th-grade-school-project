<script lang="ts">
	import ArticlePreview from '../../components/common/ArticlePreview.svelte';
</script>

<h1 class="my-16 text-5xl text-center">Недавние статьи</h1>
<div class="grid max-w-4xl gap-10 w-96 auto-rows-min lg:grid-cols-2 lg:w-screen">
	<a href="/articles/first-article">
		<ArticlePreview>
			<h2 class="text-2xl" slot="title">Заголовок 1</h2>
			<p slot="text">Небольшой отрывок текста...</p>
		</ArticlePreview>
	</a>

	<ArticlePreview>
		<h2 class="text-2xl" slot="title">Заголовок 2</h2>
		<p slot="text">Небольшой отрывок другого текста, который не связан с первым...</p>
	</ArticlePreview>

	<ArticlePreview />
</div>
