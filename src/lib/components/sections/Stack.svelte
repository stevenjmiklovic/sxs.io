<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import TerminalBox from '$lib/components/ui/TerminalBox.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import { stack } from '$lib/data/stack';
	import { reveal } from '$lib/utils/observe';
</script>

<section class="section" id="stack" aria-labelledby="stack-header">
	<div class="container">
		<SectionHeader
			id="stack-header"
			index="04"
			title="TECHNOLOGY STACK"
			subtitle="// Tools and technologies in daily use."
		/>

		<div class="stack-grid" use:reveal>
			{#each stack as category}
				<TerminalBox title={category.label}>
					<div class="stack-items">
						{#each category.items as item}
							<Badge label={item} />
						{/each}
					</div>
				</TerminalBox>
			{/each}
		</div>
	</div>
</section>

<style>
	.stack-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: var(--space-md);
	}
	.stack-items {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
	}
</style>
