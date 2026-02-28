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
			'Architecture review',
			'Targeted technical guidance',
			'Written action items',
			'Resource recommendations'
		]
	},
	{
		name: 'STRATEGY SESSION',
		price: 399,
		duration: '30 MIN',
		tag: '[POPULAR]',
		featured: true,
		features: [
			'Deep-dive system design',
			'AI/ML integration planning',
			'Infrastructure assessment',
			'Implementation roadmap',
			'Follow-up support'
		]
	},
	{
		name: 'COMPREHENSIVE',
		price: 699,
		duration: '60 MIN',
		tag: '[FULL ACCESS]',
		features: [
			'Full system architecture audit',
			'Multi-service coordination',
			'Custom tooling recommendations',
			'Team enablement guidance',
			'30-day async support',
			'Code review included'
		]
	}
];
