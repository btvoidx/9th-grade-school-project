<script lang="ts">
	import ArticlePreview from '$lib/components/articles/ArticlePreview.svelte';
</script>

<h1 class="my-16 text-5xl text-center">Недавние статьи</h1>
<div class="grid max-w-4xl gap-10 w-96 auto-rows-min lg:grid-cols-2 lg:w-screen">
	<a href="/blog/first-article">
		<ArticlePreview content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
	</a>
	<ArticlePreview />
	<ArticlePreview />
</div>
