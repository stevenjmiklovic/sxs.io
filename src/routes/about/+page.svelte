<script lang="ts">
	import PageIntro from '$lib/components/ui/PageIntro.svelte';
	import Seo from '$lib/components/ui/Seo.svelte';

	const beliefs = [
		'Software is the output; the factory is the advantage.',
		'Models multiply a strong production system and magnify a weak one.',
		'Specification is leverage, not paperwork.',
		'Generation without verification creates inventory, not value.',
		'Human judgment belongs at consequential boundaries, not in every repetitive step.',
		'Reusable capability is the factory’s retained earnings.',
		'Shipping is necessary; operability is the standard.',
		'A small team should become more capable with every build.'
	];

	const exclusions = [
		'An offshore-style development factory selling interchangeable capacity.',
		'A body shop or staff-augmentation provider.',
		'A no-code “idea to app in one prompt” service.',
		'A generic AI transformation consultancy.',
		'A vendor of autonomous agents without accountable human review.',
		'A collection of unrelated side projects.',
		'A high-volume MVP mill.'
	];
</script>

<Seo
	title="About"
	description="sXs is an AI software factory. What the name means, what the factory believes, and what it refuses to be."
	path="/about"
/>

<PageIntro
	eyebrow="About sXs"
	title="The seam became an operating model."
	description="sXs began as a way to name the boundary inside an AI system: what software should specify, and what a model should learn. That boundary still matters. It now describes how the factory itself is run."
/>

<section class="section about-name" aria-labelledby="name-title">
	<div class="container about-split">
		<div>
			<p class="about-eyebrow">symbolic × subsymbolic</p>
			<h2 id="name-title">Explicit where possible. Learned where necessary.</h2>
		</div>
		<div class="about-copy">
			<p>
				Specifications, schemas, contracts, tests, types, and architecture decisions are the
				symbolic side. They are what the system must preserve when everything else changes.
			</p>
			<p>
				Exploration, synthesis, pattern recognition, and bounded implementation are the subsymbolic
				side. They are where a model creates leverage rather than risk.
			</p>
			<p>
				The × is the production seam. A person places it, defines the evidence that clears it, and
				owns the release that crosses it.
			</p>
			<a class="text-link" href="/factory">See how the seam operates →</a>
		</div>
	</div>
</section>

<section class="section section--soft about-purpose" aria-labelledby="purpose-title">
	<div class="container about-split">
		<div>
			<p class="about-eyebrow">Purpose</p>
			<h2 id="purpose-title">
				Increase the amount of ambitious software a small, accountable team can bring into the
				world.
			</h2>
		</div>
		<div class="about-copy">
			<p>
				The output can be a product that contains AI, a product that contains no model at all, or a
				capability that makes later work more reliable. AI is how the factory works. It does not
				have to be what the factory sells.
			</p>
			<p>
				sXs is deliberately small and senior. The advantage is not headcount. It is that every build
				leaves behind capability the next build starts from, and that a named person stays
				accountable for what ships.
			</p>
		</div>
	</div>
</section>

<section class="section section--cobalt about-beliefs" aria-labelledby="beliefs-title">
	<div class="container">
		<header class="section-heading">
			<p class="section-heading__eyebrow">What the factory believes</p>
			<div class="section-heading__content">
				<h2 id="beliefs-title">Positions the factory can be judged against.</h2>
				<p>
					These are working commitments, not slogans. Each one is visible in how a build is
					specified, verified, released, and reused.
				</p>
			</div>
		</header>

		<ol class="belief-grid">
			{#each beliefs as belief, index}
				<li>
					<span>{String(index + 1).padStart(2, '0')}</span>
					<p>{belief}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="section section--dark about-exclusions" aria-labelledby="exclusions-title">
	<div class="container about-split">
		<div>
			<p class="about-eyebrow">Deliberate exclusions</p>
			<h2 id="exclusions-title">What sXs is not.</h2>
		</div>
		<div>
			<ul class="exclusion-list">
				{#each exclusions as exclusion}
					<li>{exclusion}</li>
				{/each}
			</ul>
			<p class="exclusion-note">
				“Factory” is a claim about how the work is organized, not about how cheap it is.
			</p>
		</div>
	</div>
</section>

<section class="section about-close" aria-labelledby="close-title">
	<div class="container about-close__inner">
		<h2 id="close-title">
			The software is the output. The factory is the advantage. The evidence is what ships.
		</h2>
		<div class="page-actions">
			<a href="/products" class="btn btn--primary">Use the software →</a>
			<a href="/factory" class="btn btn--ghost">Inspect the factory →</a>
			<a href="/work" class="btn btn--ghost">Commission a build ↗</a>
		</div>
	</div>
</section>

<style>
	.about-split {
		display: grid;
		grid-template-columns: 0.85fr 1.15fr;
		gap: clamp(3rem, 8vw, 7rem);
	}

	.about-eyebrow {
		font-family: var(--font-mono);
		font-size: 0.6rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.about-split h2 {
		max-width: 16ch;
		margin-top: 1rem;
		font-size: clamp(2.2rem, 4.4vw, 4rem);
		line-height: 0.98;
		letter-spacing: -0.05em;
	}

	.about-purpose h2 {
		max-width: 20ch;
		font-size: clamp(1.9rem, 3.4vw, 3rem);
	}

	.about-copy {
		display: grid;
		gap: 1.5rem;
		align-content: start;
	}

	.about-copy p {
		font-size: clamp(1.05rem, 2vw, 1.4rem);
		line-height: 1.6;
		letter-spacing: -0.02em;
	}

	/* The seam paragraph closes section one — it stays at full weight. */
	.about-purpose .about-copy p:last-of-type {
		color: var(--graphite);
	}

	.belief-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1px;
		border: 1px solid rgba(23, 92, 211, 0.25);
		border-radius: var(--radius-md);
		background: rgba(23, 92, 211, 0.25);
		list-style: none;
		overflow: hidden;
	}

	.belief-grid li {
		display: grid;
		grid-template-columns: 2.5rem 1fr;
		gap: 1rem;
		padding: clamp(1.2rem, 2.5vw, 1.8rem);
		background: rgba(255, 255, 255, 0.72);
	}

	.belief-grid span {
		font-family: var(--font-mono);
		font-size: 0.6rem;
		font-weight: 700;
		color: var(--cobalt);
	}

	.belief-grid p {
		font-size: clamp(0.95rem, 1.6vw, 1.15rem);
		line-height: 1.5;
		letter-spacing: -0.02em;
	}

	.about-exclusions .about-eyebrow {
		color: var(--signal);
	}

	.about-exclusions h2 {
		color: var(--paper-raised);
	}

	.exclusion-list {
		display: grid;
		gap: 1px;
		border: 1px solid var(--ink-line);
		background: var(--ink-line);
		list-style: none;
	}

	.exclusion-list li {
		padding: 1.1rem 1.3rem;
		background: var(--ink-panel);
		font-size: 0.92rem;
		line-height: 1.55;
		color: #aebbb3;
	}

	.exclusion-note {
		margin-top: 1.75rem;
		font-size: clamp(1rem, 1.8vw, 1.25rem);
		line-height: 1.6;
		letter-spacing: -0.02em;
		color: var(--paper-raised);
	}

	.about-close__inner {
		display: grid;
		justify-items: start;
	}

	.about-close h2 {
		max-width: 22ch;
		font-size: clamp(2rem, 4.6vw, 4.2rem);
		line-height: 0.98;
		letter-spacing: -0.055em;
	}

	@media (max-width: 900px) {
		.about-split {
			grid-template-columns: 1fr;
		}

		.belief-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
