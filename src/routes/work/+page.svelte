<script lang="ts">
	import PageIntro from '$lib/components/ui/PageIntro.svelte';
	import Seo from '$lib/components/ui/Seo.svelte';

	const inquiryBody = encodeURIComponent(`Product or system in one sentence:

Intended user or outcome:

Current state:

Principal constraint:

Desired release horizon:

Relevant repository or brief:`);

	const inquiryHref = `mailto:github@sxs.io?subject=${encodeURIComponent('Work with the sXs factory')}&body=${inquiryBody}`;

	const modes = [
		{
			number: '01',
			name: 'Commission a Build',
			position: 'Primary',
			description:
				'A bounded product or critical system with explicit ownership, acceptance criteria, and a release target.',
			outputs: [
				'Working software',
				'Source and release artifacts',
				'Documentation and ownership path'
			]
		},
		{
			number: '02',
			name: 'Adapt a Capability',
			position: 'Primary',
			description:
				'Apply or extend existing factory infrastructure inside your product, repository, or agent environment.',
			outputs: [
				'Capability fit and boundary',
				'Adapted implementation',
				'Verification and transfer'
			]
		},
		{
			number: '03',
			name: 'Factory Partnership',
			position: 'Selective',
			description:
				'A longer collaboration for products that benefit from repeated releases and shared production learning.',
			outputs: [
				'Release cadence',
				'Evolving verification surface',
				'Reusable non-confidential capability'
			]
		},
		{
			number: '04',
			name: 'Decision Review',
			position: 'Advisory',
			description:
				'A focused product, architecture, or explicit-versus-learned boundary decision when more software is not yet the right output.',
			outputs: ['Pre-read', 'Working review', 'Written decision artifact']
		}
	];

	const fit = [
		'The intended product outcome can be stated clearly.',
		'sXs can own a bounded release rather than supply interchangeable capacity.',
		'The work benefits from a small senior production system.',
		'The client retains code, decisions, and an operable ownership path.',
		'Non-confidential learning can improve the factory without exposing client material.'
	];
</script>

<Seo
	title="Work with the factory"
	description="Commission a product build, adapt an sXs capability, form a factory partnership, or bring a consequential decision."
	path="/work"
/>

<PageIntro
	eyebrow="Selected work"
	title="Bring an outcome the factory can own."
	description="sXs takes on bounded products and critical systems where a small, accountable production system is a genuine advantage."
/>

