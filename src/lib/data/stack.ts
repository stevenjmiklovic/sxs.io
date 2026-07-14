export interface StackCategory {
	label: string;
	description: string;
	items: string[];
}

export const stack: StackCategory[] = [
	{
		label: 'AI SYSTEMS',
		description: 'Models are components, not architecture.',
		items: ['OpenAI Codex', 'Claude', 'Kiro', 'MCP', 'Ollama', 'RAG + evals']
	},
	{
		label: 'LANGUAGES',
		description: 'Chosen for the shape of the system.',
		items: ['TypeScript', 'Rust', 'Python', 'Go']
	},
	{
		label: 'INTERFACES',
		description: 'Web, desktop, terminal, and data-rich UI.',
		items: ['SvelteKit', 'Vite', 'Tauri', 'Ratatui', 'D3.js']
	},
	{
		label: 'PLATFORM',
		description: 'Deployment that the operating team can own.',
		items: ['AWS + Bedrock', 'Cloudflare', 'Vercel', 'Docker', 'GitHub Actions']
	},
	{
		label: 'DATA',
		description: 'Structured for traceability and change.',
		items: ['PostgreSQL', 'Neo4j', 'Redis', 'Protobuf', 'Vector search']
	},
	{
		label: 'PRACTICE',
		description: 'The controls that keep a demo operable.',
		items: ['Architecture', 'ADRs', 'Observability', 'Security', 'CI/CD']
	}
];
