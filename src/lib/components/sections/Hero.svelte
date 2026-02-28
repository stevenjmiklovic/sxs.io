<script lang="ts">
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				visible = true;
			});
		});
	});
</script>

<section class="hero" id="hero" aria-label="Hero">
	<div class="container hero__inner">
		<pre class="hero__ascii" aria-hidden="true">
 ███████╗██╗  ██╗███████╗
 ██╔════╝╚██╗██╔╝██╔════╝
 ███████╗ ╚███╔╝ ███████╗
 ╚════██║ ██╔██╗ ╚════██║
 ███████║██╔╝ ██╗███████║
 ╚══════╝╚═╝  ╚═╝╚══════╝</pre>

		<div class="hero__content" class:visible>
			<p class="hero__eyebrow">// SYMBOLIC × SUBSYMBOLIC</p>

			<h1 class="hero__tagline">
				<span class="font-display">Where logic meets</span>
				<span class="hero__tagline-accent">latent space.</span>
			</h1>

			<p class="hero__description">
				Engineering at the intersection of explicit structure and emergent intelligence.<br />
				Build what you can specify. Learn what you can't.
			</p>

			<div class="hero__actions">
				<a href="#services" class="btn btn--primary">VIEW SERVICES</a>
				<a href="#about" class="btn btn--ghost">THE APPROACH →</a>
			</div>
		</div>

		<div class="hero__status" aria-label="System status">
			<span class="status-dot" aria-hidden="true"></span>
			<span>SYMBOLIC</span>
			<span class="status-cross" aria-hidden="true">×</span>
			<span>SUBSYMBOLIC</span>
			<span class="status-sep" aria-hidden="true">|</span>
			<span>ACCEPTING NEW CLIENTS</span>
			<span class="cursor" aria-hidden="true">█</span>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: var(--section-padding);
		padding-top: calc(var(--space-3xl) + var(--header-height));
		border-bottom: 1px solid var(--border-dim);
		position: relative;
	}
	.hero__inner {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--space-2xl);
	}
	.hero__ascii {
		color: var(--border-primary);
		font-size: clamp(0.45rem, 1.4vw, 0.85rem);
		line-height: 1.2;
		font-family: var(--font-mono);
		user-select: none;
		opacity: 0.7;
	}
	.hero__content {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 700ms ease,
			transform 700ms ease;
	}
	.hero__content.visible {
		opacity: 1;
		transform: translateY(0);
	}
	.hero__eyebrow {
		color: var(--text-muted);
		font-size: 0.75rem;
		letter-spacing: 0.15em;
		margin-bottom: var(--space-md);
		line-height: 1.4;
	}
	.hero__tagline {
		font-size: clamp(2rem, 6vw, 4rem);
		line-height: 1.1;
		margin-bottom: var(--space-md);
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}
	.font-display {
		font-family: var(--font-display);
		color: var(--text-accent);
		font-size: 1.3em;
		font-weight: 400;
		text-transform: none;
		letter-spacing: 0.01em;
	}
	.hero__tagline-accent {
		font-family: var(--font-mono);
		font-size: 0.45em;
		color: var(--text-dim);
		font-weight: 400;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}
	.hero__description {
		color: var(--text-dim);
		font-size: 0.95rem;
		line-height: 1.9;
		margin-bottom: var(--space-xl);
	}
	.hero__actions {
		display: flex;
		gap: var(--space-md);
		flex-wrap: wrap;
	}
	.hero__status {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		color: var(--text-muted);
		font-size: 0.7rem;
		letter-spacing: 0.1em;
	}
	.status-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--text-primary);
		flex-shrink: 0;
		animation: pulse 2s infinite;
	}
	.status-cross {
		color: var(--text-primary);
		font-weight: 700;
	}
	.status-sep {
		color: var(--border-dim);
	}
	.cursor {
		animation: blink 1s step-end infinite;
		color: var(--text-primary);
	}
</style>
