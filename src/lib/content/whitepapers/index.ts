import GithubSlugger from 'github-slugger';
import type { Component } from 'svelte';

import Content, { metadata } from './factory-thesis.md';
import raw from './factory-thesis.md?raw';

export interface Whitepaper {
	slug: string;
	title: string;
	subtitle: string;
	summary: string;
	version: string;
	publishedAt: string;
	status: string;
	referenceCount: number;
}

export interface TocEntry {
	id: string;
	label: string;
}

/**
 * Section list for the on-page contents.
 *
 * Derived from the document itself rather than maintained by hand, and slugged
 * with the same library rehype-slug uses when it stamps ids onto the rendered
 * headings — so an anchor here cannot drift from its heading. All heading
 * levels are fed through one slugger instance in document order, exactly as
 * rehype-slug does, so its duplicate-suffix behaviour is reproduced even though
 * only top-level sections are returned.
 */
function deriveTableOfContents(markdown: string): TocEntry[] {
	const slugger = new GithubSlugger();
	const entries: TocEntry[] = [];

	for (const line of markdown.split('\n')) {
		const heading = /^(#{2,6})\s+(.*)$/.exec(line);
		if (!heading) continue;

		const label = heading[2].trim();
		const id = slugger.slug(label);

		if (heading[1].length === 2) entries.push({ id, label });
	}

	return entries;
}

export const factoryThesis = metadata as unknown as Whitepaper;
export const FactoryThesisContent = Content as unknown as Component;
export const factoryThesisContents = deriveTableOfContents(raw);
