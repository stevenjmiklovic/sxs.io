<script lang="ts">
	export let label: string;
</script>

<span class="status" data-status={label.toLowerCase()}>
	<i aria-hidden="true"></i>
	{label}
</span>

<style>
	.status {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		font-family: var(--font-mono);
		font-size: 0.58rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--ink-soft);
	}

	.status i {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--signal-deep);
	}

	.status[data-status='building'] i {
		background: var(--cobalt);
	}

	.status[data-status='archived'] i {
		background: var(--graphite);
	}
</style>
