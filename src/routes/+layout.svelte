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

<a class="skip-link" href="#main-content">Skip to content</a>
<Header />
<main id="main-content">
	<slot />
</main>
<Footer />

<style>
	main {
		display: block;
	}
</style>
