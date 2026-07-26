<script lang="ts">
	import type { PortfolioItem } from '$lib/data/portfolio';
	import { formatDate } from '$lib/utils/format';
	import Badge from './Badge.svelte';
	import StatusLabel from './StatusLabel.svelte';

	export let item: PortfolioItem;
	export let index: number = 0;
	export let compact: boolean = false;
</script>

<article class:compact class="portfolio-card">
	<div class="portfolio-card__meta">
		<span>{String(index + 1).padStart(2, '0')}</span>
		<span>{item.classification}</span>
		<StatusLabel label={item.status} />
	</div>

	<div class="portfolio-card__title">
		<p>{item.audience}</p>
		<h3>{item.name}</h3>
	</div>

	<p class="portfolio-card__summary">{item.summary}</p>

	{#if !compact}
		<div class="portfolio-card__release">
			<p>
				<span>{item.latestRelease.label}</span>
				<time datetime={item.latestRelease.date}
					>{formatDate(item.latestRelease.date, 'short')}</time
				>
			</p>
			<a href={item.latestRelease.href} target="_blank" rel="noopener noreferrer">
				{item.latestRelease.summary} <span aria-hidden="true">↗</span>
			</a>
		</div>

		<div class="portfolio-card__factory">
			<p class="portfolio-card__label">Factory contribution</p>
			<p>{item.factoryContribution}</p>
		</div>

		<div class="portfolio-card__origin">
			<span>Origin</span>
			<p>{item.origin}</p>
			<span>Role</span>
			<p>{item.role}</p>
		</div>
	{/if}

	<div class="portfolio-card__footer">
		<div class="portfolio-card__tags">
			{#each item.tags as tag}
				<Badge label={tag} />
			{/each}
		</div>
		<div class="portfolio-card__links">
			{#each item.links as link}
				<a href={link.href} target="_blank" rel="noopener noreferrer">
					{link.label} <span aria-hidden="true">↗</span>
				</a>
			{/each}
		</div>
	</div>
</article>

<style>
	.portfolio-card {
		display: grid;
		min-height: 100%;
		padding: clamp(1.4rem, 3vw, 2.2rem);
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-md);
		background: rgba(255, 255, 255, 0.72);
		box-shadow: 0 16px 40px rgba(17, 25, 20, 0.045);
	}

	.portfolio-card__meta {
		display: grid;
		grid-template-columns: 2.5rem 1fr auto;
		gap: 0.8rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--line);
		font-family: var(--font-mono);
		font-size: 0.58rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.portfolio-card__title {
		margin-top: clamp(2rem, 5vw, 4rem);
	}

	.portfolio-card__title > p {
		max-width: 36rem;
		margin-bottom: 0.8rem;
		font-family: var(--font-mono);
		font-size: 0.6rem;
		line-height: 1.5;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.portfolio-card h3 {
		max-width: 13ch;
		font-size: clamp(2rem, 5vw, 4.5rem);
		line-height: 0.95;
		letter-spacing: -0.065em;
	}

	.portfolio-card__summary {
		max-width: 44rem;
		margin-top: 1.5rem;
		font-size: clamp(0.95rem, 1.6vw, 1.08rem);
		line-height: 1.7;
		color: var(--ink-soft);
	}

	.portfolio-card__release,
	.portfolio-card__factory {
		margin-top: 2rem;
		padding: 1rem 1.1rem;
		border: 1px solid var(--line);
		border-radius: var(--radius-sm);
		background: var(--paper-soft);
	}

	.portfolio-card__release > p {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		font-family: var(--font-mono);
		font-size: 0.58rem;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.portfolio-card__release a {
		display: block;
		margin-top: 0.65rem;
		font-size: 0.8rem;
		line-height: 1.5;
		color: var(--ink);
	}

	.portfolio-card__release a:hover {
		color: var(--cobalt);
	}

	.portfolio-card__label {
		margin-bottom: 0.5rem;
		font-family: var(--font-mono);
		font-size: 0.58rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.portfolio-card__factory > p:last-child {
		font-size: 0.82rem;
		line-height: 1.6;
		color: var(--ink-soft);
	}

	.portfolio-card__origin {
		display: grid;
		grid-template-columns: 4.5rem 1fr;
		gap: 0.45rem 1rem;
		margin-top: 1.4rem;
		padding-top: 1.2rem;
		border-top: 1px solid var(--line);
		font-size: 0.72rem;
	}

	.portfolio-card__origin span {
		font-family: var(--font-mono);
		font-size: 0.56rem;
		text-transform: uppercase;
		color: var(--graphite);
	}

	.portfolio-card__origin p {
		color: var(--ink-soft);
	}

	.portfolio-card__footer {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1.5rem;
		margin-top: auto;
		padding-top: 2rem;
	}

	.portfolio-card__tags,
	.portfolio-card__links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
	}

	.portfolio-card__links {
		justify-content: flex-end;
		font-family: var(--font-mono);
		font-size: 0.63rem;
		font-weight: 700;
		color: var(--cobalt);
	}

	.portfolio-card__links a:hover {
		color: var(--cobalt-deep);
	}

	.portfolio-card.compact h3 {
		font-size: clamp(2rem, 4vw, 3.2rem);
	}

	.portfolio-card.compact .portfolio-card__title {
		margin-top: 2.2rem;
	}

	@media (max-width: 620px) {
		.portfolio-card__footer {
			align-items: flex-start;
			flex-direction: column;
		}

		.portfolio-card__links {
			justify-content: flex-start;
		}
	}
</style>
