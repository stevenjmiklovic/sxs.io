<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import TerminalBox from '$lib/components/ui/TerminalBox.svelte';
	import { reveal } from '$lib/utils/observe';

	let name = '';
	let email = '';
	let message = '';
	let submitted = false;
	let submitting = false;

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		submitting = true;
		// Placeholder: wire to a form backend (Formspree, Netlify Forms, etc.)
		await new Promise((r) => setTimeout(r, 800));
		submitted = true;
		submitting = false;
	}
</script>

<section class="section" id="contact" aria-labelledby="contact-header">
	<div class="container">
		<SectionHeader
			id="contact-header"
			index="05"
			title="CONTACT"
			subtitle="// Available for consulting engagements and technical conversations."
		/>

		<div class="contact-grid" use:reveal>
			<div class="contact-info">
				<TerminalBox title="QUICK LINKS">
					<ul class="links-list">
						<li>
							<a href="https://github.com/kryptik-research" target="_blank" rel="noopener noreferrer">
								<span class="link-icon">→</span> GITHUB
							</a>
						</li>
						<li>
							<a href="mailto:github@sxs.io">
								<span class="link-icon">→</span> EMAIL
							</a>
						</li>
					</ul>

					<div class="contact-meta">
						<div class="meta-row">
							<span class="meta-label">AVAILABILITY</span>
							<span class="meta-value available">OPEN</span>
						</div>
						<div class="meta-row">
							<span class="meta-label">TIMEZONE</span>
							<span class="meta-value">ALL ZONES</span>
						</div>
						<div class="meta-row">
							<span class="meta-label">RESPONSE</span>
							<span class="meta-value">&lt; 24 HRS</span>
						</div>
						<div class="meta-row">
							<span class="meta-label">FORMAT</span>
							<span class="meta-value">REMOTE</span>
						</div>
					</div>
				</TerminalBox>
			</div>

			<div class="contact-form-wrap">
				<TerminalBox title="SEND MESSAGE">
					{#if submitted}
						<div class="form-success">
							<p class="success-icon">█ MESSAGE RECEIVED</p>
							<p>I'll be in touch within 24 hours.</p>
						</div>
					{:else}
						<form class="contact-form" on:submit={handleSubmit} novalidate>
							<div class="field">
								<label for="contact-name" class="field-label">NAME</label>
								<input
									id="contact-name"
									type="text"
									class="field-input"
									bind:value={name}
									placeholder="Your name"
									required
									autocomplete="name"
								/>
							</div>

							<div class="field">
								<label for="contact-email" class="field-label">EMAIL</label>
								<input
									id="contact-email"
									type="email"
									class="field-input"
									bind:value={email}
									placeholder="your@email.com"
									required
									autocomplete="email"
								/>
							</div>

							<div class="field">
								<label for="contact-message" class="field-label">MESSAGE</label>
								<textarea
									id="contact-message"
									class="field-input field-textarea"
									bind:value={message}
									placeholder="Tell me about your project..."
									rows="5"
									required
								></textarea>
							</div>

							<button type="submit" class="btn btn--primary submit-btn" disabled={submitting}>
								{submitting ? 'SENDING...' : 'SEND MESSAGE →'}
							</button>
						</form>
					{/if}
				</TerminalBox>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: var(--space-2xl);
		align-items: start;
	}
	.links-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		margin-bottom: var(--space-xl);
		padding-bottom: var(--space-lg);
		border-bottom: 1px solid var(--border-dim);
	}
	.links-list a {
		font-size: 0.82rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		color: var(--text-dim);
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		transition: color var(--transition-fast);
	}
	.links-list a:hover {
		color: var(--text-highlight);
	}
	.link-icon {
		color: var(--text-primary);
	}
	.contact-meta {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}
	.meta-row {
		display: grid;
		grid-template-columns: 100px 1fr;
		gap: var(--space-sm);
		font-size: 0.75rem;
	}
	.meta-label {
		color: var(--text-muted);
		letter-spacing: 0.08em;
	}
	.meta-value {
		color: var(--text-dim);
	}
	.meta-value.available {
		color: var(--text-accent);
		font-weight: 700;
	}

	/* Form styles */
	.contact-form {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}
	.field {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}
	.field-label {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		color: var(--text-dim);
	}
	.field-input {
		background: var(--bg-primary);
		border: 1px solid var(--border-primary);
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-size: 0.85rem;
		padding: var(--space-sm) var(--space-md);
		outline: none;
		transition: border-color var(--transition-fast);
		width: 100%;
	}
	.field-input::placeholder {
		color: var(--text-muted);
	}
	.field-input:focus {
		border-color: var(--border-bright);
	}
	.field-textarea {
		resize: vertical;
		min-height: 120px;
	}
	.submit-btn {
		width: 100%;
	}
	.submit-btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	/* Success state */
	.form-success {
		text-align: center;
		padding: var(--space-2xl) 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}
	.success-icon {
		color: var(--text-accent);
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 0.1em;
	}
	.form-success p:last-child {
		color: var(--text-dim);
		font-size: 0.85rem;
	}

	@media (max-width: 768px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
