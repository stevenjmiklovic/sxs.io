export function formatDate(value: string, style: 'long' | 'short' = 'long') {
	const date = new Date(`${value}T12:00:00Z`);
	return new Intl.DateTimeFormat('en-US', {
		month: style === 'long' ? 'long' : 'short',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC'
	}).format(date);
}
