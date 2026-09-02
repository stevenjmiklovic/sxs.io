export type PortfolioKind = 'product' | 'capability';
export type PortfolioClassification = 'Product' | 'Capability' | 'Lab' | 'Archived';
export type PortfolioStatus = 'Building' | 'Live' | 'Maintained' | 'Archived';
export type FactoryStage = 'Specify' | 'Generate' | 'Verify' | 'Ship' | 'Compound';

export interface PortfolioLink {
	label: string;
	href: string;
	kind: 'live' | 'source' | 'releases' | 'docs' | 'artifact';
}

export interface PortfolioRelease {
	label: string;
	date: string;
	summary: string;
	href: string;
}

export interface PortfolioItem {
	slug: string;
	kind: PortfolioKind;
	classification: PortfolioClassification;
	name: string;
	summary: string;
	audience: string;
	status: PortfolioStatus;
	origin: string;
	role: string;
	latestRelease: PortfolioRelease;
	factoryContribution: string;
	stages: FactoryStage[];
	tags: string[];
	links: PortfolioLink[];
	featured?: boolean;
}

export const products: PortfolioItem[] = [
	{
		slug: 'perfectstar-2k',
		kind: 'product',
		classification: 'Product',
		name: 'PerfectStar 2K',
		summary:
			'A keyboard-first writing environment that combines WordStar navigation, Reveal Codes, persistent sessions, spellcheck, and manuscript-ready RTF export.',
		audience: 'Long-form writers who want a focused daily-driver editor built around their hands.',
		status: 'Building',
		origin: 'Original product · Steven J. Miklovic',
		role: 'Built and maintained through the sXs factory',
		latestRelease: {
			label: 'Latest repository update',
			date: '2026-07-14',
			summary:
				'The working Rust build includes two-window editing, durable undo, and manuscript export.',
			href: 'https://github.com/stevenjmiklovic/PerfectStar-2k/commits/main'
		},
		factoryContribution:
			'Extended the factory’s Rust and terminal-interface patterns, persistent editing-state design, and verification of long-lived undo and document export.',
		stages: ['Specify', 'Generate', 'Verify', 'Ship'],
		tags: ['Rust', 'Ratatui', 'Writing tools'],
		links: [
			{
				label: 'View source',
				href: 'https://github.com/stevenjmiklovic/PerfectStar-2k',
				kind: 'source'
			},
			{
				label: 'Package docs',
				href: 'https://docs.rs/crate/perfectstar2k/latest',
				kind: 'docs'
			}
		],
		featured: true
	},
	{
		slug: 'archipelago',
		kind: 'product',
		classification: 'Product',
		name: 'Archipelago',
		summary:
			'A federated text-world engine for ergodic literature: sovereign realms authored in Markdown, played over SSH or the browser, whose events become part of a permanent world record.',
		audience:
			'Readers who want a text world to inhabit, and authors and operators who want to run a sovereign one.',
		status: 'Building',
		origin: 'Thinking Sage · original product',
		role: 'Built and maintained through the sXs factory',
		latestRelease: {
			label: 'v0.5.2',
			date: '2026-08-21',
			summary:
				'The current release runs the local realm end to end, with federation foundations and sea travel in place.',
			href: 'https://eventide.cc/archipelago/'
		},
		factoryContribution:
			'Extended the factory’s patterns for event-sourced state, content-as-data authoring pipelines, capability-scoped authority, and protocol work with an explicitly marked implementation boundary.',
		stages: ['Specify', 'Generate', 'Verify', 'Ship'],
		tags: ['Elixir', 'OTP', 'Federated text worlds'],
		links: [
			{
				label: 'Project page',
				href: 'https://eventide.cc/archipelago/',
				kind: 'live'
			},
			{
				label: 'Read the docs',
				href: 'https://eventide.cc/archipelago/docs/',
				kind: 'docs'
			}
		],
		featured: true
	},
	{
		slug: 'datalinks',
		kind: 'product',
		classification: 'Lab',
		name: 'Datalinks',
		summary:
			'An agent wiki that turns a Zotero library and agent session logs into a maintained research vault where every assertion traces to a source it can verify.',
		audience:
			'Researchers and scholars who need to know where their sources disagree and which conclusions rest on a single paper.',
		status: 'Building',
		origin: 'Thinking Sage · research product',
		role: 'Unified sXs factory portfolio',
		latestRelease: {
			label: 'Latest repository update',
			date: '2026-09-01',
			summary:
				'The alpha is complete and self-consistent across eleven skills, five agents, and seven standalone scripts, with CI conformance and an end-to-end fixture run.',
			href: 'https://github.com/thinkingsage/Datalinks/commits/main'
		},
		factoryContribution:
			'Developed reusable patterns for deterministic projections over model output, rubric-gated extraction with recorded verdicts, and bounded unattended maintenance that aborts rather than truncates.',
		stages: ['Specify', 'Generate', 'Verify'],
		tags: ['Python', 'Zotero', 'Agent knowledge'],
		links: [
			{
				label: 'View source',
				href: 'https://github.com/thinkingsage/Datalinks',
				kind: 'source'
			},
			{
				label: 'Design document',
				href: 'https://github.com/thinkingsage/Datalinks/blob/main/docs/design.md',
				kind: 'docs'
			}
		],
		featured: true
	}
];

