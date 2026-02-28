export interface StackCategory {
	label: string;
	items: string[];
}

export const stack: StackCategory[] = [
	{ label: 'LANGUAGES', items: ['TypeScript', 'Rust', 'Python', 'Go'] },
	{ label: 'RUNTIMES', items: ['Node.js', 'Bun', 'Deno'] },
	{ label: 'FRONTEND', items: ['SvelteKit', 'Vite', 'Web Components'] },
	{ label: 'BACKEND', items: ['Hono', 'FastAPI', 'tRPC', 'gRPC'] },
	{ label: 'DATA', items: ['PostgreSQL', 'SQLite', 'Redis', 'ClickHouse'] },
	{
		label: 'INFRA / CLOUD',
		items: ['Fly.io', 'Cloudflare', 'AWS', 'Docker', 'Terraform']
	},
	{
		label: 'AI / ML',
		items: ['Anthropic Claude', 'OpenAI', 'Ollama', 'LangChain', 'MCP']
	},
	{
		label: 'TOOLING',
		items: ['Claude Code', 'Neovim', 'Git', 'GitHub Actions', 'Nix']
	}
];
