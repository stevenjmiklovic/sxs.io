<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import TerminalBox from '$lib/components/ui/TerminalBox.svelte';
	import { services } from '$lib/data/services';
	import { reveal } from '$lib/utils/observe';
</script>

<section class="section" id="services" aria-labelledby="services-header">
	<div class="container">
		<SectionHeader
			id="services-header"
			index="02"
			title="CONSULTING SERVICES"
			subtitle="// Direct engagement across the symbolic–subsymbolic stack. No middlemen."
		/>

		<div class="services-grid" use:reveal>
			{#each services as pkg}
				<div class="service-card-wrap">
					<TerminalBox title={pkg.name} label={pkg.tag ?? ''} variant={pkg.featured ? 'featured' : 'default'}>
						<div class="pkg-price">
							<span class="pkg-amount">${pkg.price}</span>
							<span class="pkg-duration">/ {pkg.duration}</span>
						</div>

						<ul class="pkg-features">
							{#each pkg.features as feat}
								<li>
									<span class="feat-arrow">►</span>
									<span>{feat}</span>
								</li>
							{/each}
						</ul>

						<div class="pkg-action">
							<a href="#contact" class="btn" class:btn--primary={pkg.featured} class:btn--ghost={!pkg.featured}>
								{pkg.featured ? 'BOOK SESSION' : 'ENQUIRE →'}
							</a>
						</div>
					</TerminalBox>
				</div>
			{/each}
		</div>

		<p class="services-note">
			All sessions are remote. Booking confirmed within 24 hours. All time zones supported.
		</p>
	</div>
</section>

<style>
	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-lg);
		align-items: stretch;
	}
	.service-card-wrap {
		display: flex;
		flex-direction: column;
	}
	.pkg-price {
		margin-bottom: var(--space-lg);
		padding-bottom: var(--space-md);
		border-bottom: 1px solid var(--border-dim);
	}
	.pkg-amount {
		font-size: 2.25rem;
		font-weight: 700;
		color: var(--text-accent);
		line-height: 1;
	}
	.pkg-duration {
		color: var(--text-muted);
		font-size: 0.8rem;
		margin-left: var(--space-sm);
	}
	.pkg-features {
		list-style: none;
		color: var(--text-dim);
		font-size: 0.82rem;
		line-height: 1;
		margin-bottom: var(--space-xl);
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}
	.pkg-features li {
		display: flex;
		gap: var(--space-sm);
		align-items: baseline;
	}
	.feat-arrow {
		color: var(--text-primary);
		flex-shrink: 0;
		font-size: 0.65rem;
	}
	.pkg-action {
		margin-top: auto;
	}
	.pkg-action .btn {
		width: 100%;
	}
	.services-note {
		margin-top: var(--space-xl);
		color: var(--text-muted);
		font-size: 0.75rem;
		letter-spacing: 0.05em;
		text-align: center;
	}
</style>
