<script>
	import '../app.postcss';
	import Header from '$lib/components/common/Header.svelte';
</script>

<Header />

<main class="flex justify-center w-screen min-h-screen px-4">
	<slot />
</main>
