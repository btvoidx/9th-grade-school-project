<script lang="ts">
	import Page from '$lib/components/common/Page.svelte';
</script>

<Page pos={{ x: 0, y: 0 }}>
	<div class="relative p-4 font-handwriting">
		<div class="z-10 relative">
			<h1 class="text-4xl">Note header!</h1>
			<p class="text-2xl">note content</p>
			<p class="text-2xl">with custom font!</p>
		</div>
		<img src="/static/note_me.png" alt="" class="absolute top-0 left-0 filter drop-shadow-md pointer-events-none" />
	</div>
</Page>
