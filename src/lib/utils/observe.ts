export function reveal(node: HTMLElement): { destroy(): void } {
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reducedMotion || !('IntersectionObserver' in window)) {
		return { destroy() {} };
	}

	node.style.opacity = '0';
	node.style.transform = 'translateY(14px)';
	node.style.transition = 'opacity 560ms ease, transform 560ms ease';

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.style.opacity = '1';
				node.style.transform = 'translateY(0)';
				observer.disconnect();
			}
		},
		{ threshold: 0.08 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
