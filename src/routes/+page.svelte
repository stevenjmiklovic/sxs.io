<script lang="ts">
	import FactoryLoop from '$lib/components/ui/FactoryLoop.svelte';
	import NoteCard from '$lib/components/ui/NoteCard.svelte';
	import PortfolioCard from '$lib/components/ui/PortfolioCard.svelte';
	import Seo from '$lib/components/ui/Seo.svelte';
	import StatusLabel from '$lib/components/ui/StatusLabel.svelte';
	import { factoryNotes } from '$lib/content/notes';
	import { factoryEvidence } from '$lib/data/factory';
	import { featured, latestShipment } from '$lib/data/portfolio';
	import { formatDate } from '$lib/utils/format';

	const inquiryBody = encodeURIComponent(`Product or system in one sentence:

Intended user or outcome:

Current state:

Principal constraint:

Desired release horizon:

Relevant repository or brief:`);

	const inquiryHref = `mailto:github@sxs.io?subject=${encodeURIComponent('Commission an sXs build')}&body=${inquiryBody}`;

	const workModes = [
		{
			name: 'Commission a Build',
			description:
				'A bounded product or system with explicit ownership, acceptance criteria, and a release target.'
		},
		{
			name: 'Adapt a Capability',
			description:
				'Apply or extend existing factory infrastructure inside a new product or environment.'
		},
		{
			name: 'Factory Partnership',
			description:
				'A longer collaboration for products that benefit from repeated releases and shared learning.'
		},
		{
			name: 'Decision Review',
			description:
				'A standalone product or architecture decision with a written artifact. Advisory, when a build is not yet the right move.'
		}
	];
</script>

<Seo
	title="sXs"
	description="sXs builds products, reusable capabilities, and selected client software through an AI-native production system."
	path="/"
/>

