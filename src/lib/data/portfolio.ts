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
		slug: 'world-monitor-sxs',
		kind: 'product',
		classification: 'Product',
		name: 'World Monitor · sXs',
		summary:
			'A real-time global intelligence interface that brings AI-synthesized briefs, infrastructure signals, finance data, and geospatial monitoring into one system.',
		audience:
			'Analysts and operators who need a unified view of fast-moving geopolitical and infrastructure signals.',
		status: 'Maintained',
		origin: 'sXs product variant · maintained fork of World Monitor',
		role: 'Variant development, integration, deployment, and maintenance',
		latestRelease: {
			label: 'Current sXs branch',
			date: '2026-03-22',
			summary: 'The sXs branch supports focused site variants and native desktop distribution.',
			href: 'https://github.com/stevenjmiklovic/worldmonitor/commits/sxs-main'
		},
		factoryContribution:
			'Expanded the factory’s patterns for variant-driven products, data-rich interfaces, protocol contracts, and cross-platform delivery.',
		stages: ['Generate', 'Verify', 'Ship', 'Compound'],
		tags: ['TypeScript', 'Tauri', 'Geospatial AI'],
		links: [
			{
				label: 'View source',
				href: 'https://github.com/stevenjmiklovic/worldmonitor',
				kind: 'source'
			}
		]
	},
	{
		slug: 'rhiza',
		kind: 'product',
		classification: 'Lab',
		name: 'Rhiza',
		summary:
			'An AI-assisted etymology explorer that traces Greek roots in English words and renders their relationships as interactive graphs.',
		audience:
			'Curious readers, students, and researchers exploring how Greek roots connect English vocabulary.',
		status: 'Building',
		origin: 'Thinking Sage · research product',
		role: 'Unified sXs factory portfolio',
		latestRelease: {
			label: 'Latest repository update',
			date: '2026-05-19',
			summary:
				'The current build joins a graph-backed data model with provider fallback and caching.',
			href: 'https://github.com/thinkingsage/rhiza/commits/main'
		},
		factoryContribution:
			'Developed reusable patterns for graph-backed AI analysis, semantic clustering, provider fallback, and inspectable visual explanation.',
		stages: ['Specify', 'Generate', 'Verify'],
		tags: ['SvelteKit', 'FastAPI', 'Neo4j'],
		links: [{ label: 'View source', href: 'https://github.com/thinkingsage/rhiza', kind: 'source' }]
	}
];

export const capabilities: PortfolioItem[] = [
	{
		slug: 'kanon',
		kind: 'capability',
		classification: 'Capability',
		name: 'Context Bazaar & Kanon',
		summary:
			'A canonical knowledge-artifact catalog and the compiler that validates and builds it. Author a skill, rule, workflow, agent, or prompt once, then compile it to every supported AI coding harness.',
		audience:
			'Engineering teams that need reusable agent knowledge without maintaining a separate source for every harness.',
		status: 'Maintained',
		origin: 'Thinking Sage · original capability',
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
		]
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
		]
	},
	{
		slug: 'solr-compass',
		kind: 'capability',
		classification: 'Capability',
		name: 'Solr Compass',
		summary:
			'A Kiro Power that brings Solr-backed vector, keyword, and hybrid search to a codebase, with incremental indexing and durable cross-session memory over MCP.',
		audience:
			'Developers who need an assistant to retrieve from a real index instead of re-reading the repository every session.',
		status: 'Maintained',
		origin: 'Original capability · Steven J. Miklovic',
		role: 'Built and maintained through the sXs factory',
		latestRelease: {
			label: 'v0.2.0',
			date: '2026-08-10',
			summary:
				'The current release ships six retrieval and memory skills against a bundled SolrCloud environment.',
			href: 'https://github.com/stevenjmiklovic/solrcompass/releases'
		},
		factoryContribution:
			'Gives the factory a retrieval substrate: local embeddings, incremental indexing, and session memory that persist between builds instead of being rebuilt inside every conversation.',
		stages: ['Specify', 'Generate', 'Verify', 'Ship'],
		tags: ['Bun', 'Apache Solr', 'MCP'],
		links: [
			{
				label: 'View source',
				href: 'https://github.com/stevenjmiklovic/solrcompass',
				kind: 'source'
			},
			{
				label: 'Read capability',
				href: 'https://github.com/stevenjmiklovic/solrcompass/blob/main/POWER.md',
				kind: 'docs'
			}
		],
		featured: true
	}
];

export const portfolio = [...products, ...capabilities];
export const featured = portfolio.filter((item) => item.featured);

// Derived rather than hardcoded so adding an entry cannot silently change the homepage band.
export const latestShipment = portfolio.reduce((latest, item) =>
	item.latestRelease.date > latest.latestRelease.date ? item : latest
);

export function getPortfolioItem(slug: string) {
	return portfolio.find((item) => item.slug === slug);
}
