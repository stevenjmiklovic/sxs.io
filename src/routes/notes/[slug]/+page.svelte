<script lang="ts">
	import Seo from '$lib/components/ui/Seo.svelte';
	import { getNoteModule } from '$lib/content/notes';
	import { getPortfolioItem, type PortfolioItem } from '$lib/data/portfolio';
	import { formatDate } from '$lib/utils/format';

	export let data;

	const noteModule = getNoteModule(data.note.slug);
	const Content = noteModule?.default;
	const relatedItems = data.note.related
		.map((slug: string) => getPortfolioItem(slug))
		.filter((item: PortfolioItem | undefined): item is PortfolioItem => Boolean(item));
</script>

<Seo
	title={data.note.title}
	description={data.note.summary}
	path={`/notes/${data.note.slug}`}
	type="article"
	publishedAt={data.note.publishedAt}
/>

<article>
	<header class="article-header">
		<div class="container article-header__inner">
			<div class="article-header__meta">
				<a href="/notes">Factory Notes</a>
				<span>{data.note.type}</span>
				<time datetime={data.note.publishedAt}>{formatDate(data.note.publishedAt)}</time>
			</div>
			<h1>{data.note.title}</h1>
			<p>{data.note.summary}</p>
		</div>
	</header>

	<div class="article-body">
		<div class="container article-layout">
			<aside class="article-rail">
				<div>
					<p>Related systems</p>
					{#each relatedItems as item}
						<a
							href={item.kind === 'product' ? '/products' : '/capabilities'}
							title={`Find ${item.name} in the ${item.kind} index`}
						>
							{item.name} →
						</a>
					{/each}
				</div>
				<div>
					<p>Artifacts</p>
					{#each data.note.artifacts as artifact}
						<a href={artifact.href} target="_blank" rel="noopener noreferrer">
							{artifact.label} ↗
						</a>
					{/each}
				</div>
			</aside>

			<div class="prose">
				{#if Content}
					<Content />
				{/if}
			</div>
		</div>
	</div>

	<footer class="article-footer">
		<div class="container article-footer__inner">
			<p>The software ships. The factory compounds.</p>
			<a href="/notes">Return to Factory Notes →</a>
		</div>
	</footer>
</article>

<style>
	.article-header {
		padding: calc(var(--header-height) + clamp(4rem, 9vw, 7rem)) 1.5rem clamp(3rem, 7vw, 5rem);
		border-bottom: 1px solid var(--line);
		background:
			radial-gradient(circle at 82% 22%, rgba(111, 224, 181, 0.24), transparent 24rem), var(--paper);
	}

	.article-header__inner {
		max-width: 1040px;
	}

	.article-header__meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem 1.2rem;
		font-family: var(--font-mono);
		font-size: 0.58rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.article-header__meta a {
		color: var(--cobalt);
	}

	h1 {
		max-width: 15ch;
		margin-top: 2rem;
		font-size: clamp(3rem, 7vw, 6.7rem);
		line-height: 0.92;
		letter-spacing: -0.07em;
	}

	.article-header__inner > p {
		max-width: 47rem;
		margin-top: 2rem;
		font-size: clamp(1.05rem, 1.8vw, 1.25rem);
		line-height: 1.7;
		color: var(--graphite);
	}

	.article-body {
		padding: clamp(4rem, 9vw, 7rem) 1.5rem;
		background: rgba(255, 255, 255, 0.38);
	}

	.article-layout {
		display: grid;
		grid-template-columns: minmax(11rem, 0.32fr) minmax(0, 1fr);
		gap: clamp(3rem, 8vw, 7rem);
		align-items: start;
		max-width: 1040px;
	}

	.article-rail {
		position: sticky;
		top: calc(var(--header-height) + 2rem);
		display: grid;
		gap: 2rem;
	}

	.article-rail > div {
		display: grid;
		gap: 0.7rem;
		padding-top: 1rem;
		border-top: 1px solid var(--line-strong);
	}

	.article-rail p {
		font-family: var(--font-mono);
		font-size: 0.56rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.article-rail a {
		font-size: 0.72rem;
		line-height: 1.4;
		color: var(--cobalt);
	}

	.article-footer {
		padding: 2rem 1.5rem;
		background: var(--cobalt-soft);
	}

	.article-footer__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		max-width: 1040px;
	}

	.article-footer p {
		font-weight: 600;
		color: var(--ink);
	}

	.article-footer a {
		font-family: var(--font-mono);
		font-size: 0.62rem;
		font-weight: 700;
		color: var(--cobalt);
	}

	@media (max-width: 760px) {
		.article-header,
		.article-body {
			padding-inline: 0;
		}

		.article-layout {
			grid-template-columns: 1fr;
		}

		.article-rail {
			position: static;
			grid-template-columns: 1fr 1fr;
		}

		.article-footer__inner {
			align-items: flex-start;
			flex-direction: column;
		}
	}

	@media (max-width: 520px) {
		.article-rail {
			grid-template-columns: 1fr;
		}
	}
</style>
