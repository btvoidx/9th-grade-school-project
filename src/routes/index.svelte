<svelte:head>
	<title>Hello world!</title>
</svelte:head>

<div class="h-screen w-screen flex flex-row justify-center items-center space-x-32">
	<div class="w-96 p-6 space-y-4 text-center">
		<div class="h-40 w-40 m-auto">
			<img src="/static/me.png" alt="" class="h-full w-full" />
		</div>
		<h1 class="text-4xl">Максим Тумозов</h1>
		<p class="text-xl">Небольшой текст про меня, про то, чем занимаюсь, и про то, что это за сайт такой.</p>
	</div>
	<div class="w-96 space-y-6">
		<h1 class="text-3xl text-center">Недавние статьи</h1>
		<div class="w-full ring-4 ring-black rounded p-2 h-32">
			<h2 class="text-2xl">Заголовок 1</h2>
			<p>Небольшой отрывок текста...</p>
		</div>
		<div class="w-full ring-4 ring-black rounded p-2 h-32">
			<h2 class="text-2xl">Заголовок 2</h2>
			<p>Небольшой отрывок другого текста, который не связан с первым...</p>
		</div>
		<div class="w-full ring-4 ring-black rounded p-2 h-32">
			<h2 class="text-2xl">Заголовок 3</h2>
			<p>Небольшой отрывок третьего текста, который не связан с первыми двумя. Если честно, его даже не я писал.</p>
		</div>
	</div>
</div>
