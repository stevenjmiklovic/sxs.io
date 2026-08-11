<script lang="ts">
	const year = new Date().getFullYear();

	const links = [
		{ label: 'Personal', href: 'https://github.com/stevenjmiklovic' },
		{ label: 'Thinking Sage', href: 'https://github.com/thinkingsage' },
		{ label: 'Kryptik Research', href: 'https://github.com/kryptik-research' }
	];
</script>

<footer class="site-footer">
	<div class="container site-footer__inner">
		<div class="footer-brand">
			<span class="footer-mark">s×s</span>
			<div>
				<p>Software that ships. A factory that compounds.</p>
				<span>symbolic × subsymbolic</span>
			</div>
		</div>

		<div class="footer-actions">
			<a href="/work">Work with the factory →</a>
			<a href="mailto:github@sxs.io">github@sxs.io</a>
			<a href="/terms">Terms of Service</a>
			<a href="/privacy">Privacy Policy</a>
		</div>

		<div class="footer-ledger">
			<p>Factory network</p>
			<div>
				{#each links as link}
					<a href={link.href} target="_blank" rel="noopener noreferrer">
						{link.label} <span aria-hidden="true">↗</span>
					</a>
				{/each}
			</div>
		</div>

		<div class="footer-meta">
			<span>© {year} sXs</span>
			<span class="availability"
				><i aria-hidden="true"></i> Building in public · remote / global</span
			>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		padding: clamp(3rem, 7vw, 5rem) 1.5rem 2.5rem;
		background: var(--ink);
		color: var(--paper);
	}

	.site-footer__inner {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 3rem;
		padding-inline: var(--space-lg);
	}

	.footer-brand {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
	}

	.footer-mark {
		font-family: var(--font-mono);
		font-size: 0.88rem;
		font-weight: 700;
		color: var(--signal);
	}

	.footer-brand p {
		max-width: 30rem;
		color: #d8e0db;
		font-size: 1rem;
	}

	.footer-brand div > span {
		display: block;
		margin-top: 0.3rem;
		font-family: var(--font-mono);
		font-size: 0.56rem;
		text-transform: uppercase;
		color: #82938a;
	}

	.footer-actions {
		display: grid;
		gap: 0.65rem;
		justify-items: end;
		font-family: var(--font-mono);
		font-size: 0.66rem;
		font-weight: 700;
		color: var(--signal);
	}

	.footer-ledger {
		grid-column: 1 / -1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: 1.2rem 0;
		border-top: 1px solid #34423a;
		border-bottom: 1px solid #34423a;
	}

	.footer-ledger p {
		font-family: var(--font-mono);
		font-size: 0.58rem;
		text-transform: uppercase;
		color: #82938a;
	}

	.footer-ledger div {
		display: flex;
		flex-wrap: wrap;
		gap: 1.4rem;
		font-size: 0.76rem;
		color: #dfe6e1;
	}

	.footer-ledger a:hover,
	.footer-actions a:hover {
		color: white;
	}

	.footer-meta {
		grid-column: 1 / -1;
		display: flex;
		justify-content: space-between;
		font-family: var(--font-mono);
		font-size: 0.6rem;
		color: #82938a;
	}

	.availability {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.availability i {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--signal);
	}

	@media (max-width: 700px) {
		.site-footer {
			padding-inline: 0;
		}

		.site-footer__inner {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.footer-actions {
			justify-items: start;
		}

		.footer-ledger,
		.footer-meta {
			grid-column: auto;
			align-items: flex-start;
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
