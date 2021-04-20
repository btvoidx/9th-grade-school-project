<script>
	import '../app.postcss';
</script>

<header class="fixed top-0 flex justify-center w-screen h-16 bg-white">
	<div class="flex flex-row items-center w-full h-full max-w-4xl p-4 space-x-6 text-xl">
		<a href="/" class="mr-4 text-2xl">Мой Блог</a>
		<a href="/articles">Статьи</a>
		<a href="/">Обо мне</a>
		<a href="/" class="!ml-auto">Связаться</a>
	</div>
</header>

<main class="flex justify-center w-screen min-h-screen">
	<slot />
</main>
