export interface ServicePackage {
	name: string;
	price: number;
	duration: string;
	tag?: string;
	featured?: boolean;
	features: string[];
}

export const services: ServicePackage[] = [
	{
		name: 'QUICK CONSULT',
		price: 249,
		duration: '15 MIN',
		tag: '[AVAILABLE]',
		features: [
			'Unblock one specific technical decision',
			'Direct answer on architecture or tooling',
			'Written action items you can hand to your team',
			'Curated resources — no homework required'
		]
	},
	{
		name: 'STRATEGY SESSION',
		price: 399,
		duration: '30 MIN',
		tag: '[POPULAR]',
		featured: true,
		features: [
			'Map your AI feature from demo to production',
			'Integration plan for LLMs, agents, and RAG',
			'Risk assessment: where it will break first',
			'Prioritized implementation roadmap',
			'Async follow-up on open questions'
		]
	},
	{
		name: 'COMPREHENSIVE',
		price: 699,
		duration: '60 MIN',
		tag: '[FULL ACCESS]',
		features: [
			'Full architecture audit with written findings',
			'Eval strategy so you can prove it works',
			'Tooling recommendations matched to your team',
			'Enablement plan to make your team self-sufficient',
			'30-day async support while you implement',
			'Code review included'
		]
	}
];
