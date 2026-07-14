<script lang="ts">
	export let label: string;
</script>

<span class="badge">{label}</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		padding: 0.3rem 0.6rem;
		border: 1px solid var(--border-dim);
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.5);
		color: var(--text-muted);
		font-family: var(--font-mono);
		font-size: 0.61rem;
		font-weight: 500;
		letter-spacing: 0.02em;
		transition:
			color var(--transition-fast),
			border-color var(--transition-fast);
		cursor: default;
	}
	.badge:hover {
		color: var(--cobalt-deep);
		border-color: var(--cobalt);
	}
</style>
