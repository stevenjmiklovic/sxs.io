export interface Project {
	name: string;
	description: string;
	role: string;
	year: string;
	url?: string;
	repo: string;
	tags: string[];
	status: 'BUILDING' | 'LIVE' | 'CONTRIBUTING' | 'MAINTAINED';
	featured?: boolean;
}

export const projects: Project[] = [
	{
		name: 'PERFECTSTAR 2K',
		description:
			'A modern, daily-driver terminal writing environment inspired by WordStar and WordPerfect. Home-row commands, persistent sessions, Reveal Codes, spellcheck, and manuscript-ready RTF export—built in Rust.',
		role: 'Original product',
		year: '2026',
		repo: 'https://github.com/stevenjmiklovic/PerfectStar-2k',
		tags: ['Rust', 'Ratatui', 'Writing tools'],
		status: 'BUILDING',
		featured: true
	},
	{
		name: 'ADR POWER',
		description:
			'A portable agent capability for creating, reviewing, cross-referencing, and updating architecture decision records inside a codebase.',
		role: 'Thinking Sage · Agent capability',
		year: '2026',
		repo: 'https://github.com/thinkingsage/adr-power',
		tags: ['Architecture', 'ADRs', 'Agent workflows'],
		status: 'BUILDING'
	},
	{
		name: 'CONTEXT BAZAAR · KANON',
		description:
			'A canonical knowledge-artifact system for AI coding assistants. Author a skill, rule, workflow, or agent once; Kanon validates and compiles it for Codex, Claude Code, Kiro, Copilot, Cursor, Windsurf, Cline, and Q Developer.',
		role: 'Thinking Sage · Platform',
		year: '2026',
		repo: 'https://github.com/thinkingsage/context-bazaar',
		tags: ['TypeScript', 'Bun', 'Multi-harness agents'],
		status: 'BUILDING'
	},
	{
		name: 'WORLD MONITOR · SXS',
		description:
			'An SXS product variant of the real-time global intelligence dashboard: AI-synthesized briefs, 45 map layers, five focused views, and native desktop builds.',
		role: 'Product variant / maintained fork',
		year: '2026',
		url: 'https://sxs.exarcos.net',
		repo: 'https://github.com/stevenjmiklovic/worldmonitor',
		tags: ['TypeScript', 'Tauri', 'Geospatial AI'],
		status: 'LIVE'
	},
	{
		name: 'RHIZA',
		description:
			'An AI-assisted etymology explorer that traces the Greek roots of English words and turns their relationships into interactive, clustered graphs.',
		role: 'Thinking Sage · Research product',
		year: '2026',
		repo: 'https://github.com/thinkingsage/rhiza',
		tags: ['SvelteKit', 'FastAPI', 'Neo4j'],
		status: 'BUILDING'
	},
	{
		name: 'BYRON POWERS',
		description:
			'Eight literary and publishing workflows for novelists, technical authors, agents, and proofreaders—distributed as reusable AI capabilities.',
		role: 'Thinking Sage · Creative tooling',
		year: '2026',
		repo: 'https://github.com/thinkingsage/byron-powers',
		tags: ['Writing', 'Publishing', 'Agent workflows'],
		status: 'MAINTAINED'
	}
];
