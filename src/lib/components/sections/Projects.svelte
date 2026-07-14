<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import { projects } from '$lib/data/projects';
	import { reveal } from '$lib/utils/observe';
</script>

<section class="section projects" id="projects" aria-labelledby="projects-header">
	<div class="container">
		<SectionHeader
			id="projects-header"
			eyebrow="Selected work · 2026"
			title="Current systems, not case-study theater."
			subtitle="Original products, active integrations, and maintained open-source work. The newest build appears first."
		/>

		<div class="projects-grid" use:reveal>
			{#each projects as project, index}
				<article class:featured={project.featured} class="project-card">
					<div class="project-card__meta">
						<span>0{index + 1}</span>
						<span>{project.role}</span>
						<span class="project-card__status"><i aria-hidden="true"></i>{project.status}</span>
					</div>

					<div class="project-card__body">
						<div>
							<p class="project-card__year">{project.year}</p>
							<h3>{project.name}</h3>
						</div>

						<p class="project-card__description">{project.description}</p>
					</div>

					<div class="project-card__footer">
						<div class="project-tags">
							{#each project.tags as tag}<Badge label={tag} />{/each}
						</div>

						<div class="project-links">
							{#if project.url}
								<a href={project.url} target="_blank" rel="noopener noreferrer">
									View live <span aria-hidden="true">↗</span>
								</a>
							{/if}
							<a href={project.repo} target="_blank" rel="noopener noreferrer">
								Source <span aria-hidden="true">↗</span>
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div class="all-projects">
			<span>Browse the full repository history</span>
			<div>
				<a
					href="https://github.com/stevenjmiklovic?tab=repositories"
					target="_blank"
					rel="noopener noreferrer">Personal ↗</a
				>
				<a
					href="https://github.com/orgs/thinkingsage/repositories"
					target="_blank"
					rel="noopener noreferrer">Thinking Sage ↗</a
				>
			</div>
		</div>
	</div>
</section>

<style>
	.projects {
		background: var(--ink);
	}

	.projects :global(.section-header__title) {
		color: var(--paper-raised);
	}

	.projects :global(.section-header__subtitle) {
		color: #aab7af;
	}

	.projects :global(.section-header__content) {
		border-color: #34423a;
	}

	.projects :global(.section-header__eyebrow) {
		color: var(--signal);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1px;
		border: 1px solid #34423a;
		border-radius: var(--radius-md);
		background: #34423a;
		overflow: hidden;
	}

	.project-card {
		display: flex;
		min-height: 410px;
		flex-direction: column;
		padding: clamp(1.4rem, 3.5vw, 2.2rem);
		background: #151f19;
		transition: background var(--transition-normal);
	}

	.project-card:hover {
		background: #1a2820;
	}

	.project-card.featured {
		grid-column: 1 / -1;
		min-height: 470px;
		background:
			radial-gradient(circle at 84% 20%, rgba(111, 224, 181, 0.18), transparent 28%),
			linear-gradient(135deg, #17231c, #14211d);
	}

	.project-card__meta {
		display: grid;
		grid-template-columns: 2.8rem 1fr auto;
		gap: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #34423a;
		font-family: var(--font-mono);
		font-size: 0.57rem;
		text-transform: uppercase;
		color: #83948a;
	}

	.project-card__status {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		color: #b6c2bb;
	}

	.project-card__status i {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--signal);
	}

	.project-card__body {
		display: grid;
		grid-template-columns: minmax(0, 0.85fr) minmax(16rem, 1fr);
		gap: 2rem;
		margin: 2rem 0;
	}

	.featured .project-card__body {
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
	}

	.project-card__year {
		margin-bottom: 0.6rem;
		font-family: var(--font-mono);
		font-size: 0.6rem;
		color: var(--signal);
	}

	.project-card h3 {
		max-width: 14ch;
		font-size: clamp(1.6rem, 3.5vw, 2.8rem);
		line-height: 1;
		color: var(--paper-raised);
	}

	.featured h3 {
		max-width: 10ch;
		font-size: clamp(2.8rem, 7vw, 5.5rem);
		letter-spacing: -0.065em;
	}

	.project-card__description {
		max-width: 38rem;
		font-size: 0.95rem;
		line-height: 1.7;
		color: #aebbb3;
	}

	.featured .project-card__description {
		font-size: clamp(1rem, 1.8vw, 1.18rem);
		color: #d3dbd6;
	}

	.project-card__footer {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1.5rem;
		margin-top: auto;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.project-tags :global(.badge) {
		border-color: #405148;
		background: rgba(255, 255, 255, 0.03);
		color: #aebbb3;
	}

	.project-links {
		display: flex;
		gap: 1rem;
		font-size: 0.75rem;
		font-weight: 600;
		white-space: nowrap;
		color: var(--signal);
	}

	.project-links a:hover {
		color: white;
	}

	.all-projects {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 1.5rem;
		padding: 1.1rem 0;
		border-bottom: 1px solid #34423a;
		font-size: 0.8rem;
		color: #aebbb3;
	}

	.all-projects > div {
		display: flex;
		gap: 1.25rem;
	}

	.all-projects a {
		font-family: var(--font-mono);
		font-size: 0.63rem;
		color: var(--signal);
	}

	.all-projects a:hover {
		color: white;
	}

	@media (max-width: 760px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}

		.project-card.featured {
			grid-column: auto;
		}

		.project-card,
		.project-card.featured {
			min-height: 420px;
		}

		.project-card__body {
			grid-template-columns: 1fr;
			gap: 1.2rem;
		}

		.featured .project-card__body {
			grid-template-columns: 1fr;
		}

		.project-card__footer,
		.all-projects {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
