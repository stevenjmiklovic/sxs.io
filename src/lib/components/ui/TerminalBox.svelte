<script lang="ts">
	export let title: string = '';
	export let label: string = '';
	export let variant: 'default' | 'featured' | 'dim' = 'default';
</script>

<div class="panel" class:featured={variant === 'featured'} class:dim={variant === 'dim'}>
	{#if title || label}
		<div class="panel__header">
			{#if title}<span class="panel__title">{title}</span>{/if}
			{#if label}<span class="panel__label">{label}</span>{/if}
		</div>
	{/if}
	<div class="panel__body">
		<slot />
	</div>
</div>

<style>
	.panel {
		display: flex;
		height: 100%;
		flex-direction: column;
		padding: 1.5rem;
		border: 1px solid var(--line);
		border-radius: var(--radius-md);
		background: rgba(255, 255, 255, 0.66);
		transition:
			background var(--transition-normal),
			border-color var(--transition-normal),
			box-shadow var(--transition-normal),
			transform var(--transition-normal);
	}

	.panel:hover {
		border-color: var(--line-strong);
		background: var(--paper-raised);
		box-shadow: 0 14px 34px rgba(17, 25, 20, 0.07);
		transform: translateY(-3px);
	}

	.panel.featured {
		border-color: rgba(23, 92, 211, 0.34);
		background: linear-gradient(150deg, var(--paper-raised), var(--cobalt-soft));
	}

	.panel.dim {
		opacity: 0.65;
	}

	.panel__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1.4rem;
		padding-bottom: 0.9rem;
		border-bottom: 1px solid var(--line);
	}

	.panel__title {
		font-size: 0.9rem;
		font-weight: 600;
		letter-spacing: -0.01em;
	}

	.panel__label {
		font-family: var(--font-mono);
		font-size: 0.59rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.panel__body {
		display: flex;
		flex: 1;
		flex-direction: column;
	}
</style>
