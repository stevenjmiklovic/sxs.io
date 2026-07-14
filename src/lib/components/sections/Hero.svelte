<script lang="ts">
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		requestAnimationFrame(() => {
			visible = true;
		});
	});
</script>

<section class="hero" id="hero" aria-labelledby="hero-title">
	<div class="container hero__inner">
		<div class="hero__content" class:visible>
			<p class="hero__eyebrow">
				<span aria-hidden="true"></span>
				Independent AI systems studio
			</p>

			<h1 id="hero-title" class="hero__tagline">
				AI systems that ship
				<span>and keep working.</span>
			</h1>

			<p class="hero__description">
				Architecture, integration, and evaluation for teams building with LLMs and agents. Explicit
				where possible. Learned where necessary.
			</p>

			<div class="hero__actions">
				<a href="#projects" class="btn btn--primary"
					>Explore current work <span aria-hidden="true">↓</span></a
				>
				<a href="#contact" class="btn btn--ghost"
					>Start a conversation <span aria-hidden="true">↗</span></a
				>
			</div>

			<ul class="hero__capabilities" aria-label="Core capabilities">
				<li>System architecture</li>
				<li>Agent integration</li>
				<li>Evals & reliability</li>
			</ul>
		</div>

		<div
			class="boundary"
			aria-label="A diagram showing explicit structure meeting learned behavior"
		>
			<div class="boundary__header">
				<span>decision_boundary.v26</span>
				<span class="boundary__live"><i aria-hidden="true"></i> live</span>
			</div>

			<div class="boundary__field">
				<div class="boundary__side boundary__side--symbolic">
					<p>Symbolic</p>
					<span class="token token--a">schema</span>
					<span class="token token--b">trace</span>
					<span class="token token--c">eval</span>
					<span class="token token--d">contract</span>
				</div>

				<div class="boundary__seam">
					<span>S×S</span>
				</div>

				<div class="boundary__side boundary__side--learned">
					<p>Subsymbolic</p>
					<i class="latent latent--a"></i>
					<i class="latent latent--b"></i>
					<i class="latent latent--c"></i>
					<span class="token token--e">agent</span>
					<span class="token token--f">model</span>
					<span class="token token--g">latent</span>
				</div>
			</div>

			<div class="boundary__footer">
				<span>Specify what you can</span>
				<span>Learn what you can't</span>
			</div>
		</div>
	</div>

	<div class="container hero__status">
		<span>Remote / global</span>
		<span class="hero__status-rule" aria-hidden="true"></span>
		<span><i aria-hidden="true"></i> Select availability · Q3 2026</span>
	</div>
</section>

