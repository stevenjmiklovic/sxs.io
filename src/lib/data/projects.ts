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
		name: 'KIRO-TUI',
		description:
			'TVA-themed terminal UI wrapper for Kiro CLI. Retro-futuristic interface with dual terminology system and CRT aesthetics.',
		repo: 'https://github.com/sxs/kiro-tui',
		tags: ['Rust', 'ratatui', 'TUI'],
		status: 'ACTIVE'
	},
	{
		name: 'SXS.IO',
		description:
			'This site. SvelteKit + Vite static site with TVA-inspired design system. No CSS frameworks.',
		repo: 'https://github.com/sxs/sxs-io',
		tags: ['SvelteKit', 'TypeScript', 'Vite'],
		status: 'ACTIVE'
	},
	{
		name: 'TEMPORAL-SYNC',
		description:
			'Distributed event-driven pipeline for real-time data ingestion with conflict-free replication.',
		repo: 'https://github.com/sxs/temporal-sync',
		tags: ['Rust', 'Kafka', 'PostgreSQL'],
		status: 'ONGOING'
	},
	{
		name: 'AGENT-MESH',
		description:
			'Multi-agent orchestration framework. Coordinates AI agents across distributed workloads with observable state.',
		repo: 'https://github.com/sxs/agent-mesh',
		tags: ['TypeScript', 'Anthropic', 'MCP'],
		status: 'ACTIVE'
	},
	{
		name: 'INFRA-GRAPH',
		description:
			'Infrastructure-as-code visualization tool. Parses Terraform/Pulumi state and renders interactive dependency graphs.',
		tags: ['Go', 'Terraform', 'D3.js'],
		status: 'ARCHIVED'
	},
	{
		name: 'DEV-PORTAL',
		description:
			'Internal developer platform with self-service provisioning, runbooks, and automated environment setup.',
		tags: ['SvelteKit', 'tRPC', 'Docker'],
		status: 'ONGOING'
	}
];
