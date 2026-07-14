import { projects } from '$lib/data/projects';
import { services } from '$lib/data/services';

// Imported only in the browser from +layout.svelte.
type CommandFn = () => void;

const BLUE = 'color: #175cd3; font-family: "JetBrains Mono", monospace; line-height: 1.55;';
const GREEN = 'color: #177654; font-family: "JetBrains Mono", monospace; line-height: 1.55;';
const DIM = 'color: #617068; font-family: "JetBrains Mono", monospace; line-height: 1.55;';

const projectList = projects
	.map(
		(project) => `  ${project.status.padEnd(13)} ${project.name}\n                ${project.role}`
	)
	.join('\n\n');

const serviceList = services
	.map(
		(service) =>
			`  ${service.name.padEnd(18)} $${service.price} / ${service.duration.toLowerCase()}`
	)
	.join('\n');

const responses: Record<string, [string, string]> = {
	help: [
		`\nSXS CONSOLE\n────────────────────────────────────────\nhelp()      commands\nabout()     working model\nservices()  engagement options\nprojects()  current work\nstack()     field kit\ncontact()   start a conversation\nclear()     clear console\n`,
		BLUE
	],
	about: [
		`\nSYMBOLIC × SUBSYMBOLIC\n────────────────────────────────────────\nStructure for what must work. Judgment for what\ncan't be scripted. SXS designs the contracts,\nevals, and integration patterns that keep AI\nsystems understandable after the demo.\n\nBuild what you can specify. Learn what you can't.\n`,
		GREEN
	],
	services: [
		`\nENGAGEMENTS\n────────────────────────────────────────\n${serviceList}\n\nEvery session includes a short written brief.\nStart at https://sxs.io/#contact\n`,
		BLUE
	],
	projects: [
		`\nCURRENT WORK · 2026\n────────────────────────────────────────\n${projectList}\n\nPersonal:      https://github.com/stevenjmiklovic\nThinking Sage: https://github.com/thinkingsage\n`,
		GREEN
	],
	stack: [
		`\nFIELD KIT\n────────────────────────────────────────\nAI       Codex · Claude · Kiro · MCP · Ollama\nCODE     TypeScript · Rust · Python · Go\nUI       SvelteKit · Tauri · Ratatui · D3\nDATA     PostgreSQL · Neo4j · Redis · Protobuf\nSYSTEMS  AWS · Cloudflare · Vercel · Docker\n`,
		BLUE
	],
	contact: [
		`\nCONTACT\n────────────────────────────────────────\ngithub@sxs.io\nhttps://sxs.io/#contact\n\nBring the system, the constraint, and the decision.\n`,
		GREEN
	]
};

export function initSXSConsole(): void {
	console.log('%c\nS × S  /  SYSTEMS STUDIO\nType help() to inspect the interface.\n', BLUE);
	console.log('%cStructure for what must work. Judgment for everything else.', DIM);

	const commands: Record<string, CommandFn> = {};

	for (const [name, [content, style]] of Object.entries(responses)) {
		commands[name] = () => console.log(content, style);
	}

	commands.clear = () => console.clear();

	const target = window as unknown as Record<string, unknown>;
	for (const [name, command] of Object.entries(commands)) target[name] = command;

	target.cmd = (name: string) => {
		const command = commands[name.toLowerCase()];
		if (command) command();
		else console.log(`%cUnknown command: ${name}. Try help().`, DIM);
	};

	target.sxsConsole = commands;
}