<style>
	.hero {
		min-height: min(900px, 100svh);
		padding: calc(var(--header-height) + clamp(4rem, 9vw, 7rem)) 1.5rem 2rem;
		overflow: hidden;
		border-bottom: 1px solid var(--line);
	}

	.hero__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(420px, 0.95fr);
		gap: clamp(3rem, 7vw, 7rem);
		align-items: center;
	}

	.hero__content {
		opacity: 0;
		transform: translateY(16px);
		transition:
			opacity 700ms ease,
			transform 700ms ease;
	}

	.hero__content.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero__eyebrow {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		margin-bottom: 1.5rem;
		font-family: var(--font-mono);
		font-size: 0.66rem;
		font-weight: 700;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.hero__eyebrow span {
		width: 2rem;
		height: 1px;
		background: var(--cobalt);
	}

	.hero__tagline {
		max-width: 14ch;
		font-size: clamp(3.4rem, 7.5vw, 6.8rem);
		font-weight: 600;
		line-height: 0.9;
		letter-spacing: -0.072em;
	}

	.hero__tagline span {
		display: block;
		color: var(--cobalt);
	}

	.hero__description {
		max-width: 37rem;
		margin-top: 2rem;
		font-size: clamp(1rem, 1.5vw, 1.16rem);
		line-height: 1.7;
		color: var(--graphite);
	}

	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 2.2rem;
	}

	.hero__capabilities {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem 1.6rem;
		margin-top: 2rem;
		list-style: none;
		font-family: var(--font-mono);
		font-size: 0.64rem;
		color: var(--graphite);
	}

	.hero__capabilities li {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.hero__capabilities li::before {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--signal-deep);
		content: '';
	}

	.boundary {
		position: relative;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-lg);
		background: rgba(255, 255, 255, 0.64);
		box-shadow: var(--shadow-soft);
		overflow: hidden;
		transform: rotate(1.4deg);
	}

	.boundary::before {
		position: absolute;
		inset: 1rem;
		z-index: -1;
		border-radius: inherit;
		background: var(--signal);
		content: '';
		transform: translate(1.2rem, 1.2rem) rotate(-1.4deg);
	}

	.boundary__header,
	.boundary__footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.8rem 1rem;
		font-family: var(--font-mono);
		font-size: 0.59rem;
		letter-spacing: 0.03em;
		color: var(--graphite);
	}

	.boundary__header {
		border-bottom: 1px solid var(--line);
	}

	.boundary__live {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		color: var(--signal-deep);
	}

	.boundary__live i,
	.hero__status i {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--signal-deep);
		animation: pulse 2.4s ease-in-out infinite;
	}

	.boundary__field {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 420px;
		overflow: hidden;
	}

	.boundary__side {
		position: relative;
		padding: 1.2rem;
	}

	.boundary__side > p {
		position: relative;
		z-index: 3;
		font-family: var(--font-mono);
		font-size: 0.62rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--ink);
	}

	.boundary__side--symbolic {
		background-image:
			linear-gradient(var(--line) 1px, transparent 1px),
			linear-gradient(90deg, var(--line) 1px, transparent 1px);
		background-size: 32px 32px;
	}

	.boundary__side--learned {
		background:
			radial-gradient(circle at 60% 22%, rgba(111, 224, 181, 0.72), transparent 32%),
			radial-gradient(circle at 25% 72%, rgba(23, 92, 211, 0.28), transparent 36%), #eef3ef;
	}

	.boundary__seam {
		position: absolute;
		inset: 0 auto 0 50%;
		z-index: 5;
		width: 1px;
		background: var(--cobalt);
	}

	.boundary__seam span {
		position: absolute;
		top: 50%;
		left: 50%;
		display: grid;
		width: 54px;
		height: 54px;
		place-items: center;
		border: 1px solid var(--cobalt);
		border-radius: 50%;
		background: var(--paper-raised);
		font-family: var(--font-mono);
		font-size: 0.72rem;
		font-weight: 700;
		color: var(--cobalt);
		transform: translate(-50%, -50%);
	}

	.token {
		position: absolute;
		z-index: 2;
		padding: 0.35rem 0.5rem;
		border: 1px solid var(--line-strong);
		border-radius: 6px;
		background: rgba(255, 255, 255, 0.87);
		font-family: var(--font-mono);
		font-size: 0.55rem;
		color: var(--ink-soft);
	}

	.token--a {
		top: 22%;
		left: 13%;
	}
	.token--b {
		top: 38%;
		right: 14%;
	}
	.token--c {
		bottom: 29%;
		left: 20%;
	}
	.token--d {
		bottom: 12%;
		right: 12%;
	}
	.token--e {
		top: 27%;
		right: 13%;
	}
	.token--f {
		bottom: 33%;
		left: 18%;
	}
	.token--g {
		bottom: 11%;
		right: 26%;
	}

	.latent {
		position: absolute;
		border-radius: 50%;
		background: rgba(23, 92, 211, 0.17);
		filter: blur(2px);
	}

	.latent--a {
		top: 19%;
		left: 18%;
		width: 96px;
		height: 96px;
	}
	.latent--b {
		right: 7%;
		bottom: 19%;
		width: 140px;
		height: 140px;
		background: rgba(111, 224, 181, 0.44);
	}
	.latent--c {
		bottom: 8%;
		left: 7%;
		width: 62px;
		height: 62px;
		background: rgba(23, 92, 211, 0.26);
	}

	.boundary__footer {
		border-top: 1px solid var(--line);
	}

	.hero__status {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: clamp(4rem, 8vw, 7rem);
		font-family: var(--font-mono);
		font-size: 0.61rem;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.hero__status > span:last-child {
		display: flex;
		align-items: center;
		gap: 0.55rem;
	}

	.hero__status-rule {
		flex: 1;
		height: 1px;
		background: var(--line);
	}

	@media (max-width: 980px) {
		.hero {
			min-height: auto;
		}

		.hero__inner {
			grid-template-columns: 1fr;
		}

		.hero__tagline {
			max-width: 12ch;
		}

		.boundary {
			max-width: 660px;
			transform: none;
		}
	}

	@media (max-width: 640px) {
		.hero {
			padding-inline: 0;
			padding-top: calc(var(--header-height) + 3.5rem);
		}

		.hero__tagline {
			font-size: clamp(3.2rem, 16vw, 4.6rem);
		}

		.hero__description {
			font-size: 1rem;
		}

		.hero__actions .btn {
			width: 100%;
		}

		.boundary__field {
			min-height: 330px;
		}

		.hero__status {
			align-items: flex-start;
			flex-direction: column;
		}

		.hero__status-rule {
			display: none;
		}
	}
</style>
