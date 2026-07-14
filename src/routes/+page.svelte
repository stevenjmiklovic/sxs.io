<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Services from '$lib/components/sections/Services.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Stack from '$lib/components/sections/Stack.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
</script>

<svelte:head>
	<title>SXS — Symbolic × Subsymbolic</title>
	<meta
		name="description"
		content="Architecture, integration, and evaluation for production AI systems. Current work spans agent tooling, knowledge artifacts, intelligence interfaces, and systems software."
	/>
</svelte:head>

<Hero />
<About />
<Services />
<Projects />
<Stack />
<Contact />
