<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import TerminalBox from '$lib/components/ui/TerminalBox.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import { projects } from '$lib/data/projects';
	import { reveal } from '$lib/utils/observe';

	const statusColor: Record<string, string> = {
		ACTIVE: 'active',
		ONGOING: 'ongoing',
		ARCHIVED: 'archived'
	};
</script>

<section class="section" id="projects" aria-labelledby="projects-header">
	<div class="container">
		<SectionHeader
			id="projects-header"
			index="03"
			title="PROJECTS"
			subtitle="// Open source, consulting tools, and experiments."
		/>

		<div class="projects-grid" use:reveal>
			{#each projects as project}
				<TerminalBox
					title={project.name}
					label={`[${project.status}]`}
					variant={project.status === 'ARCHIVED' ? 'dim' : 'default'}
				>
					<p class="project-desc">{project.description}</p>

					<div class="project-tags">
						{#each project.tags as tag}
							<Badge label={tag} />
						{/each}
					</div>

					{#if project.repo || project.url}
						<div class="project-links">
							{#if project.repo}
								<a href={project.repo} target="_blank" rel="noopener noreferrer" class="project-link">
									→ REPO
								</a>
							{/if}
							{#if project.url}
								<a href={project.url} target="_blank" rel="noopener noreferrer" class="project-link">
									→ LIVE
								</a>
							{/if}
						</div>
					{/if}

					<div class="project-status-bar">
						<span class="status-indicator {statusColor[project.status]}"></span>
						<span class="status-text">{project.status}</span>
					</div>
				</TerminalBox>
			{/each}
		</div>
	</div>
</section>

<style>
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--space-lg);
	}
	.project-desc {
		color: var(--text-dim);
		font-size: 0.82rem;
		line-height: 1.7;
		margin-bottom: var(--space-md);
		flex: 1;
	}
	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		margin-bottom: var(--space-md);
	}
	.project-links {
		display: flex;
		gap: var(--space-md);
		margin-bottom: var(--space-md);
	}
	.project-link {
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		color: var(--text-dim);
		transition: color var(--transition-fast);
	}
	.project-link:hover {
		color: var(--text-highlight);
	}
	.project-status-bar {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		margin-top: auto;
		padding-top: var(--space-sm);
		border-top: 1px solid var(--border-dim);
	}
	.status-indicator {
		width: 5px;
		height: 5px;
		border-radius: 50%;
	}
	.status-indicator.active {
		background: var(--text-primary);
		animation: pulse 2s infinite;
	}
	.status-indicator.ongoing {
		background: var(--text-dim);
	}
	.status-indicator.archived {
		background: var(--text-muted);
	}
	.status-text {
		font-size: 0.65rem;
		letter-spacing: 0.1em;
		color: var(--text-muted);
	}
</style>
