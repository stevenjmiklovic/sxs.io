import { capabilities, products } from '$lib/data/portfolio';

// Imported only in the browser from +layout.svelte.
type CommandFn = () => void;

const BLUE = 'color: #175cd3; font-family: "JetBrains Mono", monospace; line-height: 1.55;';
const GREEN = 'color: #177654; font-family: "JetBrains Mono", monospace; line-height: 1.55;';
const DIM = 'color: #617068; font-family: "JetBrains Mono", monospace; line-height: 1.55;';

const formatItems = (items: typeof products) =>
	items
		.map((item) => `  ${item.status.padEnd(11)} ${item.name}\n              ${item.origin}`)
		.join('\n\n');

const responses: Record<string, [string, string]> = {
	help: [
		`\nsXs FACTORY CONSOLE\n────────────────────────────────────────\nhelp()          commands\nabout()         factory position\nfactory()       production loop\nproducts()      product output\ncapabilities()  reusable infrastructure\nnotes()         factory publication\nwork()          working modes\ncontact()       direct contact\nclear()         clear console\n`,
		BLUE
	],
	about: [
		`\nSYMBOLIC × SUBSYMBOLIC\n────────────────────────────────────────\nsXs is an AI software factory. We build products,\nreusable capabilities, and selected client software.\n\nThe software ships. The factory compounds.\n`,
		GREEN
	],
	factory: [
		`\nPRODUCTION RAIL\n────────────────────────────────────────\n01  SPECIFY   what must be true\n02  GENERATE  where synthesis helps\n03  VERIFY    what evidence decides\n04  SHIP      what people can use and own\n05  COMPOUND  what the next build inherits\n\nhttps://sxs.io/factory\n`,
		BLUE
	],
	products: [
		`\nPRODUCTS\n────────────────────────────────────────\n${formatItems(products)}\n\nhttps://sxs.io/products\n`,
		GREEN
	],
	capabilities: [
		`\nFACTORY CAPABILITIES\n────────────────────────────────────────\n${formatItems(capabilities)}\n\nhttps://sxs.io/capabilities\n`,
		BLUE
	],
	notes: [
		`\nFACTORY NOTES\n────────────────────────────────────────\nRelease-driven notes on builds, capabilities,\nboundaries, verification, and confirmed reuse.\n\nhttps://sxs.io/notes\n`,
		GREEN
	],
	work: [
		`\nWORK WITH THE FACTORY\n────────────────────────────────────────\n01  Commission a Build\n02  Adapt a Capability\n03  Factory Partnership\n04  Decision Review\n\nhttps://sxs.io/work\n`,
		BLUE
	],
	contact: [
		`\nDIRECT CONTACT\n────────────────────────────────────────\ngithub@sxs.io\nhttps://sxs.io/work\n\nStart with the product and the constraint.\n`,
		GREEN
	]
};

export function initSXSConsole(): void {
	console.log('%c\ns × s  /  AI SOFTWARE FACTORY\nType help() to inspect the factory.\n', BLUE);
	console.log('%cSoftware that ships. A factory that compounds.', DIM);

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
