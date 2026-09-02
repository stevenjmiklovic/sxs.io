<script lang="ts">
	import PageIntro from '$lib/components/ui/PageIntro.svelte';
	import PortfolioCard from '$lib/components/ui/PortfolioCard.svelte';
	import Seo from '$lib/components/ui/Seo.svelte';
	import StatusLabel from '$lib/components/ui/StatusLabel.svelte';
	import { products } from '$lib/data/portfolio';

	// Derived so the key can only ever describe states the index actually contains.
	const statusesInUse = [...new Set(products.map((product) => product.status))];
</script>

<Seo
	title="Products"
	description="A Rust writing environment, an Elixir federation engine, and a Python research wiki. Unrelated categories, one production system: the sXs AI software factory."
	path="/products"
/>

<PageIntro
	eyebrow="Owned products"
	title="The range is the evidence."
	description="A keyboard-first writing environment in Rust. A federated text-world engine in Elixir. A research wiki that refuses to cite itself. Unrelated categories, one production system — and not one of them sells you a model."
/>

<section class="section product-index" aria-labelledby="product-index-title">
	<div class="container">
		<header class="index-header">
			<div>
				<p>Product index</p>
				<h2 id="product-index-title">{products.length} current systems</h2>
			</div>
			<div class="status-key" aria-label="Portfolio status key">
				{#each statusesInUse as status}
					<StatusLabel label={status} />
				{/each}
			</div>
		</header>

		<div class="portfolio-index">
			{#each products as product, index}
				<PortfolioCard item={product} {index} />
			{/each}
		</div>
	</div>
</section>

<section class="section product-principle">
	<div class="container product-principle__inner">
		<p>Product principle</p>
		<blockquote>
			AI is inside the production system. It does not have to be inside every product.
		</blockquote>
		<div>
			<p>
				No two of these share a language, a runtime, or a user. What they share is how they were
				specified, verified, and shipped — and that is the only thing the factory carries between
				them.
			</p>
			<a class="text-link" href="/factory">See the production system →</a>
		</div>
	</div>
</section>

<style>
	.product-index {
		background: rgba(255, 255, 255, 0.38);
	}

	.index-header {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 2rem;
		margin-bottom: 2rem;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid var(--line-strong);
	}

	.index-header > div:first-child > p,
	.product-principle__inner > p {
		font-family: var(--font-mono);
		font-size: 0.6rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.index-header h2 {
		margin-top: 0.4rem;
		font-size: clamp(1.8rem, 4vw, 3rem);
	}

	.status-key {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		font-family: var(--font-mono);
		font-size: 0.56rem;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.portfolio-index {
		display: grid;
		gap: 1.25rem;
	}

	.product-principle {
		background: var(--paper);
	}

	.product-principle__inner {
		display: grid;
		grid-template-columns: minmax(10rem, 0.3fr) 1fr minmax(17rem, 0.55fr);
		gap: clamp(2rem, 6vw, 5rem);
		align-items: start;
	}

	blockquote {
		max-width: 20ch;
		font-size: clamp(2rem, 5vw, 4rem);
		font-weight: 600;
		line-height: 1.02;
		letter-spacing: -0.05em;
	}

	.product-principle__inner > div p {
		font-size: 0.9rem;
		line-height: 1.7;
		color: var(--graphite);
	}

	.product-principle__inner .text-link {
		margin-top: 1.5rem;
	}

	@media (max-width: 820px) {
		.product-principle__inner {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 620px) {
		.index-header {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
