<script lang="ts">
	import FactoryLoop from '$lib/components/ui/FactoryLoop.svelte';
	import PageIntro from '$lib/components/ui/PageIntro.svelte';
	import Seo from '$lib/components/ui/Seo.svelte';
	import { factoryEvidence, factoryLedger } from '$lib/data/factory';
</script>

<Seo
	title="The Factory"
	description="How sXs combines explicit specification, model-driven production, verification, and accountable human judgment."
	path="/factory"
/>

<PageIntro
	eyebrow="Production system"
	title="Build systems that build systems."
	description="The sXs factory turns intent into operable software, then retains the capabilities that make the next build stronger."
/>

<section class="section factory-definition" aria-labelledby="definition-title">
	<div class="container factory-definition__grid">
		<div>
			<p>Definition</p>
			<h2 id="definition-title">A factory is a real operating model, not a speed metaphor.</h2>
		</div>
		<div class="factory-definition__copy">
			<p>
				sXs combines repeatable inputs, composable production, model-driven execution, independent
				verification, and compounding output.
			</p>
			<p>
				The factory does not make every product identical. It gives unlike products a disciplined
				way to move from intention to release while retaining the parts of production knowledge that
				deserve to travel.
			</p>
		</div>
	</div>
</section>

<section class="section factory-loop-section" aria-labelledby="loop-title">
	<div class="container">
		<header class="section-heading">
			<p class="section-heading__eyebrow">The production rail</p>
			<div class="section-heading__content">
				<h2 id="loop-title">Specify. Generate. Verify. Ship. Compound.</h2>
				<p>
					Every stage has a concrete output and a visible human responsibility. Models accelerate
					work; they do not inherit accountability.
				</p>
			</div>
		</header>
		<FactoryLoop detailed />
	</div>
</section>

<section class="section seam-section" aria-labelledby="seam-title">
	<div class="container seam-section__inner">
		<div class="seam-field">
			<div>
				<p>Symbolic</p>
				<h3>What the system must preserve.</h3>
				<ul>
					<li>Specifications and acceptance criteria</li>
					<li>Types, schemas, and contracts</li>
					<li>Tests, builds, and release gates</li>
					<li>Architecture decisions and ownership</li>
				</ul>
			</div>
			<span class="seam-mark">s×s</span>
			<div>
				<p>Subsymbolic</p>
				<h3>Where synthesis creates leverage.</h3>
				<ul>
					<li>Exploration and alternative generation</li>
					<li>Bounded implementation work</li>
					<li>Pattern recognition across a codebase</li>
					<li>Transformation and draft documentation</li>
				</ul>
			</div>
		</div>
		<div class="seam-copy">
			<p>symbolic × subsymbolic</p>
			<h2 id="seam-title">The seam is a production decision.</h2>
			<p>
				Human judgment places the boundary, defines the evidence, and owns the release. Stable
				decisions move into deterministic infrastructure; model judgment stays where interpretation
				is useful.
			</p>
		</div>
	</div>
</section>