export const capabilities: PortfolioItem[] = [
	{
		slug: 'kanon',
		kind: 'capability',
		classification: 'Capability',
		name: 'Kanon',
		summary:
			'A canonical knowledge-artifact system that validates and compiles skills, rules, workflows, agents, and prompts for multiple AI coding harnesses.',
		audience:
			'Engineering teams that need reusable agent knowledge without maintaining a separate source for every harness.',
		status: 'Maintained',
		origin: 'Thinking Sage · Context Bazaar',
		role: 'Core factory capability and open-source platform',
		latestRelease: {
			label: 'v0.5.0',
			date: '2026-07-24',
			summary:
				'The current release compiles a catalog of knowledge artifacts across eight supported harnesses.',
			href: 'https://github.com/thinkingsage/context-bazaar/releases/tag/v0.5.0'
		},
		factoryContribution:
			'Makes production knowledge portable: author once, validate centrally, and adapt to each agent environment without duplicating the source.',
		stages: ['Specify', 'Verify', 'Compound'],
		tags: ['TypeScript', 'Bun', 'Agent infrastructure'],
		links: [
			{
				label: 'View source',
				href: 'https://github.com/thinkingsage/context-bazaar',
				kind: 'source'
			},
			{
				label: 'Latest release',
				href: 'https://github.com/thinkingsage/context-bazaar/releases/tag/v0.5.0',
				kind: 'releases'
			},
			{
				label: 'Architecture decisions',
				href: 'https://github.com/thinkingsage/context-bazaar/tree/main/kanon/docs/adr',
				kind: 'artifact'
			}
		],
		featured: true
	},
	{
		slug: 'adr-power',
		kind: 'capability',
		classification: 'Capability',
		name: 'ADR Power',
		summary:
			'A portable agent capability for creating, reviewing, cross-referencing, and maintaining architecture decision records inside a codebase.',
		audience:
			'Teams that need consequential technical decisions to remain visible to both people and agents.',
		status: 'Building',
		origin: 'Thinking Sage · agent capability',
		role: 'Source capability compiled and distributed through Kanon',
		latestRelease: {
			label: 'Latest repository update',
			date: '2026-06-26',
			summary:
				'The current capability covers ADR creation, supersession, health checks, team review, hooks, and changelog integration.',
			href: 'https://github.com/thinkingsage/adr-power/commits/main'
		},
		factoryContribution:
			'Turns architecture history into active production context, so later human and agent work can understand why the system has its current shape.',
		stages: ['Specify', 'Verify', 'Compound'],
		tags: ['Architecture', 'ADRs', 'Agent workflows'],
		links: [
			{
				label: 'View source',
				href: 'https://github.com/thinkingsage/adr-power',
				kind: 'source'
			},
			{
				label: 'Read capability',
				href: 'https://github.com/thinkingsage/adr-power/blob/main/POWER.md',
				kind: 'docs'
			},
			{
				label: 'Compiled artifact',
				href: 'https://github.com/thinkingsage/context-bazaar/tree/main/kanon/knowledge/adr',
				kind: 'artifact'
			}
		],
		featured: true
	},
	{
		slug: 'byron-powers',
		kind: 'capability',
		classification: 'Capability',
		name: 'Byron Powers',
		summary:
			'A library of literary and publishing workflows for novelists, technical authors, agents, publicists, and proofreaders.',
		audience:
			'Writers and publishing professionals who need repeatable, inspectable AI-assisted craft workflows.',
		status: 'Maintained',
		origin: 'Thinking Sage · creative tooling',
		role: 'Source library compiled as a Kanon collection',
		latestRelease: {
			label: 'Latest repository update',
			date: '2026-05-21',
			summary:
				'The maintained collection covers eight literary and publishing capability families.',
			href: 'https://github.com/thinkingsage/byron-powers/commits/main'
		},
		factoryContribution:
			'Proved that the same canonical capability model can preserve deep domain workflows beyond software engineering.',
		stages: ['Generate', 'Verify', 'Compound'],
		tags: ['Writing', 'Publishing', 'Agent workflows'],
		links: [
			{
				label: 'View source',
				href: 'https://github.com/thinkingsage/byron-powers',
				kind: 'source'
			},
			{
				label: 'Compiled collection',
				href: 'https://github.com/thinkingsage/context-bazaar/tree/main/kanon/knowledge/byron-powers',
				kind: 'artifact'
			}
		],
		featured: true
	}
];

export const portfolio = [...products, ...capabilities];
export const latestShipment = capabilities[0];

export function getPortfolioItem(slug: string) {
	return portfolio.find((item) => item.slug === slug);
}
