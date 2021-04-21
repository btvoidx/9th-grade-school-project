<script>
	import '../app.postcss';
	import Header from '../components/common/Header.svelte';
</script>

<Header />

<main class="flex justify-center w-screen min-h-screen">
	<slot />
</main>
