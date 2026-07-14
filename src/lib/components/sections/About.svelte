<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import { reveal } from '$lib/utils/observe';
</script>

<section class="section about" id="about" aria-labelledby="about-header">
	<div class="container">
		<SectionHeader
			id="about-header"
			eyebrow="Working model"
			title="The seam is the system."
			subtitle="Explicit where possible. Learned where necessary. That's how AI features stay shippable."
		/>

		<div class="about-grid" use:reveal>
			<aside class="boundary-card" aria-label="SXS working principle">
				<div class="boundary-card__head">
					<span>Working principle</span>
					<span>01 / 01</span>
				</div>

				<div class="boundary-card__row">
					<span class="boundary-card__symbol">S</span>
					<div>
						<strong>Specify</strong>
						<p>Contracts, schemas, tools, traces, and evals.</p>
					</div>
				</div>

				<div class="boundary-card__join"><span>×</span></div>

				<div class="boundary-card__row boundary-card__row--learned">
					<span class="boundary-card__symbol">S</span>
					<div>
						<strong>Learn</strong>
						<p>Models, retrieval, adaptation, and judgment.</p>
					</div>
				</div>

				<p class="boundary-card__result">A system your team can understand, measure, and change.</p>
			</aside>

			<div class="about-copy">
				<div class="about-copy__lead">
					<p>
						Most AI features fail the same way: a promising demo gets brittle the moment real users
						touch it. Too much is left to the model that should have been engineered—or too much is
						engineered that the model handles better.
					</p>
					<p>
						SXS helps teams draw that line well: the structure around the model, the evals that
						prove it works, and the integration patterns that keep it working as models and
						requirements change.
					</p>
				</div>

				<div class="practice-grid">
					<div class="practice">
						<p class="practice__label">Structure</p>
						<ul>
							<li>Architecture and schema design</li>
							<li>MCP contracts and agent tool specs</li>
							<li>Event-driven systems and observability</li>
						</ul>
					</div>
					<div class="practice">
						<p class="practice__label">Intelligence</p>
						<ul>
							<li>LLM, RAG, and agent integration</li>
							<li>Evaluation and reliability frameworks</li>
							<li>Model-in-the-loop product design</li>
						</ul>
					</div>
				</div>

				<p class="about-quote">“Build what you can specify. Learn what you can't.”</p>
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		background: rgba(255, 255, 255, 0.38);
	}

	.about-grid {
		display: grid;
		grid-template-columns: minmax(280px, 0.7fr) minmax(0, 1.3fr);
		gap: clamp(2.5rem, 8vw, 7rem);
		align-items: start;
	}

	.boundary-card {
		position: sticky;
		top: calc(var(--header-height) + 2rem);
		padding: 1.3rem;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-md);
		background: var(--paper-raised);
		box-shadow: 0 15px 40px rgba(17, 25, 20, 0.06);
	}

	.boundary-card__head {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1.75rem;
		font-family: var(--font-mono);
		font-size: 0.58rem;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.boundary-card__row {
		display: grid;
		grid-template-columns: 48px 1fr;
		gap: 1rem;
		align-items: center;
		padding: 1rem;
		border: 1px solid var(--line);
		border-radius: var(--radius-sm);
		background-image:
			linear-gradient(var(--line) 1px, transparent 1px),
			linear-gradient(90deg, var(--line) 1px, transparent 1px);
		background-color: var(--paper);
		background-size: 18px 18px;
	}

	.boundary-card__row--learned {
		background:
			radial-gradient(circle at 78% 25%, rgba(111, 224, 181, 0.75), transparent 42%),
			var(--paper-soft);
	}

	.boundary-card__symbol {
		display: grid;
		width: 42px;
		height: 42px;
		place-items: center;
		border-radius: 50%;
		background: var(--ink);
		font-family: var(--font-mono);
		font-weight: 700;
		color: white;
	}

	.boundary-card__row strong {
		font-size: 0.9rem;
	}

	.boundary-card__row p {
		margin-top: 0.15rem;
		font-size: 0.72rem;
		line-height: 1.4;
		color: var(--graphite);
	}

	.boundary-card__join {
		position: relative;
		display: grid;
		height: 26px;
		place-items: center;
	}

	.boundary-card__join::before {
		position: absolute;
		inset: 50% 0 auto;
		height: 1px;
		background: var(--cobalt);
		content: '';
	}

	.boundary-card__join span {
		z-index: 1;
		padding: 0 0.5rem;
		background: white;
		font-family: var(--font-mono);
		font-weight: 700;
		color: var(--cobalt);
	}

	.boundary-card__result {
		margin-top: 1.5rem;
		font-size: 0.8rem;
		line-height: 1.55;
		color: var(--ink-soft);
	}

	.about-copy {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.about-copy__lead {
		display: grid;
		gap: 1.4rem;
	}

	.about-copy__lead p {
		font-size: clamp(1.18rem, 2.2vw, 1.55rem);
		line-height: 1.55;
		letter-spacing: -0.025em;
		color: var(--ink);
	}

	.about-copy__lead p:last-child {
		color: var(--graphite);
	}

	.practice-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		padding-top: 2rem;
		border-top: 1px solid var(--line-strong);
	}

	.practice__label {
		margin-bottom: 1rem;
		font-family: var(--font-mono);
		font-size: 0.62rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.practice ul {
		display: grid;
		gap: 0.65rem;
		list-style: none;
		font-size: 0.86rem;
		color: var(--ink-soft);
	}

	.practice li {
		position: relative;
		padding-left: 1rem;
	}

	.practice li::before {
		position: absolute;
		top: 0.6em;
		left: 0;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--signal-deep);
		content: '';
	}

	.about-quote {
		padding-left: 1.25rem;
		border-left: 3px solid var(--signal);
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--ink);
	}

	@media (max-width: 800px) {
		.about-grid {
			grid-template-columns: 1fr;
		}

		.boundary-card {
			position: static;
			max-width: 520px;
		}
	}

	@media (max-width: 540px) {
		.practice-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
