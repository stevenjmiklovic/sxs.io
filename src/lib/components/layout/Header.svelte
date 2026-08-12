<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let scrolled = false;
	let menuOpen = false;

	const nav = [
		{ label: 'Products', href: '/products' },
		{ label: 'Capabilities', href: '/capabilities' },
		{ label: 'Factory', href: '/factory' },
		{ label: 'Notes', href: '/notes' },
		{ label: 'About', href: '/about' }
	];

	onMount(() => {
		const handler = () => {
			scrolled = window.scrollY > 12;
		};
		handler();
		window.addEventListener('scroll', handler, { passive: true });
		return () => window.removeEventListener('scroll', handler);
	});

	function closeMenu() {
		menuOpen = false;
	}

	function isActive(href: string) {
		return $page.url.pathname === href || $page.url.pathname.startsWith(`${href}/`);
	}
</script>

<header class="site-header" class:scrolled>
	<div class="container site-header__inner">
		<a href="/" class="site-header__logo" aria-label="sXs home" onclick={closeMenu}>
			<span class="logo-mark">s×s</span>
			<span class="logo-name">AI software factory</span>
		</a>

		<nav class="site-header__nav" aria-label="Main navigation">
			{#each nav as { label, href }}
				<a {href} class="nav-link" class:active={isActive(href)}>{label}</a>
			{/each}
		</nav>

		<a href="/work" class:active={isActive('/work')} class="header-cta">
			Work with us <span aria-hidden="true">↗</span>
		</a>

		<button
			class="menu-toggle"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={menuOpen}
			aria-controls="mobile-navigation"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span></span><span></span>
		</button>
	</div>

	{#if menuOpen}
		<nav id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
			{#each nav as { label, href }}
				<a {href} class:active={isActive(href)} class="mobile-nav__link" onclick={closeMenu}>
					{label}
				</a>
			{/each}
			<a
				href="/work"
				class:active={isActive('/work')}
				class="mobile-nav__link mobile-nav__link--accent"
				onclick={closeMenu}
			>
				Work with us ↗
			</a>
		</nav>
	{/if}
</header>

<style>
	.site-header {
		position: fixed;
		inset: 0 0 auto;
		z-index: 100;
		border-bottom: 1px solid transparent;
		background: rgba(245, 247, 244, 0.82);
		transition:
			background var(--transition-normal),
			border-color var(--transition-normal),
			box-shadow var(--transition-normal);
		backdrop-filter: blur(16px);
	}

	.site-header.scrolled {
		border-color: rgba(174, 187, 178, 0.7);
		background: rgba(245, 247, 244, 0.95);
		box-shadow: 0 6px 30px rgba(17, 25, 20, 0.04);
	}

	.site-header__inner {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		min-height: var(--header-height);
		gap: var(--space-xl);
	}

	.site-header__logo {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		width: max-content;
	}

	.logo-mark {
		font-family: var(--font-mono);
		font-size: 0.92rem;
		font-weight: 700;
		letter-spacing: -0.08em;
		color: var(--cobalt);
	}

	.logo-name {
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: -0.01em;
	}

	.site-header__nav {
		display: flex;
		align-items: center;
		gap: 1.65rem;
	}

	.nav-link {
		position: relative;
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--graphite);
		transition: color var(--transition-fast);
	}

	.nav-link::after {
		position: absolute;
		inset: auto 0 -0.4rem;
		height: 2px;
		background: var(--cobalt);
		content: '';
		transform: scaleX(0);
		transform-origin: left;
		transition: transform var(--transition-fast);
	}

	.nav-link:hover,
	.nav-link.active {
		color: var(--ink);
	}

	.nav-link:hover::after,
	.nav-link.active::after {
		transform: scaleX(1);
	}

	.header-cta {
		justify-self: end;
		font-family: var(--font-mono);
		font-size: 0.66rem;
		font-weight: 700;
		color: var(--cobalt);
	}

	.header-cta.active {
		color: var(--ink);
	}

	.menu-toggle,
	.mobile-nav {
		display: none;
	}

	@media (max-width: 820px) {
		.site-header__inner {
			grid-template-columns: 1fr auto;
		}

		.site-header__nav,
		.header-cta {
			display: none;
		}

		.menu-toggle {
			display: grid;
			width: 42px;
			height: 42px;
			place-content: center;
			gap: 6px;
			border: 1px solid var(--line);
			border-radius: 50%;
			background: var(--paper-raised);
			cursor: pointer;
		}

		.menu-toggle span {
			display: block;
			width: 16px;
			height: 1px;
			background: var(--ink);
		}

		.mobile-nav {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
			padding: 0.5rem 1rem 1rem;
			border-top: 1px solid var(--line);
			background: var(--paper);
		}

		.mobile-nav__link {
			padding: 0.9rem 0.5rem;
			border-bottom: 1px solid var(--line);
			font-size: 1rem;
		}

		.mobile-nav__link.active {
			color: var(--cobalt);
		}

		.mobile-nav__link--accent {
			border-bottom: 0;
			color: var(--cobalt);
			font-weight: 600;
		}
	}
</style>
