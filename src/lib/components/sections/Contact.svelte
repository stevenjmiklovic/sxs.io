<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import { reveal } from '$lib/utils/observe';
</script>

<section class="section contact" id="contact" aria-labelledby="contact-header">
	<div class="container">
		<SectionHeader
			id="contact-header"
			eyebrow="Next step"
			title="Bring the constraint, not the pitch deck."
			subtitle="A useful first note is short: what you're building, where it breaks, and the decision that needs to be made."
		/>

		<div class="contact-grid" use:reveal>
			<div class="contact-brief">
				<p class="contact-brief__label">A strong first message includes</p>
				<ol>
					<li><span>01</span>The system or feature in one sentence.</li>
					<li><span>02</span>The current technical constraint.</li>
					<li><span>03</span>The decision or outcome you need.</li>
				</ol>

				<div class="contact-meta">
					<p>
						<span>Availability</span><strong><i aria-hidden="true"></i> Select projects</strong>
					</p>
					<p><span>Format</span><strong>Remote / global</strong></p>
					<p><span>Response</span><strong>Within 1 business day</strong></p>
				</div>
			</div>

			<div class="contact-action">
				<p class="contact-action__kicker">Open a direct thread</p>
				<a
					class="contact-email"
					href="mailto:github@sxs.io?subject=SXS%20project%20inquiry"
					aria-label="Email SXS at github@sxs.io"
				>
					<span>github@sxs.io</span>
					<span aria-hidden="true">↗</span>
				</a>
				<p class="contact-action__note">No intake portal. No message that pretends it was sent.</p>

				<div class="contact-links">
					<a href="https://github.com/stevenjmiklovic" target="_blank" rel="noopener noreferrer">
						Personal GitHub ↗
					</a>
					<a href="https://github.com/thinkingsage" target="_blank" rel="noopener noreferrer">
						Thinking Sage ↗
					</a>
					<a href="https://github.com/kryptik-research" target="_blank" rel="noopener noreferrer">
						Kryptik Research ↗
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		background:
			radial-gradient(circle at 80% 70%, rgba(111, 224, 181, 0.28), transparent 27rem),
			var(--cobalt-soft);
	}

	.contact-grid {
		display: grid;
		grid-template-columns: minmax(260px, 0.75fr) minmax(0, 1.25fr);
		gap: clamp(2.5rem, 7vw, 6rem);
		align-items: stretch;
	}

	.contact-brief {
		display: flex;
		flex-direction: column;
	}

	.contact-brief__label,
	.contact-action__kicker {
		font-family: var(--font-mono);
		font-size: 0.62rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.contact-brief ol {
		display: grid;
		gap: 0;
		margin-top: 1.2rem;
		list-style: none;
	}

	.contact-brief li {
		display: grid;
		grid-template-columns: 2rem 1fr;
		gap: 0.85rem;
		padding: 1rem 0;
		border-bottom: 1px solid rgba(23, 92, 211, 0.2);
		font-size: 0.88rem;
		color: var(--ink-soft);
	}

	.contact-brief li span {
		font-family: var(--font-mono);
		font-size: 0.58rem;
		color: var(--cobalt);
	}

	.contact-meta {
		display: grid;
		gap: 0.6rem;
		margin-top: auto;
		padding-top: 2rem;
	}

	.contact-meta p {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		font-family: var(--font-mono);
		font-size: 0.58rem;
		color: var(--graphite);
	}

	.contact-meta strong {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-weight: 500;
		color: var(--ink);
	}

	.contact-meta i {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--signal-deep);
	}

	.contact-action {
		display: flex;
		min-height: 360px;
		flex-direction: column;
		padding: clamp(1.5rem, 5vw, 3rem);
		border: 1px solid rgba(23, 92, 211, 0.25);
		border-radius: var(--radius-lg);
		background: rgba(255, 255, 255, 0.72);
		box-shadow: var(--shadow-soft);
	}

	.contact-email {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 2.2rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid var(--ink);
		font-size: clamp(1.4rem, 4vw, 3rem);
		font-weight: 600;
		letter-spacing: -0.045em;
		color: var(--ink);
		transition: color var(--transition-fast);
	}

	.contact-email:hover {
		color: var(--cobalt);
	}

	.contact-action__note {
		margin-top: 1rem;
		font-size: 0.78rem;
		color: var(--graphite);
	}

	.contact-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.2rem;
		margin-top: auto;
		padding-top: 2.5rem;
		font-family: var(--font-mono);
		font-size: 0.62rem;
		font-weight: 600;
		color: var(--cobalt);
	}

	.contact-links a:hover {
		color: var(--cobalt-deep);
	}

	@media (max-width: 780px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}

		.contact-meta {
			margin-top: 1rem;
		}
	}

	@media (max-width: 480px) {
		.contact-meta p {
			align-items: flex-start;
			flex-direction: column;
			gap: 0.25rem;
		}

		.contact-email {
			font-size: 1.25rem;
		}
	}
</style>
