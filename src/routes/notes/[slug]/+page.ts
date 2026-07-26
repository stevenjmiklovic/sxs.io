import { error } from '@sveltejs/kit';
import { factoryNotes, getFactoryNote } from '$lib/content/notes';

export const prerender = true;

export function entries() {
	return factoryNotes.map((note) => ({ slug: note.slug }));
}

export function load({ params }) {
	const note = getFactoryNote(params.slug);

	if (!note) {
		error(404, 'Factory Note not found');
	}

	return { note };
}
