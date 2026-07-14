<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
	export let eyebrow: string = '';
	export let id: string = '';
</script>

<header class="section-header" {id}>
	{#if eyebrow}
		<p class="section-header__eyebrow">{eyebrow}</p>
	{/if}
	<div class="section-header__content">
		<h2 class="section-header__title">{title}</h2>
		{#if subtitle}
			<p class="section-header__subtitle">{subtitle}</p>
		{/if}
	</div>
</header>

<style>
	.section-header {
		display: grid;
		grid-template-columns: minmax(10rem, 0.36fr) 1fr;
		gap: var(--space-2xl);
		margin-bottom: clamp(2.5rem, 6vw, 4.5rem);
	}

	.section-header__eyebrow {
		padding-top: 0.45rem;
		font-family: var(--font-mono);
		font-size: 0.66rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.section-header__content {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(15rem, 0.62fr);
		gap: var(--space-xl);
		align-items: end;
		padding-bottom: var(--space-lg);
		border-bottom: 1px solid var(--line-strong);
	}

	.section-header__title {
		font-size: clamp(2rem, 5vw, 3.7rem);
		line-height: 0.98;
	}

	.section-header__subtitle {
		font-size: 0.96rem;
		line-height: 1.65;
		color: var(--graphite);
	}

	@media (max-width: 800px) {
		.section-header,
		.section-header__content {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>
