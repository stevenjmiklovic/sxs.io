<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="container site-footer__inner">
		<div class="footer-brand">
			<span class="footer-mark">S×S</span>
			<p>Structure for what must work. Judgment for everything else.</p>
		</div>

		<div class="footer-links" aria-label="Footer links">
			<a href="mailto:github@sxs.io">Email</a>
			<a href="https://github.com/stevenjmiklovic" target="_blank" rel="noopener noreferrer">
				GitHub <span aria-hidden="true">↗</span>
			</a>
			<a href="#hero">Back to top ↑</a>
		</div>

		<div class="footer-meta">
			<span>© {year} SXS</span>
			<span class="availability"><i aria-hidden="true"></i> Available for select engagements</span>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		padding: 3rem 1.5rem;
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
		font-size: 0.82rem;
		font-weight: 700;
		color: var(--signal);
	}

	.footer-brand p {
		max-width: 28rem;
		color: #c9d2cc;
		font-size: 0.9rem;
	}

	.footer-links {
		display: flex;
		gap: 1.5rem;
		font-size: 0.82rem;
		color: #dfe6e1;
	}

	.footer-links a:hover {
		color: var(--signal);
	}

	.footer-meta {
		grid-column: 1 / -1;
		display: flex;
		justify-content: space-between;
		padding-top: 1.5rem;
		border-top: 1px solid #34423a;
		font-family: var(--font-mono);
		font-size: 0.65rem;
		color: #91a198;
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

		.footer-brand {
			flex-direction: column;
		}

		.footer-links {
			flex-wrap: wrap;
		}

		.footer-meta {
			grid-column: auto;
			align-items: flex-start;
			flex-direction: column;
			gap: 0.75rem;
		}
	}
</style>
