<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	onMount(async () => {
		const { initSXSConsole } = await import('$lib/console/sxsConsole');
		initSXSConsole();
	});
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		padding-top: var(--header-height);
	}
</style>
