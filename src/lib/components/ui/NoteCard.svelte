<script lang="ts">
	import type { FactoryNote } from '$lib/content/notes';
	import { formatDate } from '$lib/utils/format';

	export let note: FactoryNote;
	export let index: number = 0;
</script>

<article class="note-card">
	<div class="note-card__meta">
		<span>{note.type}</span>
		<time datetime={note.publishedAt}>{formatDate(note.publishedAt, 'short')}</time>
	</div>
	<p class="note-card__index">{String(index + 1).padStart(2, '0')} / FN</p>
	<h3><a href={`/notes/${note.slug}`}>{note.title}</a></h3>
	<p class="note-card__summary">{note.summary}</p>
	<a class="note-card__action" href={`/notes/${note.slug}`}>
		Read Factory Note <span aria-hidden="true">→</span>
	</a>
</article>

<style>
	.note-card {
		display: flex;
		min-height: 380px;
		flex-direction: column;
		padding: clamp(1.3rem, 3vw, 2rem);
		border: 1px solid #34423a;
		background: #151f19;
	}

	.note-card__meta {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #34423a;
		font-family: var(--font-mono);
		font-size: 0.56rem;
		text-transform: uppercase;
		color: #8fa097;
	}

	.note-card__index {
		margin-top: 2rem;
		font-family: var(--font-mono);
		font-size: 0.58rem;
		color: var(--signal);
	}

	h3 {
		margin-top: 1rem;
		font-size: clamp(1.55rem, 3vw, 2.4rem);
		line-height: 1.05;
		color: var(--paper-raised);
	}

	h3 a:hover {
		color: var(--signal);
	}

	.note-card__summary {
		margin-top: 1.2rem;
		font-size: 0.84rem;
		line-height: 1.65;
		color: #aebbb3;
	}

	.note-card__action {
		display: flex;
		justify-content: space-between;
		margin-top: auto;
		padding-top: 1.2rem;
		border-top: 1px solid #34423a;
		font-family: var(--font-mono);
		font-size: 0.62rem;
		font-weight: 700;
		color: var(--signal);
	}
</style>
