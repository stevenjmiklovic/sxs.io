<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="site-footer__top-border" aria-hidden="true">{'━'.repeat(300)}</div>
	<div class="container site-footer__inner">
		<span class="site-footer__logo"
			><span class="bracket">[</span>S<span class="cross">×</span>S<span class="bracket">]</span></span
		>
		<span class="site-footer__copy">© {year}</span>
		<span class="site-footer__tagline">SYMBOLIC × SUBSYMBOLIC</span>
		<span class="site-footer__status">
			<span class="status-dot" aria-hidden="true"></span>
			OPEN TO WORK
		</span>
		<span class="cursor" aria-hidden="true">█</span>
	</div>
	<div class="site-footer__bottom-border" aria-hidden="true">{'━'.repeat(300)}</div>
</footer>

<style>
	.site-footer {
		margin-top: var(--space-3xl);
	}
	.site-footer__top-border,
	.site-footer__bottom-border {
		color: var(--border-dim);
		font-size: 0.55rem;
		overflow: hidden;
		height: 0.7em;
		line-height: 1;
		padding: 0 var(--space-lg);
	}
	.site-footer__inner {
		display: flex;
		align-items: center;
		gap: var(--space-lg);
		padding-top: var(--space-md);
		padding-bottom: var(--space-md);
		flex-wrap: wrap;
		color: var(--text-muted);
		font-size: 0.7rem;
		letter-spacing: 0.1em;
	}
	.site-footer__logo {
		font-weight: 700;
		font-size: 0.85rem;
		color: var(--text-dim);
	}
	.bracket {
		color: var(--text-muted);
	}
	.cross {
		color: var(--text-primary);
	}
	.site-footer__copy,
	.site-footer__tagline {
		color: var(--text-muted);
	}
	.site-footer__status {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		color: var(--text-dim);
	}
	.status-dot {
		display: inline-block;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--text-primary);
		animation: pulse 2s infinite;
	}
	.cursor {
		color: var(--text-primary);
		animation: blink 1s step-end infinite;
		font-size: 0.85rem;
	}
</style>