<section class="section modes-section" aria-labelledby="modes-title">
	<div class="container">
		<header class="modes-header">
			<div>
				<p>Working modes</p>
				<h2 id="modes-title">Build first. Advisory when it is the right output.</h2>
			</div>
			<p>
				No seat-based staffing and no advice sold by the minute. Scope follows the product outcome,
				risk, ownership, and release target.
			</p>
		</header>

		<div class="modes-grid">
			{#each modes as mode, index}
				<article class:advisory={index === 3}>
					<div class="mode-meta">
						<span>{mode.number}</span>
						<span>{mode.position}</span>
					</div>
					<h3>{mode.name}</h3>
					<p>{mode.description}</p>
					<ul>
						{#each mode.outputs as output}
							<li>{output}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section fit-section" aria-labelledby="fit-title">
	<div class="container fit-section__inner">
		<div>
			<p>Good factory fit</p>
			<h2 id="fit-title">A clear outcome. A real constraint. An accountable release.</h2>
		</div>
		<ol>
			{#each fit as item, index}
				<li><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>
			{/each}
		</ol>
	</div>
</section>

<section class="section brief-section" aria-labelledby="brief-title">
	<div class="container brief-section__inner">
		<div class="brief-copy">
			<p>First message</p>
			<h2 id="brief-title">Start with the product and the constraint.</h2>
			<p>
				A short, concrete note is enough. The prefilled email asks for the information needed to
				decide whether the factory is a fit.
			</p>
		</div>
		<div class="brief-card">
			<p>A useful first note includes</p>
			<ol>
				<li><span>01</span>Product or system in one sentence</li>
				<li><span>02</span>Intended user or outcome</li>
				<li><span>03</span>Current state</li>
				<li><span>04</span>Principal constraint</li>
				<li><span>05</span>Desired release horizon</li>
				<li><span>06</span>Relevant repository or brief</li>
			</ol>
			<a href={inquiryHref}>
				<span>github@sxs.io</span>
				<span aria-hidden="true">↗</span>
			</a>
			<small>Direct email. No intake portal and no automated sales sequence.</small>
		</div>
	</div>
</section>

<style>
	.modes-section {
		background: rgba(255, 255, 255, 0.38);
	}

	.modes-header {
		display: grid;
		grid-template-columns: 1fr minmax(17rem, 0.55fr);
		gap: 3rem;
		align-items: end;
		margin-bottom: 2rem;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid var(--line-strong);
	}

	.modes-header > div > p,
	.fit-section__inner > div > p,
	.brief-copy > p {
		font-family: var(--font-mono);
		font-size: 0.6rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.modes-header h2,
	.fit-section h2,
	.brief-copy h2 {
		max-width: 15ch;
		margin-top: 0.75rem;
		font-size: clamp(2.3rem, 5vw, 4.6rem);
		line-height: 0.98;
	}

	.modes-header > p {
		font-size: 0.88rem;
		line-height: 1.7;
		color: var(--graphite);
	}

	.modes-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-md);
		background: var(--line-strong);
		overflow: hidden;
	}

	.modes-grid article {
		min-height: 430px;
		padding: clamp(1.3rem, 3vw, 2rem);
		background: var(--paper-raised);
	}

	.modes-grid article.advisory {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: 0.4fr 0.75fr 1fr 1fr;
		gap: 1.5rem;
		align-items: start;
		min-height: 0;
		background: var(--paper-soft);
	}

	.mode-meta {
		display: flex;
		justify-content: space-between;
		font-family: var(--font-mono);
		font-size: 0.55rem;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.modes-grid h3 {
		margin-top: 5rem;
		font-size: clamp(1.6rem, 3vw, 2.6rem);
	}

	.modes-grid article > p {
		margin-top: 1rem;
		font-size: 0.84rem;
		line-height: 1.65;
		color: var(--graphite);
	}

	.modes-grid ul {
		display: grid;
		gap: 0.6rem;
		margin-top: 2rem;
		list-style: none;
	}

	.modes-grid li {
		position: relative;
		padding-left: 1rem;
		font-size: 0.72rem;
		color: var(--ink-soft);
	}

	.modes-grid li::before {
		position: absolute;
		top: 0.55em;
		left: 0;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--signal-deep);
		content: '';
	}

	.modes-grid article.advisory h3,
	.modes-grid article.advisory > p,
	.modes-grid article.advisory ul {
		margin-top: 0;
	}

	.fit-section {
		background: var(--ink);
	}

	.fit-section__inner {
		display: grid;
		grid-template-columns: 0.85fr 1.15fr;
		gap: clamp(3rem, 8vw, 7rem);
	}

	.fit-section__inner > div > p {
		color: var(--signal);
	}

	.fit-section h2 {
		color: var(--paper-raised);
	}

	.fit-section ol {
		border-top: 1px solid var(--ink-line);
		list-style: none;
	}

	.fit-section li {
		display: grid;
		grid-template-columns: 3rem 1fr;
		gap: 1rem;
		padding: 1.2rem 0;
		border-bottom: 1px solid var(--ink-line);
		font-size: 0.9rem;
		color: #c7d0ca;
	}

	.fit-section li span {
		font-family: var(--font-mono);
		font-size: 0.56rem;
		color: var(--signal);
	}

	.brief-section {
		background:
			radial-gradient(circle at 80% 70%, rgba(111, 224, 181, 0.3), transparent 28rem),
			var(--cobalt-soft);
	}

	.brief-section__inner {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: clamp(3rem, 8vw, 7rem);
		align-items: start;
	}

	.brief-copy > p:last-child {
		max-width: 34rem;
		margin-top: 1.5rem;
		font-family: var(--font-sans);
		font-size: 0.9rem;
		font-weight: 400;
		line-height: 1.7;
		text-transform: none;
		color: var(--graphite);
	}

	.brief-card {
		padding: clamp(1.5rem, 4vw, 2.6rem);
		border: 1px solid rgba(23, 92, 211, 0.25);
		border-radius: var(--radius-lg);
		background: rgba(255, 255, 255, 0.76);
		box-shadow: var(--shadow-soft);
	}

	.brief-card > p {
		font-family: var(--font-mono);
		font-size: 0.6rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.brief-card ol {
		margin-top: 1rem;
		border-top: 1px solid rgba(23, 92, 211, 0.2);
		list-style: none;
	}

	.brief-card li {
		display: grid;
		grid-template-columns: 2.5rem 1fr;
		gap: 1rem;
		padding: 0.9rem 0;
		border-bottom: 1px solid rgba(23, 92, 211, 0.2);
		font-size: 0.82rem;
		color: var(--ink-soft);
	}

	.brief-card li span {
		font-family: var(--font-mono);
		font-size: 0.55rem;
		color: var(--cobalt);
	}

	.brief-card > a {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 2rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid var(--ink);
		font-size: clamp(1.4rem, 4vw, 2.8rem);
		font-weight: 600;
		letter-spacing: -0.045em;
	}

	.brief-card > a:hover {
		color: var(--cobalt);
	}

	.brief-card small {
		display: block;
		margin-top: 1rem;
		font-size: 0.68rem;
		color: var(--graphite);
	}

	@media (max-width: 920px) {
		.modes-grid {
			grid-template-columns: 1fr;
		}

		.modes-grid article.advisory {
			grid-column: auto;
			display: block;
		}

		.modes-grid article.advisory h3 {
			margin-top: 5rem;
		}

		.modes-grid article.advisory > p {
			margin-top: 1rem;
		}

		.modes-grid article.advisory ul {
			margin-top: 2rem;
		}
	}

	@media (max-width: 820px) {
		.modes-header,
		.fit-section__inner,
		.brief-section__inner {
			grid-template-columns: 1fr;
		}
	}
</style>
