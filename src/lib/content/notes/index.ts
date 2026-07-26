import type { Component } from 'svelte';

export type FactoryNoteType = 'Build' | 'Capability' | 'Boundary' | 'Verification' | 'Ledger';

export interface NoteArtifact {
	label: string;
	href: string;
}

export interface FactoryNote {
	slug: string;
	title: string;
	summary: string;
	publishedAt: string;
	type: FactoryNoteType;
	related: string[];
	artifacts: NoteArtifact[];
}

interface NoteModule {
	default: Component;
	metadata: FactoryNote;
}

const modules = import.meta.glob<NoteModule>('./*.md', { eager: true });

export const factoryNotes = Object.values(modules)
	.map((module) => module.metadata)
	.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getNoteModule(slug: string) {
	const entry = Object.entries(modules).find(([path]) => path.endsWith(`/${slug}.md`));
	return entry?.[1];
}

export function getFactoryNote(slug: string) {
	return factoryNotes.find((note) => note.slug === slug);
}
