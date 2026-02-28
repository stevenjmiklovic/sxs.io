<script lang="ts">
	export let label: string;
</script>

<span class="badge">{label}</span>

<style>
	.badge {
		display: inline-block;
		padding: 2px 8px;
		border: 1px solid var(--border-dim);
		color: var(--text-muted);
		font-size: 0.7rem;
		letter-spacing: 0.05em;
		transition:
			color var(--transition-fast),
			border-color var(--transition-fast);
		cursor: default;
	}
	.badge:hover {
		color: var(--text-primary);
		border-color: var(--border-primary);
	}
</style>
