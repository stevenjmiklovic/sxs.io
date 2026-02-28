export interface Project {
	name: string;
	description: string;
	url?: string;
	repo?: string;
	tags: string[];
	status: 'ACTIVE' | 'ARCHIVED' | 'ONGOING';
}

export const projects: Project[] = [
	{
		name: 'DISCORDCLAW',
		description:
			'An AI crustacean adapted to the Discord biome. Autonomous agent that navigates server ecology with natural grip.',
		repo: 'https://github.com/kryptik-research/discordclaw',
		tags: ['AI', 'Discord', 'Agent'],
		status: 'ACTIVE'
	},
	{
		name: 'CLAUDE-SKILLS',
		description:
			'Skill marketplace for Claude Code. Composable, shareable capabilities that extend the agent beyond its defaults.',
		repo: 'https://github.com/stevenjmiklovic/claude-skills',
		tags: ['Claude', 'AI', 'MCP'],
		status: 'ACTIVE'
	},
	{
		name: 'KIRO-POWERS',
		description:
			'Power marketplace for Kiro. Composable, shareable capabilities that extend the agent beyond its defaults.',
		repo: 'https://github.com/stevenjmiklovic/kiro-powers',
		tags: ['Kiro', 'AI', 'IDE'],
		status: 'ACTIVE'
	},
	{
		name: 'KORAFEX',
		description:
			'Experimental research substrate from the kryptik lab. Probes the lattice where symbolic structure dissolves into learned behavior.',
		repo: 'https://github.com/kryptik-research/korafex',
		tags: ['Research', 'kryptik'],
		status: 'ONGOING'
	},
	{
		name: 'KRYPTIK.IT',
		description:
			'Web presence for the kryptik-research collective. A signal in the noise — minimal surface, deep interior.',
		repo: 'https://github.com/kryptik-research/kryptik.it',
		tags: ['SvelteKit', 'kryptik'],
		status: 'ACTIVE'
	},
	{
		name: 'SXS.IO',
		description:
			'This site. SvelteKit static site with TVA-inspired design system. No CSS frameworks — just structure and intent.',
		repo: 'https://github.com/stevenjmiklovic/sxs.io',
		tags: ['SvelteKit', 'TypeScript', 'Vite'],
		status: 'ACTIVE'
	},
	{
		name: 'VIBES',
		description:
			'A living document of aesthetic signal. Collected influences, sonic anchors, and raw creative material that shapes everything else.',
		repo: 'https://github.com/stevenjmiklovic/Vibes',
		tags: ['Personal', 'Curation'],
		status: 'ONGOING'
	}
];
