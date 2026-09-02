import type { FactoryStage } from './portfolio';

export interface FactoryStageDetail {
	name: FactoryStage;
	prompt: string;
	description: string;
	output: string;
	humanRole: string;
}

export const factoryStages: FactoryStageDetail[] = [
	{
		name: 'Specify',
		prompt: 'What must be true?',
		description:
			'Turn product intent into constraints, interfaces, acceptance criteria, and consequential decisions.',
		output: 'Specifications · ADRs · schemas · tests',
		humanRole: 'Set intent and approve irreversible choices.'
	},
	{
		name: 'Generate',
		prompt: 'Where does synthesis help?',
		description:
			'Use models and specialized agents for exploration, implementation, transformation, and documentation.',
		output: 'Working changes · options · documentation',
		humanRole: 'Bound the task and select the useful direction.'
	},
	{
		name: 'Verify',
		prompt: 'What evidence decides?',
		description:
			'Build, test, inspect, and review generated work against the intended product behavior.',
		output: 'Builds · tests · evals · reviews',
		humanRole: 'Own quality, risk, and release judgment.'
	},
	{
		name: 'Ship',
		prompt: 'Can someone use and own it?',
		description:
			'Release operable software with documentation, deployment, and a clear maintenance path.',
		output: 'Products · releases · runbooks',
		humanRole: 'Accept the release and remain accountable for it.'
	},
	{
		name: 'Compound',
		prompt: 'What should the next build inherit?',
		description:
			'Convert repeated knowledge into capabilities, templates, components, and decision patterns.',
		output: 'Skills · harnesses · reusable systems',
		humanRole: 'Choose what deserves to become shared infrastructure.'
	}
];

export const factoryEvidence = [
	{
		type: 'Release',
		title: 'Kanon v0.5.0',
		description:
			'A versioned release of the factory’s canonical knowledge-artifact compiler and catalog.',
		href: 'https://github.com/thinkingsage/context-bazaar/releases/tag/v0.5.0'
	},
	{
		type: 'Decision record',
		title: 'Kanon architecture ledger',
		description:
			'Public ADRs record decisions about adapters, validation, security review, distribution, and harness support.',
		href: 'https://github.com/thinkingsage/context-bazaar/tree/main/kanon/docs/adr'
	},
	{
		type: 'Verification',
		title: 'PerfectStar 2K test surface',
		description:
			'The product repository documents unit coverage for buffer behavior, undo, wrapping, Markdown, and RTF export.',
		href: 'https://github.com/stevenjmiklovic/PerfectStar-2k#build'
	},
	{
		type: 'Operating artifact',
		title: 'ADR Power specification',
		description:
			'The capability makes its workflow, invariants, decision states, and edge cases inspectable.',
		href: 'https://github.com/thinkingsage/adr-power/blob/main/POWER.md'
	},
	{
		type: 'Boundary',
		title: 'Archipelago status boundary',
		description:
			'The project states which subsystems run today and which remain unfinished, so its documentation cannot be read as a shipping claim.',
		href: 'https://eventide.cc/archipelago/'
	},
	{
		type: 'Verification',
		title: 'Datalinks corpus invariants',
		description:
			'Six invariants are stated once and enforced by a validator, so a generated wiki cannot cite its own reasoning as a source.',
		href: 'https://github.com/thinkingsage/Datalinks/blob/main/scripts/validate.py'
	}
];

export const factoryLedger = [
	{
		build: 'ADR Power',
		shipped: 'Portable ADR creation and maintenance capability',
		capability: 'Canonical ADR knowledge artifact',
		reusedBy: 'Kanon / Context Bazaar',
		evidence: 'https://github.com/thinkingsage/context-bazaar/tree/main/kanon/knowledge/adr'
	},
	{
		build: 'Byron Powers',
		shipped: 'Literary and publishing workflow library',
		capability: 'Eight domain capability families',
		reusedBy: 'Kanon Byron Powers collection',
		evidence:
			'https://github.com/thinkingsage/context-bazaar/tree/main/kanon/knowledge/byron-powers'
	}
];
