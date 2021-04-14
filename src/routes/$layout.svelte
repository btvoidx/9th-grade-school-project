<script>
	import '../app.postcss';
</script>

<header class="fixed top-0 w-screen h-16 flex justify-center">
	<div class="h-full w-full max-w-4xl flex flex-row items-center p-4 space-x-6 text-xl">
		<a href="/" class="text-2xl mr-4">Мой Блог</a>
		<a href="/articles">Статьи</a>
		<a href="/about">Обо мне</a>
		<a href="/contacts" class="!ml-auto">Связаться</a>
	</div>
</header>

<main>
	<slot />
</main>
