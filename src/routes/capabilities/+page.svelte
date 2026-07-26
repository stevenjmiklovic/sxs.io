<script lang="ts">
	import PageIntro from '$lib/components/ui/PageIntro.svelte';
	import PortfolioCard from '$lib/components/ui/PortfolioCard.svelte';
	import Seo from '$lib/components/ui/Seo.svelte';
	import { capabilities } from '$lib/data/portfolio';
</script>

<Seo
	title="Capabilities"
	description="Reusable agent knowledge, decision systems, and domain workflows inside the sXs software factory."
	path="/capabilities"
/>

<PageIntro
	eyebrow="Factory infrastructure"
	title="Capability is what the factory keeps."
	description="Reusable knowledge and production systems reduce repeated setup, preserve consequential decisions, and give the next build a stronger starting point."
/>

<section class="section capability-map" aria-labelledby="capability-index-title">
	<div class="container">
		<header class="capability-map__header">
			<div>
				<p>Capability index</p>
				<h2 id="capability-index-title">Source → validate → adapt → reuse</h2>
			</div>
			<p>
				Each entry names the problem it solves, its current maintenance state, and the evidence
				available in the repository.
			</p>
		</header>

		<div class="portfolio-index">
			{#each capabilities as capability, index}
				<PortfolioCard item={capability} {index} />
			{/each}
		</div>
	</div>
</section>

<section class="section section--dark reuse" aria-labelledby="reuse-title">
	<div class="container reuse__inner">
		<div>
			<p>Confirmed reuse</p>
			<h2 id="reuse-title">The capability becomes real on its second build.</h2>
		</div>
		<div class="reuse__examples">
			<article>
				<span>ADR Power</span>
				<p>
					The source capability is compiled as a canonical ADR artifact inside Kanon, with
					workflows, hooks, and evaluations.
				</p>
				<a
					href="https://github.com/thinkingsage/context-bazaar/tree/main/kanon/knowledge/adr"
					target="_blank"
					rel="noopener noreferrer">Inspect artifact ↗</a
				>
			</article>
			<article>
				<span>Byron Powers</span>
				<p>
					The literary source library is carried into Context Bazaar as a Kanon collection of domain
					capability families.
				</p>
				<a
					href="https://github.com/thinkingsage/context-bazaar/tree/main/kanon/knowledge/byron-powers"
					target="_blank"
					rel="noopener noreferrer">Inspect collection ↗</a
				>
			</article>
		</div>
	</div>
</section>

<style>
	.capability-map {
		background:
			linear-gradient(90deg, transparent 49.9%, rgba(23, 92, 211, 0.05) 50%, transparent 50.1%),
			rgba(255, 255, 255, 0.38);
	}

	.capability-map__header {
		display: grid;
		grid-template-columns: 1fr minmax(17rem, 0.55fr);
		gap: 3rem;
		align-items: end;
		margin-bottom: 2rem;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid var(--line-strong);
	}

	.capability-map__header > div > p,
	.reuse__inner > div:first-child > p {
		font-family: var(--font-mono);
		font-size: 0.6rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.capability-map__header h2 {
		max-width: 17ch;
		margin-top: 0.5rem;
		font-size: clamp(2rem, 5vw, 3.8rem);
		line-height: 1;
	}

	.capability-map__header > p {
		font-size: 0.88rem;
		line-height: 1.7;
		color: var(--graphite);
	}

	.portfolio-index {
		display: grid;
		gap: 1.25rem;
	}

	.reuse__inner {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: clamp(3rem, 8vw, 7rem);
	}

	.reuse__inner > div:first-child > p {
		color: var(--signal);
	}

	.reuse h2 {
		max-width: 12ch;
		margin-top: 1rem;
		font-size: clamp(2.5rem, 6vw, 5rem);
		line-height: 0.95;
		color: var(--paper-raised);
	}

	.reuse__examples {
		display: grid;
		gap: 1px;
		border: 1px solid var(--ink-line);
		background: var(--ink-line);
	}

	.reuse article {
		padding: clamp(1.5rem, 4vw, 2.5rem);
		background: var(--ink-panel);
	}

	.reuse article span {
		font-family: var(--font-mono);
		font-size: 0.62rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--signal);
	}

	.reuse article p {
		max-width: 38rem;
		margin-top: 1rem;
		font-size: 0.9rem;
		line-height: 1.7;
		color: #b8c3bc;
	}

	.reuse article a {
		display: inline-block;
		margin-top: 1.5rem;
		font-family: var(--font-mono);
		font-size: 0.6rem;
		font-weight: 700;
		color: var(--signal);
	}

	@media (max-width: 820px) {
		.capability-map__header,
		.reuse__inner {
			grid-template-columns: 1fr;
		}
	}
</style>
