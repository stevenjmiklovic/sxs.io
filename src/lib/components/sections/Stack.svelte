<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import { stack } from '$lib/data/stack';
	import { reveal } from '$lib/utils/observe';
</script>

<section class="section stack" id="stack" aria-labelledby="stack-header">
	<div class="container">
		<SectionHeader
			id="stack-header"
			eyebrow="Field kit"
			title="A stack is a set of tradeoffs."
			subtitle="These are the tools in current use—not a wall of every logo encountered. The system, team, and operating constraints make the final call."
		/>

		<div class="stack-grid" use:reveal>
			{#each stack as category, index}
				<article class="stack-group">
					<div class="stack-group__head">
						<span>0{index + 1}</span>
						<h3>{category.label}</h3>
					</div>
					<p>{category.description}</p>
					<div class="stack-items">
						{#each category.items as item}<Badge label={item} />{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.stack {
		background: rgba(255, 255, 255, 0.45);
	}

	.stack-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		border-top: 1px solid var(--line-strong);
		border-left: 1px solid var(--line-strong);
	}

	.stack-group {
		min-height: 250px;
		padding: 1.5rem;
		border-right: 1px solid var(--line-strong);
		border-bottom: 1px solid var(--line-strong);
		background: rgba(255, 255, 255, 0.3);
	}

	.stack-group__head {
		display: grid;
		grid-template-columns: 2rem 1fr;
		gap: 0.75rem;
		align-items: baseline;
		margin-bottom: 1rem;
	}

	.stack-group__head span {
		font-family: var(--font-mono);
		font-size: 0.58rem;
		color: var(--cobalt);
	}

	.stack-group h3 {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.04em;
	}

	.stack-group > p {
		min-height: 3rem;
		font-size: 0.82rem;
		line-height: 1.5;
		color: var(--graphite);
	}

	.stack-items {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		margin-top: 1.5rem;
	}

	@media (max-width: 860px) {
		.stack-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 560px) {
		.stack-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
