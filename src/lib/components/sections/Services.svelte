<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import TerminalBox from '$lib/components/ui/TerminalBox.svelte';
	import { services } from '$lib/data/services';
	import { reveal } from '$lib/utils/observe';
</script>

<section class="section services" id="services" aria-labelledby="services-header">
	<div class="container">
		<SectionHeader
			id="services-header"
			eyebrow="Engagements"
			title="Get to a sound decision faster."
			subtitle="Focused technical sessions for a live decision, an AI feature moving toward production, or a system that needs a deeper audit."
		/>

		<div class="services-grid" use:reveal>
			{#each services as pkg, index}
				<div class="service-card-wrap">
					<TerminalBox
						title={pkg.name}
						label={pkg.featured ? 'Most useful' : `0${index + 1}`}
						variant={pkg.featured ? 'featured' : 'default'}
					>
						<div class="pkg-price">
							<span class="pkg-amount">${pkg.price}</span>
							<span class="pkg-duration">{pkg.duration.toLowerCase()}</span>
						</div>

						<ul class="pkg-features">
							{#each pkg.features as feat}
								<li><span aria-hidden="true">✓</span>{feat}</li>
							{/each}
						</ul>

						<a href="#contact" class="pkg-action" aria-label={`Discuss the ${pkg.name} engagement`}>
							Discuss this engagement <span aria-hidden="true">↗</span>
						</a>
					</TerminalBox>
				</div>
			{/each}
		</div>

		<div class="services-note">
			<p><strong>Remote by default.</strong> A short written brief follows every session.</p>
			<p>
				Need an embedded engagement? <a href="#contact"
					>Start with the system and the constraint ↗</a
				>
			</p>
		</div>
	</div>
</section>

<style>
	.services {
		background: var(--paper);
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--space-md);
		align-items: stretch;
	}

	.service-card-wrap {
		min-width: 0;
	}

	.pkg-price {
		display: flex;
		align-items: baseline;
		gap: 0.6rem;
		margin-bottom: 1.6rem;
	}

	.pkg-amount {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.055em;
		color: var(--ink);
	}

	.pkg-duration {
		font-family: var(--font-mono);
		font-size: 0.62rem;
		color: var(--graphite);
	}

	.pkg-features {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 0.8rem;
		margin-bottom: 2rem;
		list-style: none;
		font-size: 0.83rem;
		line-height: 1.5;
		color: var(--ink-soft);
	}

	.pkg-features li {
		display: grid;
		grid-template-columns: 1rem 1fr;
		gap: 0.45rem;
	}

	.pkg-features li span {
		font-family: var(--font-mono);
		font-size: 0.65rem;
		color: var(--signal-deep);
	}

	.pkg-action {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: auto;
		padding-top: 1rem;
		border-top: 1px solid var(--line);
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--cobalt);
	}

	.pkg-action:hover {
		color: var(--cobalt-deep);
	}

	.services-note {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		margin-top: 1.5rem;
		padding: 1.1rem 1.25rem;
		border: 1px solid var(--line);
		border-radius: var(--radius-sm);
		background: var(--paper-soft);
		font-size: 0.76rem;
	}

	.services-note p {
		color: var(--graphite);
	}

	.services-note a {
		font-weight: 600;
		color: var(--cobalt);
	}

	@media (max-width: 940px) {
		.services-grid {
			grid-template-columns: 1fr;
		}

		.service-card-wrap {
			max-width: 680px;
		}
	}

	@media (max-width: 680px) {
		.services-note {
			flex-direction: column;
			gap: 0.65rem;
		}
	}
</style>
