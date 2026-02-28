<script lang="ts">
	export let title: string = '';
	export let label: string = '';
	export let variant: 'default' | 'featured' | 'dim' = 'default';
</script>

<div class="terminal-box" class:featured={variant === 'featured'} class:dim={variant === 'dim'}>
	{#if title}
		<div class="terminal-box__header">
			<span class="terminal-box__title">▸ {title}</span>
			{#if label}
				<span class="terminal-box__label">{label}</span>
			{/if}
		</div>
		<div class="terminal-box__divider" aria-hidden="true">
			{'─'.repeat(80)}
		</div>
	{/if}
	<div class="terminal-box__body">
		<slot />
	</div>
</div>

<style>
	.terminal-box {
		border: 1px solid var(--border-primary);
		background: var(--bg-secondary);
		padding: var(--space-lg);
		transition:
			border-color var(--transition-normal),
			background var(--transition-normal),
			box-shadow var(--transition-normal);
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.terminal-box:hover {
		border-color: var(--border-bright);
		background: var(--bg-elevated);
	}
	.terminal-box.featured {
		border-color: var(--text-accent);
		box-shadow: 0 0 24px rgba(255, 140, 0, 0.12);
	}
	.terminal-box.featured:hover {
		box-shadow: 0 0 32px rgba(255, 140, 0, 0.2);
	}
	.terminal-box.dim {
		opacity: 0.65;
	}
	.terminal-box__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-sm);
	}
	.terminal-box__title {
		color: var(--text-accent);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 0.875rem;
	}
	.terminal-box__label {
		color: var(--text-dim);
		font-size: 0.7rem;
		border: 1px solid var(--border-dim);
		padding: 2px 6px;
		letter-spacing: 0.05em;
	}
	.terminal-box__divider {
		color: var(--border-dim);
		font-size: 0.65rem;
		margin-bottom: var(--space-md);
		overflow: hidden;
		white-space: nowrap;
		line-height: 1;
	}
	.terminal-box__body {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
</style>
