<script lang="ts">
	export let eyebrow: string;
	export let title: string;
	export let description: string;
</script>

<header class="page-intro">
	<div class="container page-intro__inner">
		<p class="page-intro__eyebrow">{eyebrow}</p>
		<div>
			<h1>{title}</h1>
			<p class="page-intro__description">{description}</p>
		</div>
	</div>
</header>

<style>
	.page-intro {
		padding: calc(var(--header-height) + clamp(4rem, 9vw, 7rem)) 1.5rem clamp(3.5rem, 8vw, 6rem);
		border-bottom: 1px solid var(--line);
		background:
			linear-gradient(90deg, transparent 49.9%, rgba(23, 92, 211, 0.08) 50%, transparent 50.1%),
			radial-gradient(circle at 82% 22%, rgba(111, 224, 181, 0.22), transparent 23rem);
	}

	.page-intro__inner {
		display: grid;
		grid-template-columns: minmax(10rem, 0.35fr) minmax(0, 1fr);
		gap: clamp(2rem, 7vw, 6rem);
		align-items: start;
	}

	.page-intro__eyebrow {
		padding-top: 0.65rem;
		font-family: var(--font-mono);
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	h1 {
		max-width: 14ch;
		font-size: clamp(3rem, 7vw, 6.5rem);
		line-height: 0.92;
		letter-spacing: -0.07em;
	}

	.page-intro__description {
		max-width: 45rem;
		margin-top: 2rem;
		font-size: clamp(1.05rem, 1.8vw, 1.25rem);
		line-height: 1.7;
		color: var(--graphite);
	}

	@media (max-width: 760px) {
		.page-intro {
			padding-inline: 0;
		}

		.page-intro__inner {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>
