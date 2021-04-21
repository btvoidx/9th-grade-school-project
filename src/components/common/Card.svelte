<script lang="ts">
	export let pic: string = 'default.png';
	export let name: string = 'John Doe';
	export let desc: string = '';
</script>

<div class="p-6 space-y-4 text-center w-96">
	<div class="w-40 h-40 m-auto">
		<img src={pic} alt="" class="w-full h-full" />
	</div>
	<h1 class="text-4xl">{name}</h1>
	<p class="text-xl">{desc}</p>
</div>
