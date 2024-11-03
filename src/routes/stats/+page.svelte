<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Progress from '$lib/components/Progress.svelte';

	let { data = $bindable() } = $props();

	$effect(() => {
		const interval = setInterval(() => {
			invalidateAll();
		}, 2000);

		return () => {
			clearInterval(interval);
		}
	});
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="mb-6 text-3xl font-bold">Raspberry Pi</h1>
	<!-- <p>{data.time.toLocaleTimeString()}</p> -->  <!-- Testing purposes (Time validation)-->

	<div class="space-y-4 rounded-lg border p-6">
		<div>
			<h1 class="text-4xl">System Information</h1>
		</div>
		<div class="space-y-2">
			{#each data.hostInfo as info}
				<div class="flex justify-between text-sm">
					<span>{info[0]}</span>
					<span>{info[1]}</span>
				</div>
			{/each}
		</div>
		<div>
			<h1 class="text-2xl">CPU Usage</h1>
			<div class="space-y-2">
				{#each data.cpuUsage as cpu, index}
					<div class="space-y-1">
						<div class="flex justify-between text-sm">
							<span>Core {index}</span>
							<span>{cpu}%</span>
						</div>
						<Progress progress={parseFloat(cpu)} total={100} class="h-2" />
					</div>
				{/each}
			</div>
		</div>
		<div>
			<h1 class="text-2xl">Memory Usage</h1>
			<div class="space-y-2">
				<div class="flex justify-between text-sm">
					<span>Used</span>
					<span>{data.memoryUsage.used + ' / ' + data.memoryUsage.total + 'GB'}</span>
				</div>
				<Progress progress={data.memoryUsage.used} total={data.memoryUsage.total} class="h-2" />
			</div>
		</div>
	</div>
</div>
