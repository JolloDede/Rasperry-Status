<script lang="ts">
	export let progress: number;
	export let total: number;

	let clazz = '';
	export { clazz as class };
</script>

<progress class={'w-full' + ' ' + clazz} value={progress} max={total}></progress>
