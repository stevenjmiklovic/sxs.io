<script lang="ts">
	import NoteCard from '$lib/components/ui/NoteCard.svelte';
	import PageIntro from '$lib/components/ui/PageIntro.svelte';
	import Seo from '$lib/components/ui/Seo.svelte';
	import { factoryNotes } from '$lib/content/notes';
</script>

<Seo
	title="Factory Notes"
	description="Release-driven notes on sXs builds, capabilities, boundaries, verification, and confirmed reuse."
	path="/notes"
/>

<PageIntro
	eyebrow="Release-driven publication"
	title="Notes from work that exists."
	description="Factory Notes appear when a build, capability, or verification decision produces evidence worth inspecting—not to satisfy a publishing calendar."
/>

<section class="section section--dark note-index" aria-labelledby="note-index-title">
	<div class="container">
		<header class="note-index__header">
			<div>
				<p>Current ledger</p>
				<h2 id="note-index-title">{factoryNotes.length} launch notes</h2>
			</div>
			<div class="note-types" aria-label="Factory Note types">
				<span>Build</span>
				<span>Capability</span>
				<span>Boundary</span>
				<span>Verification</span>
				<span>Ledger</span>
			</div>
		</header>

		<div class="notes-grid">
			{#each factoryNotes as note, index}
				<NoteCard {note} {index} />
			{/each}
		</div>
	</div>
</section>

<section class="section publication-rule">
	<div class="container publication-rule__inner">
		<p>Publication rule</p>
		<h2>A note begins with a material change.</h2>
		<div>
			<p>
				A major release, a capability reused on a second build, a verification lesson that changes
				the production loop, or an open artifact with enough context to be useful.
			</p>
			<p>
				Generic commentary does not enter the ledger. Every note points back to software, a release,
				a repository, or an inspectable production artifact.
			</p>
		</div>
	</div>
</section>

<style>
	.note-index__header {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 2rem;
		margin-bottom: 2rem;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid var(--ink-line);
	}

	.note-index__header > div:first-child > p,
	.publication-rule__inner > p {
		font-family: var(--font-mono);
		font-size: 0.6rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--signal);
	}

	.note-index h2 {
		margin-top: 0.4rem;
		font-size: clamp(1.8rem, 4vw, 3rem);
		color: var(--paper-raised);
	}

	.note-types {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.55rem;
	}

	.note-types span {
		padding: 0.3rem 0.55rem;
		border: 1px solid var(--ink-line);
		border-radius: 999px;
		font-family: var(--font-mono);
		font-size: 0.54rem;
		text-transform: uppercase;
		color: #aebbb3;
	}

	.notes-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: var(--ink-line);
	}

	.publication-rule {
		background: var(--paper);
	}

	.publication-rule__inner {
		display: grid;
		grid-template-columns: minmax(10rem, 0.3fr) 0.8fr 1fr;
		gap: clamp(2rem, 6vw, 5rem);
		align-items: start;
	}

	.publication-rule__inner > p {
		color: var(--cobalt);
	}

	.publication-rule h2 {
		max-width: 13ch;
		font-size: clamp(2.3rem, 5vw, 4.3rem);
		line-height: 1;
	}

	.publication-rule__inner > div {
		display: grid;
		gap: 1.2rem;
	}

	.publication-rule__inner > div p {
		font-size: 0.9rem;
		line-height: 1.7;
		color: var(--graphite);
	}

	@media (max-width: 920px) {
		.notes-grid {
			grid-template-columns: 1fr;
		}

		.publication-rule__inner {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 620px) {
		.note-index__header {
			align-items: flex-start;
			flex-direction: column;
		}

		.note-types {
			justify-content: flex-start;
		}
	}
</style>
