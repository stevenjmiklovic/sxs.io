<script lang="ts">
	import Seo from '$lib/components/ui/Seo.svelte';
	import {
		FactoryThesisContent,
		factoryThesis,
		factoryThesisContents
	} from '$lib/content/whitepapers';
	import { formatDate } from '$lib/utils/format';

	const sourceHref =
		'https://github.com/stevenjmiklovic/sxs.io/blob/main/src/lib/content/whitepapers/factory-thesis.md';
</script>

<Seo
	title={factoryThesis.title}
	description={factoryThesis.summary}
	path="/factory/thesis"
	type="article"
	publishedAt={factoryThesis.publishedAt}
/>

<article>
	<header class="thesis-header">
		<div class="container thesis-header__inner">
			<div class="thesis-header__meta">
				<a href="/factory">The Factory</a>
				<span>Whitepaper</span>
				<span>v{factoryThesis.version}</span>
				<time datetime={factoryThesis.publishedAt}>{formatDate(factoryThesis.publishedAt)}</time>
				<span>{factoryThesis.referenceCount} references</span>
			</div>
			<h1>{factoryThesis.title}</h1>
			<p class="thesis-header__subtitle">{factoryThesis.subtitle}</p>
		</div>
	</header>

	<div class="thesis-body">
		<div class="container thesis-layout">
			<aside class="thesis-rail" aria-label="Contents">
				<nav>
					<p>Contents</p>
					<ol>
						{#each factoryThesisContents as entry}
							<li><a href={`#${entry.id}`}>{entry.label}</a></li>
						{/each}
					</ol>
				</nav>
				<div class="thesis-rail__status">
					<p>Status</p>
					<span>{factoryThesis.status}</span>
					<a href={sourceHref} target="_blank" rel="noopener noreferrer">Source markdown ↗</a>
				</div>
			</aside>

			<div class="prose">
				<FactoryThesisContent />
			</div>
		</div>
	</div>

	<footer class="thesis-footer">
		<div class="container thesis-footer__inner">
			<p>Every claim above is meant to be checked.</p>
			<a href="/factory">Return to the production system →</a>
		</div>
	</footer>
</article>

<style>
	.thesis-header {
		padding: calc(var(--header-height) + clamp(4rem, 9vw, 7rem)) 1.5rem clamp(3rem, 7vw, 5rem);
		border-bottom: 1px solid var(--line);
		background:
			linear-gradient(90deg, transparent 49.9%, rgba(23, 92, 211, 0.08) 50%, transparent 50.1%),
			radial-gradient(circle at 84% 20%, rgba(111, 224, 181, 0.22), transparent 24rem), var(--paper);
	}

	.thesis-header__inner {
		max-width: 1100px;
	}

	.thesis-header__meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem 1.2rem;
		font-family: var(--font-mono);
		font-size: 0.58rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.thesis-header__meta a {
		color: var(--cobalt);
	}

	h1 {
		max-width: 16ch;
		margin-top: 2rem;
		font-size: clamp(2.8rem, 6.5vw, 6rem);
		line-height: 0.92;
		letter-spacing: -0.07em;
	}

	.thesis-header__subtitle {
		max-width: 52rem;
		margin-top: 2rem;
		font-size: clamp(1.05rem, 1.8vw, 1.3rem);
		line-height: 1.6;
		letter-spacing: -0.01em;
		color: var(--graphite);
	}

	.thesis-body {
		padding: clamp(4rem, 9vw, 7rem) 1.5rem;
		background: rgba(255, 255, 255, 0.38);
	}

	.thesis-layout {
		display: grid;
		grid-template-columns: minmax(13rem, 0.34fr) minmax(0, 1fr);
		gap: clamp(3rem, 7vw, 6rem);
		align-items: start;
		max-width: 1100px;
	}

	.thesis-rail {
		position: sticky;
		top: calc(var(--header-height) + 2rem);
		display: grid;
		gap: 2rem;
		max-height: calc(100svh - var(--header-height) - 4rem);
		overflow-y: auto;
	}

	.thesis-rail nav,
	.thesis-rail__status {
		display: grid;
		gap: 0.7rem;
		padding-top: 1rem;
		border-top: 1px solid var(--line-strong);
	}

	.thesis-rail p {
		font-family: var(--font-mono);
		font-size: 0.56rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.thesis-rail ol {
		display: grid;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
		counter-reset: none;
	}

	.thesis-rail ol a {
		display: block;
		font-size: 0.72rem;
		line-height: 1.35;
		color: var(--ink-soft);
	}

	.thesis-rail ol a:hover {
		color: var(--cobalt);
	}

	.thesis-rail__status span {
		font-size: 0.7rem;
		line-height: 1.5;
		color: var(--ink-soft);
	}

	.thesis-rail__status a {
		font-family: var(--font-mono);
		font-size: 0.62rem;
		font-weight: 700;
		color: var(--cobalt);
	}

	.thesis-footer {
		padding: 2rem 1.5rem;
		background: var(--cobalt-soft);
	}

	.thesis-footer__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		max-width: 1100px;
	}

	.thesis-footer p {
		font-weight: 600;
		color: var(--ink);
	}

	.thesis-footer a {
		font-family: var(--font-mono);
		font-size: 0.62rem;
		font-weight: 700;
		color: var(--cobalt);
	}

	@media (max-width: 900px) {
		.thesis-header,
		.thesis-body {
			padding-inline: 0;
		}

		.thesis-layout {
			grid-template-columns: 1fr;
		}

		.thesis-rail {
			position: static;
			max-height: none;
			overflow-y: visible;
		}
	}

	@media (max-width: 620px) {
		.thesis-footer__inner {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
