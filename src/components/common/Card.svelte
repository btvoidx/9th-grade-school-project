<script lang="ts">
	export let pic: string = 'default.png';
</script>

<div class="w-96 p-6 space-y-4 text-center">
	<div class="h-40 w-40 m-auto">
		<img src={pic} alt="" class="h-full w-full" />
	</div>
	<slot>
		<h1 class="text-4xl">Имя Фамилия</h1>
		<p class="text-xl">Небольшое описание этой личности.</p>
	</slot>
</div>
