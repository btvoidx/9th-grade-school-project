<script lang="ts">
	import ArticlePreview from '../../components/common/ArticlePreview.svelte';
</script>

<div class="flex flex-col items-center w-full pt-32 space-y-16">
	<h1 class="text-5xl">Недавние статьи</h1>
	<div class="grid max-w-4xl gap-10 w-96 auto-rows-min lg:grid-cols-2 lg:w-full">
		<ArticlePreview>
			<h2 class="text-2xl" slot="title">Заголовок 1</h2>
			<p slot="text">Небольшой отрывок текста...</p>
		</ArticlePreview>
		<ArticlePreview>
			<h2 class="text-2xl" slot="title">Заголовок 2</h2>
			<p slot="text">Небольшой отрывок другого текста, который не связан с первым...</p>
		</ArticlePreview>
		<ArticlePreview />
		<ArticlePreview />
		<ArticlePreview />
		<ArticlePreview />
		<ArticlePreview />
		<ArticlePreview />
		<ArticlePreview />
	</div>
</div>