<section class="section section--cobalt evidence-section" aria-labelledby="artifact-title">
	<div class="container">
		<header class="section-heading">
			<p class="section-heading__eyebrow">Artifact gallery</p>
			<div class="section-heading__content">
				<h2 id="artifact-title">The production trail is inspectable.</h2>
				<p>
					These public artifacts expose selected releases, decisions, verification surfaces, and
					capability contracts. They are evidence, not a claim that every internal detail is public.
				</p>
			</div>
		</header>

		<div class="artifact-grid">
			{#each factoryEvidence as item, index}
				<a href={item.href} target="_blank" rel="noopener noreferrer">
					<span>{String(index + 1).padStart(2, '0')} · {item.type}</span>
					<h3>{item.title}</h3>
					<p>{item.description}</p>
					<strong>Inspect artifact ↗</strong>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="section ledger-section" aria-labelledby="ledger-title">
	<div class="container">
		<header class="section-heading">
			<p class="section-heading__eyebrow">Factory Ledger</p>
			<div class="section-heading__content">
				<h2 id="ledger-title">Compounding is recorded only when reuse is visible.</h2>
				<p>
					The ledger stays deliberately small. A retained capability earns an entry when a later
					build or production system demonstrably uses it.
				</p>
			</div>
		</header>

		<!-- The horizontally scrollable ledger must be keyboard reachable. -->
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<div class="ledger" role="region" aria-label="Factory reuse ledger" tabindex="0">
			<table>
				<thead>
					<tr>
						<th>Build</th>
						<th>Shipped output</th>
						<th>Capability retained</th>
						<th>Reused by</th>
						<th>Evidence</th>
					</tr>
				</thead>
				<tbody>
					{#each factoryLedger as entry}
						<tr>
							<td>{entry.build}</td>
							<td>{entry.shipped}</td>
							<td>{entry.capability}</td>
							<td>{entry.reusedBy}</td>
							<td>
								<a href={entry.evidence} target="_blank" rel="noopener noreferrer">Inspect ↗</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>

<section class="section section--dark anti-promises" aria-labelledby="promises-title">
	<div class="container anti-promises__inner">
		<div>
			<p>Anti-promises</p>
			<h2 id="promises-title">What the factory will not pretend.</h2>
		</div>
		<ul>
			<li>
				<strong>No instant-app claim.</strong>
				<span>Ambitious products still contain decisions, unknowns, and integration work.</span>
			</li>
			<li>
				<strong>No unsupported “10×.”</strong>
				<span>Velocity claims require a defined baseline and evidence from comparable work.</span>
			</li>
			<li>
				<strong>No unaccountable autonomy.</strong>
				<span>Consequential boundaries and release decisions retain a named human owner.</span>
			</li>
			<li>
				<strong>No reuse for its own sake.</strong>
				<span
					>Unlike products are not forced into a shared platform merely to make the ledger longer.</span
				>
			</li>
		</ul>
	</div>
</section>

<style>
	.factory-definition {
		background: rgba(255, 255, 255, 0.38);
	}

	.factory-definition__grid {
		display: grid;
		grid-template-columns: 0.85fr 1.15fr;
		gap: clamp(3rem, 8vw, 7rem);
	}

	.factory-definition__grid > div:first-child > p,
	.seam-copy > p,
	.anti-promises__inner > div > p {
		font-family: var(--font-mono);
		font-size: 0.6rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.factory-definition h2,
	.seam-copy h2,
	.anti-promises h2 {
		max-width: 14ch;
		margin-top: 1rem;
		font-size: clamp(2.4rem, 5vw, 4.8rem);
		line-height: 0.98;
	}

	.factory-definition__copy {
		display: grid;
		gap: 1.5rem;
	}

	.factory-definition__copy p {
		font-size: clamp(1.15rem, 2.2vw, 1.55rem);
		line-height: 1.6;
		letter-spacing: -0.02em;
	}

	.factory-definition__copy p:last-child {
		color: var(--graphite);
	}

	.factory-loop-section {
		background:
			linear-gradient(90deg, transparent 49.9%, rgba(23, 92, 211, 0.06) 50%, transparent 50.1%),
			var(--paper);
	}

	.seam-section {
		background: var(--paper);
	}

	.seam-section__inner {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: clamp(3rem, 8vw, 7rem);
		align-items: center;
	}

	.seam-field {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-lg);
		background: var(--paper-raised);
		overflow: hidden;
	}

	.seam-field > div {
		min-height: 420px;
		padding: clamp(1.3rem, 3vw, 2rem);
		background-image:
			linear-gradient(var(--line) 1px, transparent 1px),
			linear-gradient(90deg, var(--line) 1px, transparent 1px);
		background-size: 24px 24px;
	}

	.seam-field > div:last-child {
		background:
			radial-gradient(circle at 80% 20%, rgba(111, 224, 181, 0.7), transparent 34%),
			var(--paper-soft);
	}

	.seam-field > div > p {
		font-family: var(--font-mono);
		font-size: 0.58rem;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.seam-field h3 {
		max-width: 12ch;
		margin-top: 5rem;
		font-size: clamp(1.35rem, 3vw, 2.1rem);
	}

	.seam-field ul {
		display: grid;
		gap: 0.6rem;
		margin-top: 2rem;
		list-style: none;
	}

	.seam-field li {
		font-size: 0.72rem;
		line-height: 1.5;
		color: var(--graphite);
	}

	.seam-mark {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 1;
		display: grid;
		width: 66px;
		height: 66px;
		place-items: center;
		border: 1px solid var(--cobalt);
		border-radius: 50%;
		background: white;
		font-family: var(--font-mono);
		font-weight: 700;
		color: var(--cobalt);
		transform: translate(-50%, -50%);
	}

	.seam-copy > p {
		color: var(--signal-deep);
	}

	.seam-copy > p:last-child {
		max-width: 35rem;
		margin-top: 1.5rem;
		font-family: var(--font-sans);
		font-size: 0.95rem;
		font-weight: 400;
		line-height: 1.7;
		text-transform: none;
		color: var(--graphite);
	}

	.artifact-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1px;
		border: 1px solid rgba(23, 92, 211, 0.25);
		border-radius: var(--radius-md);
		background: rgba(23, 92, 211, 0.25);
		overflow: hidden;
	}

	.artifact-grid a {
		min-height: 280px;
		padding: clamp(1.3rem, 3vw, 2rem);
		background: rgba(255, 255, 255, 0.74);
	}

	.artifact-grid a:hover {
		background: white;
	}

	.artifact-grid span,
	.artifact-grid strong {
		font-family: var(--font-mono);
		font-size: 0.58rem;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.artifact-grid h3 {
		margin-top: 3rem;
		font-size: clamp(1.5rem, 3vw, 2.4rem);
	}

	.artifact-grid p {
		max-width: 36rem;
		margin-top: 0.8rem;
		font-size: 0.82rem;
		line-height: 1.65;
		color: var(--graphite);
	}

	.artifact-grid strong {
		display: block;
		margin-top: 1.5rem;
	}

	.ledger {
		overflow-x: auto;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-md);
		background: white;
	}

	table {
		width: 100%;
		min-width: 820px;
		border-collapse: collapse;
		text-align: left;
	}

	th,
	td {
		padding: 1rem;
		border-bottom: 1px solid var(--line);
		vertical-align: top;
	}

	th {
		background: var(--paper-soft);
		font-family: var(--font-mono);
		font-size: 0.55rem;
		text-transform: uppercase;
		color: var(--graphite);
	}

	td {
		font-size: 0.76rem;
		line-height: 1.55;
		color: var(--ink-soft);
	}

	td:first-child {
		font-weight: 700;
		color: var(--ink);
	}

	td a {
		font-family: var(--font-mono);
		font-size: 0.58rem;
		font-weight: 700;
		color: var(--cobalt);
	}

	tbody tr:last-child td {
		border-bottom: 0;
	}

	.anti-promises__inner {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: clamp(3rem, 8vw, 7rem);
	}

	.anti-promises__inner > div > p {
		color: var(--signal);
	}

	.anti-promises h2 {
		color: var(--paper-raised);
	}

	.anti-promises ul {
		display: grid;
		gap: 1px;
		border: 1px solid var(--ink-line);
		background: var(--ink-line);
		list-style: none;
	}

	.anti-promises li {
		display: grid;
		grid-template-columns: 0.55fr 1fr;
		gap: 1rem;
		padding: 1.3rem;
		background: var(--ink-panel);
	}

	.anti-promises strong {
		color: var(--paper-raised);
	}

	.anti-promises span {
		font-size: 0.8rem;
		line-height: 1.55;
		color: #aebbb3;
	}

	@media (max-width: 900px) {
		.factory-definition__grid,
		.seam-section__inner,
		.anti-promises__inner {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 680px) {
		.seam-field,
		.artifact-grid {
			grid-template-columns: 1fr;
		}

		.seam-field > div {
			min-height: 330px;
		}

		.seam-mark {
			top: 50%;
		}

		.anti-promises li {
			grid-template-columns: 1fr;
		}
	}
</style>
