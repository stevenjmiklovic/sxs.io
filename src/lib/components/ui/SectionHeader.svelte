<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
	export let id: string = '';
	export let index: string = '01';
</script>

<header class="section-header" {id}>
	<div class="section-header__top">
		<span class="section-header__index">[{index}]</span>
		<div class="section-header__rule" aria-hidden="true"></div>
	</div>
	<h2 class="section-header__title">{title}</h2>
	{#if subtitle}
		<p class="section-header__subtitle">{subtitle}</p>
	{/if}
	<div class="section-header__bottom-rule" aria-hidden="true"></div>
</header>

<style>
	.section-header {
		margin-bottom: var(--space-2xl);
	}
	.section-header__top {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		margin-bottom: var(--space-sm);
	}
	.section-header__index {
		color: var(--text-muted);
		font-size: 0.7rem;
		letter-spacing: 0.15em;
		white-space: nowrap;
	}
	.section-header__rule {
		flex: 1;
		height: 1px;
		background: var(--border-dim);
	}
	.section-header__title {
		font-size: clamp(1.5rem, 4vw, 2.25rem);
		color: var(--text-accent);
		letter-spacing: 0.08em;
		line-height: 1.1;
	}
	.section-header__subtitle {
		color: var(--text-muted);
		margin-top: var(--space-sm);
		font-size: 0.85rem;
		letter-spacing: 0.04em;
		line-height: 1.6;
	}
	.section-header__bottom-rule {
		height: 1px;
		background: var(--border-dim);
		margin-top: var(--space-lg);
	}
</style>
