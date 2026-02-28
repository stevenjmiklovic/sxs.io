<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import TerminalBox from '$lib/components/ui/TerminalBox.svelte';
	import { reveal } from '$lib/utils/observe';
</script>

<section class="section" id="about" aria-labelledby="about-header">
	<div class="container">
		<SectionHeader
			id="about-header"
			index="01"
			title="THE APPROACH"
			subtitle="// Explicit where possible. Learned where necessary. Neither alone is enough."
		/>

		<div class="about-grid" use:reveal>
			<div class="about-id">
				<TerminalBox title="IDENTIFICATION">
					<dl class="id-list">
						<div class="id-row">
							<dt>HANDLE</dt>
							<dd>sxs</dd>
						</div>
						<div class="id-row">
							<dt>BASE</dt>
							<dd>Remote</dd>
						</div>
						<div class="id-row">
							<dt>STATUS</dt>
							<dd class="status-available">[AVAILABLE]</dd>
						</div>
						<div class="id-row">
							<dt>MODE</dt>
							<dd>S × S</dd>
						</div>
						<div class="id-row">
							<dt>SINCE</dt>
							<dd>2020</dd>
						</div>
					</dl>
				</TerminalBox>
			</div>

			<div class="about-bio">
				<p>
					Every AI system has a seam. On one side: behavior you can specify. On the other: behavior
					that has to be learned. Where that line falls — and how carefully it's drawn — determines
					whether a system is debuggable, composable, and maintainable, or brittle in ways that compound.
				</p>
				<p>
					SXS works at that seam — designing the structure that contains the model, and the model
					behavior that fills the gaps structure can't.
				</p>

				<div class="expertise-grid">
					<div class="expertise-col">
						<div class="expertise-col__label">SYMBOLIC</div>
						<div class="expertise-list">
							<div class="expertise-item">
								<span class="expertise-arrow">►</span>
								<span>Architecture design & schema modeling</span>
							</div>
							<div class="expertise-item">
								<span class="expertise-arrow">►</span>
								<span>MCP server contracts & agent tool specs</span>
							</div>
							<div class="expertise-item">
								<span class="expertise-arrow">►</span>
								<span>Event-driven systems & CQRS patterns</span>
							</div>
							<div class="expertise-item">
								<span class="expertise-arrow">►</span>
								<span>Infrastructure-as-code & observability</span>
							</div>
						</div>
					</div>
					<div class="expertise-col">
						<div class="expertise-col__label">SUBSYMBOLIC</div>
						<div class="expertise-list">
							<div class="expertise-item">
								<span class="expertise-arrow">►</span>
								<span>LLM integration & RAG pipeline design</span>
							</div>
							<div class="expertise-item">
								<span class="expertise-arrow">►</span>
								<span>Agent orchestration & eval frameworks</span>
							</div>
							<div class="expertise-item">
								<span class="expertise-arrow">►</span>
								<span>Embedding strategies & fine-tuning workflows</span>
							</div>
							<div class="expertise-item">
								<span class="expertise-arrow">►</span>
								<span>Prompt engineering & model-in-the-loop design</span>
							</div>
						</div>
					</div>
				</div>

				<blockquote class="about-quote">
					"Build what you can specify. Learn what you can't."
				</blockquote>
			</div>
		</div>
	</div>
</section>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: var(--space-2xl);
		align-items: start;
	}
	.id-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}
	.id-row {
		display: grid;
		grid-template-columns: 70px 1fr;
		gap: var(--space-sm);
		font-size: 0.8rem;
	}
	dt {
		color: var(--text-muted);
		letter-spacing: 0.08em;
	}
	dd {
		color: var(--text-primary);
	}
	.status-available {
		color: var(--text-accent);
		font-weight: 700;
	}
	.about-bio {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}
	.about-bio p {
		color: var(--text-dim);
		font-size: 0.9rem;
		line-height: 1.9;
	}
	.expertise-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
	}
	.expertise-col__label {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.2em;
		color: var(--text-primary);
		margin-bottom: var(--space-sm);
		padding-bottom: var(--space-xs);
		border-bottom: 1px solid var(--border-dim);
	}
	.expertise-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		border-left: 2px solid var(--border-dim);
		padding-left: var(--space-md);
	}
	.expertise-item {
		display: flex;
		gap: var(--space-sm);
		font-size: 0.82rem;
		color: var(--text-dim);
		line-height: 1.5;
	}
	.expertise-arrow {
		color: var(--text-primary);
		flex-shrink: 0;
	}

	@media (max-width: 640px) {
		.expertise-grid {
			grid-template-columns: 1fr;
		}
	}
	.about-quote {
		color: var(--text-muted);
		font-size: 0.85rem;
		font-style: italic;
		border-left: 2px solid var(--border-primary);
		padding-left: var(--space-md);
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.about-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
