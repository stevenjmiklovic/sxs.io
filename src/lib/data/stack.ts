export interface StackCategory {
	label: string;
	items: string[];
}

export const stack: StackCategory[] = [
	{ label: 'LANGUAGES', items: ['TypeScript', 'Rust', 'Python', 'Go'] },
	{ label: 'RUNTIMES', items: ['Node.js', 'Bun', 'Deno'] },
	{ label: 'FRONTEND', items: ['SvelteKit', 'Vite', 'Web Components'] },
	{ label: 'BACKEND', items: ['Hono', 'FastAPI', 'tRPC', 'gRPC'] },
	{ label: 'DATA', items: ['PostgreSQL', 'Solr', 'Redis', 'Neo4j'] },
	{
		label: 'INFRA / CLOUD',
		items: ['Netbird.io', 'Cloudflare', 'AWS', 'GCP', 'OpenTofu']
	},
	{
		label: 'AI / ML',
		items: ['Anthropic Claude', 'Bedrock', 'Korafex', 'Agents', 'MCP']
	},
	{
		label: 'TOOLING',
		items: ['Claude Code', 'Kiro', 'Discord', 'GitHub Actions']
	}
];
