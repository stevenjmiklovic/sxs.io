
export function reveal(node: HTMLElement): { destroy(): void } {
	node.style.opacity = '0';
	node.style.transform = 'translateY(16px)';
	node.style.transition = 'opacity 500ms ease, transform 500ms ease';

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.style.opacity = '1';
				node.style.transform = 'translateY(0)';
				observer.disconnect();
			}
		},
		{ threshold: 0.1 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
