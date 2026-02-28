<script lang="ts">
	import { onMount } from 'svelte';

	let scrolled = false;
	let menuOpen = false;

	onMount(() => {
		const handler = () => {
			scrolled = window.scrollY > 10;
		};
		window.addEventListener('scroll', handler, { passive: true });
		return () => window.removeEventListener('scroll', handler);
	});

	const nav = [
		{ label: 'ABOUT', href: '#about' },
		{ label: 'SERVICES', href: '#services' },
		{ label: 'PROJECTS', href: '#projects' },
		{ label: 'STACK', href: '#stack' },
		{ label: 'CONTACT', href: '#contact' }
	];

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="site-header" class:scrolled>
	<div class="container site-header__inner">
		<a href="/" class="site-header__logo" aria-label="SXS home">
			<span class="logo-bracket">[</span>S<span class="logo-cross">×</span>S<span class="logo-bracket">]</span>
		</a>

		<nav class="site-header__nav" aria-label="Main navigation">
			{#each nav as { label, href }}
				<a {href} class="nav-link">{label}</a>
			{/each}
		</nav>

		<button
			class="menu-toggle"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={menuOpen}
			on:click={() => (menuOpen = !menuOpen)}
		>
			<span class="menu-toggle__icon">{menuOpen ? '✕' : '☰'}</span>
		</button>
	</div>

	<div class="site-header__border" aria-hidden="true">{'━'.repeat(300)}</div>

	{#if menuOpen}
		<nav class="mobile-nav" aria-label="Mobile navigation">
			{#each nav as { label, href }}
				<a {href} class="mobile-nav__link" on:click={closeMenu}>{label}</a>
			{/each}
		</nav>
	{/if}
</header>

<style>
	.site-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: var(--bg-primary);
		transition: background var(--transition-normal);
	}
	.site-header.scrolled {
		background: rgba(26, 15, 10, 0.97);
		backdrop-filter: blur(4px);
	}
	.site-header__inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: var(--space-md);
		padding-bottom: var(--space-sm);
	}
	.site-header__logo {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--text-accent);
		letter-spacing: 0.15em;
		line-height: 1;
	}
	.logo-bracket {
		color: var(--text-muted);
	}
	.logo-cross {
		color: var(--text-primary);
		font-size: 0.9em;
	}
	.site-header__nav {
		display: flex;
		gap: var(--space-lg);
	}
	.nav-link {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		color: var(--text-dim);
		transition: color var(--transition-fast);
	}
	.nav-link:hover {
		color: var(--text-highlight);
	}
	.site-header__border {
		color: var(--border-dim);
		font-size: 0.55rem;
		overflow: hidden;
		height: 0.7em;
		line-height: 1;
		padding: 0 var(--space-lg);
	}

	/* Mobile menu toggle — hidden on desktop */
	.menu-toggle {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: var(--space-xs);
	}
	.menu-toggle__icon {
		color: var(--text-dim);
		font-size: 1rem;
		font-family: var(--font-mono);
	}

	/* Mobile nav overlay */
	.mobile-nav {
		display: flex;
		flex-direction: column;
		padding: var(--space-md) var(--space-lg);
		border-top: 1px solid var(--border-dim);
		background: var(--bg-secondary);
	}
	.mobile-nav__link {
		padding: var(--space-sm) 0;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		color: var(--text-dim);
		border-bottom: 1px solid var(--border-dim);
	}
	.mobile-nav__link:last-child {
		border-bottom: none;
	}
	.mobile-nav__link:hover {
		color: var(--text-highlight);
	}

	@media (max-width: 640px) {
		.site-header__nav {
			display: none;
		}
		.menu-toggle {
			display: block;
		}
	}
</style>