<section class="hero" id="hero" aria-labelledby="hero-title">
	<div class="container hero__inner">
		<div class="hero__copy">
			<p class="hero__eyebrow"><span aria-hidden="true"></span> AI software factory</p>
			<h1 id="hero-title">
				Software that ships.
				<strong>A factory that compounds.</strong>
			</h1>
			<p class="hero__description">
				sXs builds products, reusable capabilities, and selected client software through a
				production system that combines explicit specification with model-driven execution.
			</p>
			<div class="page-actions">
				<a href="/products" class="btn btn--primary">See what the factory makes →</a>
				<a href="/work" class="btn btn--ghost">Commission a build ↗</a>
			</div>
		</div>

		<aside class="factory-plate" aria-label="The symbolic and subsymbolic production seam">
			<div class="factory-plate__top">
				<span>factory.system</span>
				<span><i aria-hidden="true"></i> active</span>
			</div>
			<div class="factory-plate__field">
				<div class="factory-plate__side">
					<p>Symbolic</p>
					<strong>Specify</strong>
					<span>contracts</span>
					<span>tests</span>
					<span>decisions</span>
				</div>
				<div class="factory-plate__seam">
					<span>s×s</span>
					<i aria-hidden="true"></i>
				</div>
				<div class="factory-plate__side factory-plate__side--learned">
					<p>Subsymbolic</p>
					<strong>Generate</strong>
					<span>models</span>
					<span>agents</span>
					<span>synthesis</span>
				</div>
			</div>
			<div class="factory-plate__bottom">
				<span>Human judgment at consequential boundaries</span>
				<span>v1.1</span>
			</div>
		</aside>
	</div>

	<div class="container hero__rail">
		{#each ['Specify', 'Generate', 'Verify', 'Ship', 'Compound'] as stage, index}
			<span class:last={index === 4}>{stage}</span>
		{/each}
	</div>
</section>

<section class="section latest" aria-labelledby="latest-title">
	<div class="container latest__grid">
		<div class="latest__label">
			<p>Latest shipment</p>
			<StatusLabel label={latestShipment.status} />
		</div>
		<div class="latest__content">
			<div>
				<p class="latest__release">
					{latestShipment.latestRelease.label} ·
					<time datetime={latestShipment.latestRelease.date}>
						{formatDate(latestShipment.latestRelease.date)}
					</time>
				</p>
				<h2 id="latest-title">{latestShipment.name}</h2>
				<p>{latestShipment.summary}</p>
			</div>
			<div class="latest__change">
				<p>What changed</p>
				<span>{latestShipment.latestRelease.summary}</span>
				<div>
					<a href={latestShipment.latestRelease.href} target="_blank" rel="noopener noreferrer"
						>Release ↗</a
					>
					<a href={latestShipment.links[0].href} target="_blank" rel="noopener noreferrer"
						>Source ↗</a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section section--soft" aria-labelledby="featured-title">
	<div class="container">
		<header class="section-heading">
			<p class="section-heading__eyebrow">Featured work</p>
			<div class="section-heading__content">
				<h2 id="featured-title">Three unlike builds. One production system.</h2>
				<p>
					A keyboard-first writing environment, a canonical knowledge-artifact compiler, and a
					Solr-backed retrieval capability. Different problems, different stacks, the same path from
					intention to release.
				</p>
			</div>
		</header>

		<div class="preview-grid">
			{#each featured as item, index}
				<PortfolioCard {item} {index} compact />
			{/each}
		</div>

		<div class="section-action">
			<a class="text-link" href="/products">Browse the product index →</a>
			<a class="text-link" href="/capabilities">Inspect the capability index →</a>
		</div>
	</div>
</section>

<section class="section factory-section" aria-labelledby="factory-title">
	<div class="container">
		<header class="section-heading">
			<p class="section-heading__eyebrow">Production model</p>
			<div class="section-heading__content">
				<h2 id="factory-title">The model may propose. Evidence decides.</h2>
				<p>
					symbolic × subsymbolic is an operating model: explicit structure where the product must
					keep a promise, learned synthesis where judgment creates leverage.
				</p>
			</div>
		</header>

		<FactoryLoop />

		<div class="section-action">
			<a class="text-link" href="/factory">See how the factory works →</a>
		</div>
	</div>
</section>

<section class="section section--cobalt evidence" aria-labelledby="evidence-title">
	<div class="container">
		<header class="section-heading">
			<p class="section-heading__eyebrow">Factory evidence</p>
			<div class="section-heading__content">
				<h2 id="evidence-title">Artifacts, not productivity theater.</h2>
				<p>
					Releases, architecture decisions, tests, and inspectable capability specifications make
					the production system legible without inventing a velocity multiplier.
				</p>
			</div>
		</header>

		<div class="evidence-grid">
			{#each factoryEvidence as item}
				<a href={item.href} target="_blank" rel="noopener noreferrer">
					<span>{item.type}</span>
					<h3>{item.title}</h3>
					<p>{item.description}</p>
					<i aria-hidden="true">↗</i>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="section section--dark notes-section" aria-labelledby="notes-title">
	<div class="container">
		<header class="section-heading">
			<p class="section-heading__eyebrow">Factory Notes</p>
			<div class="section-heading__content">
				<h2 id="notes-title">Publish when the work produces evidence.</h2>
				<p>
					Release-driven notes on builds, capabilities, boundaries, verification, and the parts of
					the factory that genuinely compound.
				</p>
			</div>
		</header>

		<div class="notes-grid">
			{#each factoryNotes.slice(0, 3) as note, index}
				<NoteCard {note} {index} />
			{/each}
		</div>

		<div class="section-action">
			<a class="text-link notes-link" href="/notes">Read all Factory Notes →</a>
		</div>
	</div>
</section>

<section class="section work-preview" aria-labelledby="work-title">
	<div class="container">
		<header class="section-heading">
			<p class="section-heading__eyebrow">Work with the factory</p>
			<div class="section-heading__content">
				<h2 id="work-title">Bring an outcome the factory can own.</h2>
				<p>
					Selected builds and partnerships come first. Advisory is available when a clear decision,
					not more software, is the useful output.
				</p>
			</div>
		</header>

		<div class="work-grid">
			{#each workModes as mode, index}
				<article class:secondary={index === 3}>
					<span>{String(index + 1).padStart(2, '0')}</span>
					<h3>{mode.name}</h3>
					<p>{mode.description}</p>
				</article>
			{/each}
		</div>

		<div class="section-action">
			<a class="text-link" href="/work">Choose a working mode →</a>
		</div>
	</div>
</section>

<section class="section direct-contact" aria-labelledby="contact-title">
	<div class="container direct-contact__inner">
		<div>
			<p>Direct contact</p>
			<h2 id="contact-title">Start with the product and the constraint.</h2>
		</div>
		<div>
			<p>
				A useful first note names the intended user, current state, principal constraint, and
				desired release horizon.
			</p>
			<a class="contact-email" href={inquiryHref}>
				<span>github@sxs.io</span>
				<span aria-hidden="true">↗</span>
			</a>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: min(980px, 100svh);
		padding: calc(var(--header-height) + clamp(4rem, 8vw, 7rem)) 1.5rem 2rem;
		overflow: hidden;
		border-bottom: 1px solid var(--line);
	}

	.hero__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.08fr) minmax(400px, 0.92fr);
		gap: clamp(3rem, 7vw, 7rem);
		align-items: center;
	}

	.hero__eyebrow {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		margin-bottom: 1.5rem;
		font-family: var(--font-mono);
		font-size: 0.64rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.hero__eyebrow span {
		width: 2rem;
		height: 1px;
		background: var(--cobalt);
	}

	h1 {
		max-width: 13ch;
		font-size: clamp(3.7rem, 7.4vw, 7.1rem);
		font-weight: 600;
		line-height: 0.88;
		letter-spacing: -0.076em;
	}

	h1 strong {
		display: block;
		font-weight: inherit;
		color: var(--cobalt);
	}

	.hero__description {
		max-width: 42rem;
		margin-top: 2rem;
		font-size: clamp(1rem, 1.5vw, 1.16rem);
		line-height: 1.75;
		color: var(--graphite);
	}

	.factory-plate {
		position: relative;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-lg);
		background: rgba(255, 255, 255, 0.72);
		box-shadow: var(--shadow-soft);
		overflow: hidden;
		transform: rotate(1.25deg);
	}

	.factory-plate::before {
		position: absolute;
		inset: auto -4rem -5rem auto;
		width: 15rem;
		height: 15rem;
		border-radius: 50%;
		background: rgba(111, 224, 181, 0.35);
		content: '';
		filter: blur(12px);
	}

	.factory-plate__top,
	.factory-plate__bottom {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.85rem 1rem;
		font-family: var(--font-mono);
		font-size: 0.56rem;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.factory-plate__top {
		border-bottom: 1px solid var(--line);
	}

	.factory-plate__top span:last-child {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		color: var(--signal-deep);
	}

	.factory-plate__top i {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--signal-deep);
	}

	.factory-plate__field {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 430px;
	}

	.factory-plate__side {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1.4rem;
		background-image:
			linear-gradient(var(--line) 1px, transparent 1px),
			linear-gradient(90deg, var(--line) 1px, transparent 1px);
		background-size: 24px 24px;
	}

	.factory-plate__side--learned {
		align-items: flex-end;
		background:
			radial-gradient(circle at 70% 25%, rgba(111, 224, 181, 0.72), transparent 36%),
			var(--paper-soft);
	}

	.factory-plate__side > p {
		font-family: var(--font-mono);
		font-size: 0.58rem;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.factory-plate__side strong {
		margin-top: auto;
		font-size: clamp(1.4rem, 3vw, 2.3rem);
	}

	.factory-plate__side > span {
		margin-top: 0.45rem;
		padding: 0.3rem 0.5rem;
		border: 1px solid var(--line-strong);
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.75);
		font-family: var(--font-mono);
		font-size: 0.52rem;
		color: var(--ink-soft);
	}

	.factory-plate__seam {
		position: absolute;
		inset: 0 auto 0 50%;
		display: flex;
		width: 1px;
		align-items: center;
		justify-content: center;
		background: var(--cobalt);
	}

	.factory-plate__seam span {
		z-index: 1;
		display: grid;
		width: 62px;
		height: 62px;
		place-items: center;
		border: 1px solid var(--cobalt);
		border-radius: 50%;
		background: var(--paper-raised);
		font-family: var(--font-mono);
		font-weight: 700;
		color: var(--cobalt);
	}

	.factory-plate__seam i {
		position: absolute;
		width: 145px;
		height: 145px;
		border: 1px dashed rgba(23, 92, 211, 0.28);
		border-radius: 50%;
	}

	.factory-plate__bottom {
		border-top: 1px solid var(--line);
	}

	.hero__rail {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		margin-top: clamp(4rem, 8vw, 7rem);
		padding-inline: var(--space-lg);
	}

	.hero__rail span {
		position: relative;
		padding-top: 1rem;
		border-top: 2px solid var(--cobalt);
		font-family: var(--font-mono);
		font-size: 0.55rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.hero__rail span::before {
		position: absolute;
		top: -6px;
		left: 0;
		width: 10px;
		height: 10px;
		border: 2px solid var(--paper);
		border-radius: 50%;
		background: var(--cobalt);
		box-shadow: 0 0 0 1px var(--cobalt);
		content: '';
	}

	.hero__rail span.last {
		border-color: var(--signal-deep);
	}

	.hero__rail span.last::before {
		background: var(--signal-deep);
		box-shadow: 0 0 0 1px var(--signal-deep);
	}

	.latest__grid {
		display: grid;
		grid-template-columns: minmax(10rem, 0.35fr) 1fr;
		gap: var(--space-2xl);
	}

	.latest__label > p,
	.latest__change > p {
		margin-bottom: 1rem;
		font-family: var(--font-mono);
		font-size: 0.62rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.latest__content {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(15rem, 0.55fr);
		gap: clamp(2rem, 6vw, 5rem);
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--line-strong);
	}

	.latest__release {
		font-family: var(--font-mono);
		font-size: 0.58rem;
		text-transform: uppercase;
		color: var(--signal-deep);
	}

	.latest h2 {
		margin-top: 1rem;
		font-size: clamp(3rem, 7vw, 6rem);
		line-height: 0.9;
		letter-spacing: -0.07em;
	}

	.latest__content > div:first-child > p:last-child {
		max-width: 40rem;
		margin-top: 1.5rem;
		font-size: 1rem;
		line-height: 1.7;
	}

	.latest__change {
		padding: 1.2rem;
		border: 1px solid var(--line);
		border-radius: var(--radius-sm);
		background: var(--paper-soft);
	}

	.latest__change > span {
		display: block;
		font-size: 0.8rem;
		line-height: 1.6;
		color: var(--ink-soft);
	}

	.latest__change div {
		display: flex;
		gap: 1rem;
		margin-top: 1.5rem;
		font-family: var(--font-mono);
		font-size: 0.6rem;
		font-weight: 700;
		color: var(--cobalt);
	}

	.preview-grid,
	.notes-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	.section-action {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-lg);
		justify-content: flex-end;
		margin-top: 2rem;
	}

	.factory-section {
		background:
			linear-gradient(90deg, transparent 49.9%, rgba(23, 92, 211, 0.06) 50%, transparent 50.1%),
			var(--paper);
	}

	.evidence-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1px;
		border: 1px solid rgba(23, 92, 211, 0.25);
		border-radius: var(--radius-md);
		background: rgba(23, 92, 211, 0.25);
		overflow: hidden;
	}

	.evidence-grid a {
		position: relative;
		min-height: 240px;
		padding: clamp(1.3rem, 3vw, 2rem);
		background: rgba(255, 255, 255, 0.72);
		transition: background var(--transition-fast);
	}

	.evidence-grid a:hover {
		background: white;
	}

	.evidence-grid span {
		font-family: var(--font-mono);
		font-size: 0.58rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.evidence-grid h3 {
		max-width: 18ch;
		margin-top: 2rem;
		font-size: clamp(1.4rem, 3vw, 2.2rem);
	}

	.evidence-grid p {
		max-width: 34rem;
		margin-top: 0.8rem;
		font-size: 0.8rem;
		line-height: 1.6;
		color: var(--graphite);
	}

	.evidence-grid i {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		font-family: var(--font-mono);
		font-style: normal;
		color: var(--cobalt);
	}

	.notes-grid {
		gap: 1px;
		background: var(--ink-line);
	}

	.notes-link {
		color: var(--signal);
	}

	.work-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-md);
		background: var(--line-strong);
		overflow: hidden;
	}

	.work-grid article {
		min-height: 280px;
		padding: clamp(1.3rem, 3vw, 2rem);
		background: var(--paper-raised);
	}

	.work-grid article.secondary {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: 3rem 0.5fr 1fr;
		gap: 1rem;
		align-items: center;
		min-height: auto;
		background: var(--paper-soft);
	}

	.work-grid article > span {
		font-family: var(--font-mono);
		font-size: 0.56rem;
		color: var(--cobalt);
	}

	.work-grid h3 {
		margin-top: 4rem;
		font-size: clamp(1.5rem, 3vw, 2.4rem);
	}

	.work-grid article.secondary h3 {
		margin-top: 0;
		font-size: 1.2rem;
	}

	.work-grid p {
		margin-top: 1rem;
		font-size: 0.82rem;
		line-height: 1.65;
		color: var(--graphite);
	}

	.work-grid article.secondary p {
		margin-top: 0;
	}

	.direct-contact {
		background:
			radial-gradient(circle at 80% 70%, rgba(111, 224, 181, 0.28), transparent 27rem),
			var(--cobalt-soft);
	}

	.direct-contact__inner {
		display: grid;
		grid-template-columns: 0.85fr 1.15fr;
		gap: clamp(3rem, 8vw, 7rem);
		align-items: end;
	}

	.direct-contact__inner > div:first-child > p {
		font-family: var(--font-mono);
		font-size: 0.62rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.direct-contact h2 {
		max-width: 13ch;
		margin-top: 1rem;
		font-size: clamp(2.5rem, 6vw, 5.2rem);
		line-height: 0.96;
	}

	.direct-contact__inner > div:last-child > p {
		max-width: 35rem;
		font-size: 0.9rem;
		line-height: 1.7;
	}

	.contact-email {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 2rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid var(--ink);
		font-size: clamp(1.4rem, 4vw, 3rem);
		font-weight: 600;
		letter-spacing: -0.045em;
	}

	.contact-email:hover {
		color: var(--cobalt);
	}

	@media (max-width: 1000px) {
		.hero__inner {
			grid-template-columns: 1fr;
		}

		.factory-plate {
			max-width: 620px;
			transform: none;
		}

		.preview-grid,
		.notes-grid {
			grid-template-columns: 1fr;
		}

		.work-grid {
			grid-template-columns: 1fr;
		}

		.work-grid article.secondary {
			grid-column: auto;
		}
	}

	@media (max-width: 760px) {
		.hero {
			padding-inline: 0;
		}

		.hero__rail {
			padding-inline: var(--space-md);
		}

		.latest__grid,
		.latest__content,
		.direct-contact__inner {
			grid-template-columns: 1fr;
		}

		.evidence-grid {
			grid-template-columns: 1fr;
		}

		.work-grid article.secondary {
			display: block;
		}

		.work-grid article.secondary h3 {
			margin-top: 4rem;
			font-size: clamp(1.5rem, 3vw, 2.4rem);
		}

		.work-grid article.secondary p {
			margin-top: 1rem;
		}
	}

	@media (max-width: 520px) {
		h1 {
			font-size: clamp(3.25rem, 16vw, 4.2rem);
		}

		.factory-plate__field {
			min-height: 350px;
		}

		.factory-plate__bottom span:first-child {
			max-width: 20ch;
		}

		.hero__rail {
			grid-template-columns: 1fr;
			gap: 0;
		}

		.hero__rail span {
			padding: 0.8rem 0 0.8rem 1.25rem;
			border-top: 0;
			border-left: 2px solid var(--cobalt);
		}

		.hero__rail span::before {
			top: 0.95rem;
			left: -6px;
		}

		.hero__rail span.last {
			border-left-color: var(--signal-deep);
		}
	}
</style>
