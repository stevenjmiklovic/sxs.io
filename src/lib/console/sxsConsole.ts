// Must only be imported inside onMount() — uses window.

type CommandFn = () => void;

const ORANGE = 'color: #ff8c00; font-family: "JetBrains Mono", monospace; line-height: 1.5;';
const DIM = 'color: #a0522d; font-family: "JetBrains Mono", monospace; line-height: 1.5;';
const BRIGHT =
	'color: #ffb347; font-family: "JetBrains Mono", monospace; font-weight: bold; line-height: 1.5;';
const BOX = 'color: #8b4513; font-family: "JetBrains Mono", monospace; line-height: 1.4;';

const WELCOME = `
%c
┌──────────────────────────────────────────────────────────────────┐
│  S × S  —  SYMBOLIC × SUBSYMBOLIC                                │
│  Type help() for a list of available commands.                   │
│  Build what you can specify. Learn what you can't.               │
└──────────────────────────────────────────────────────────────────┘
`;

const responses: Record<string, [string, string]> = {
	help: [
		`
%c
┌──────────────────────────────────────────────────────────────────┐
│  AVAILABLE COMMANDS                                              │
├──────────────────────────────────────────────────────────────────┤
│  help()       — Show this message                                │
│  about()      — About SXS                                        │
│  services()   — Consulting packages & pricing                    │
│  projects()   — Featured work                                    │
│  stack()      — Technology stack                                 │
│  skills()     — Areas of expertise                               │
│  contact()    — Get in touch                                     │
│  github()     — GitHub profile                                   │
│  clear()      — Clear the console                                │
│  cmd("name")  — Execute any command by name                      │
└──────────────────────────────────────────────────────────────────┘
`,
		ORANGE
	],

	about: [
		`
%c
▸ ABOUT SXS  —  SYMBOLIC × SUBSYMBOLIC
─────────────────────────────────────────────────────────────────────
  SXS operates at the seam between symbolic and subsymbolic systems.

  Symbolic  — logic, rules, schemas, explicit structure.
              What you can specify, verify, and reason about.

  Subsymbolic — neural networks, embeddings, emergent behavior.
                What you can train, but not fully explain.

  The thesis: neither wins alone. Most AI failures aren't model
  failures — they're integration failures. Teams over-index on one
  side: pure prompting with no structure, or rigid rule systems
  that can't generalize.

  SXS is the consulting practice for the space between.

  SYMBOLIC  →  Architecture design, MCP tool contracts,
                event schemas, IaC, system modeling.

  SUBSYMBOLIC →  LLM integration, RAG pipelines, agent
                  orchestration, evals, fine-tuning.

  Philosophy:
  "Build what you can specify. Learn what you can't."

  Type services() to see what I offer.
`,
		ORANGE
	],

	services: [
		`
%c
▸ CONSULTING SERVICES
─────────────────────────────────────────────────────────────────────
  QUICK CONSULT       $149  /  15 min
    Architecture review, targeted guidance, written action items.

  STRATEGY SESSION    $299  /  30 min   ★ POPULAR
    Deep-dive system design, AI integration planning,
    infrastructure assessment, implementation roadmap + follow-up.

  COMPREHENSIVE       $499  /  60 min
    Full system audit, multi-service coordination,
    30-day async support, code review included.

  Book at: https://sxs.io/#contact
`,
		BRIGHT
	],

	projects: [
		`
%c
▸ FEATURED PROJECTS
─────────────────────────────────────────────────────────────────────
  [ACTIVE]    KIRO-TUI
              TVA-themed terminal UI wrapper for Kiro CLI.
              Rust + ratatui. CRT aesthetics, dual terminology mode.
              → https://github.com/sxs/kiro-tui

  [ACTIVE]    AGENT-MESH
              Multi-agent orchestration with observable state.
              TypeScript + Anthropic MCP.

  [ONGOING]   TEMPORAL-SYNC
              Distributed event pipeline, conflict-free replication.
              Rust + Kafka + PostgreSQL.

  [ACTIVE]    SXS.IO (you are here)
              SvelteKit + Vite. No CSS frameworks. TVA aesthetic.
              → https://github.com/sxs/sxs-io

  Type stack() to see the technology behind the work.
`,
		ORANGE
	],

	stack: [
		`
%c
▸ TECHNOLOGY STACK
─────────────────────────────────────────────────────────────────────
  LANGUAGES    TypeScript  Rust  Python  Go
  RUNTIMES     Node.js  Bun  Deno
  FRONTEND     SvelteKit  Vite  Web Components
  BACKEND      Hono  FastAPI  tRPC  gRPC
  DATA         PostgreSQL  SQLite  Redis  ClickHouse
  INFRA        Fly.io  Cloudflare  AWS  Docker  Terraform
  AI / ML      Claude  OpenAI  Ollama  MCP
  TOOLING      Claude Code  Neovim  GitHub Actions  Nix
`,
		ORANGE
	],

	skills: [
		`
%c
▸ EXPERTISE AREAS
─────────────────────────────────────────────────────────────────────
  DISTRIBUTED SYSTEMS
    Event-driven design, CQRS, CRDTs, service mesh,
    observability pipelines, consensus protocols.

  AI INTEGRATION
    LLM tooling, RAG pipelines, MCP server development,
    agent orchestration, fine-tuning workflows, evals.

  INFRASTRUCTURE
    IaC (Terraform/Pulumi), containerization, GitOps,
    cost optimization, security hardening, SRE practices.

  DEVELOPER EXPERIENCE
    Internal platforms, CLI tooling, documentation systems,
    onboarding acceleration, monorepo architecture.
`,
		ORANGE
	],

	contact: [
		`
%c
▸ CONTACT
─────────────────────────────────────────────────────────────────────
  Site:      https://sxs.io
  GitHub:    https://github.com/sxs
  Contact:   https://sxs.io/#contact

  For consulting inquiries, use the contact form on the site.
  Response time: within 1 business day.

  Remote-first. Global clients. All time zones supported.
`,
		ORANGE
	],

	github: [
		`
%c
▸ GITHUB
─────────────────────────────────────────────────────────────────────
  Profile: https://github.com/sxs

  Focus areas:
  • Systems tools & infrastructure automation
  • AI agent frameworks & MCP integrations
  • Open-source developer utilities
  • TUI applications (Rust/ratatui)

  Type projects() to see featured work.
`,
		ORANGE
	]
};

export function initSXSConsole(): void {
	console.log(WELCOME, BOX);
	console.log('%c► Try: help()  about()  services()  projects()', DIM);
	console.log('%c► Or use cmd("command-name") for any command.', DIM);

	const commands: Record<string, CommandFn> = {};

	for (const [name, [text, style]] of Object.entries(responses)) {
		commands[name] = () => console.log(text, style);
	}

	commands['clear'] = () => {
		console.clear();
		console.log(WELCOME, BOX);
	};

	const w = window as unknown as Record<string, unknown>;

	for (const [name, fn] of Object.entries(commands)) {
		w[name] = fn;
	}

	w['cmd'] = (name: string) => {
		const fn = commands[name.toLowerCase()];
		if (fn) {
			fn();
		} else {
			console.log(
				`%c\nUnknown command: "${name}"\nType help() to see available commands.\n`,
				DIM
			);
		}
	};

	w['sxsConsole'] = commands;
}
