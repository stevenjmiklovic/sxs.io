<script lang="ts">
	import { factoryStages } from '$lib/data/factory';

	export let detailed: boolean = false;
</script>

<ol class:detailed class="factory-loop" aria-label="sXs factory production loop">
	{#each factoryStages as stage, index}
		<li>
			<div class="factory-loop__node">
				<span>{String(index + 1).padStart(2, '0')}</span>
				<i aria-hidden="true"></i>
			</div>
			<div class="factory-loop__copy">
				<h3>{stage.name}</h3>
				<p class="factory-loop__prompt">{stage.prompt}</p>
				<p>{stage.description}</p>
				{#if detailed}
					<dl>
						<div>
							<dt>Output</dt>
							<dd>{stage.output}</dd>
						</div>
						<div>
							<dt>Human role</dt>
							<dd>{stage.humanRole}</dd>
						</div>
					</dl>
				{/if}
			</div>
		</li>
	{/each}
</ol>

<style>
	.factory-loop {
		position: relative;
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		list-style: none;
	}

	.factory-loop::before {
		position: absolute;
		top: 2rem;
		right: 10%;
		left: 10%;
		height: 2px;
		background: linear-gradient(90deg, var(--cobalt), var(--signal-deep));
		content: '';
	}

	.factory-loop li {
		position: relative;
		min-width: 0;
		padding: 0 0.75rem;
	}

	.factory-loop__node {
		display: flex;
		height: 4rem;
		align-items: center;
		justify-content: center;
	}

	.factory-loop__node span {
		position: absolute;
		top: 0;
		left: 0.75rem;
		font-family: var(--font-mono);
		font-size: 0.56rem;
		color: var(--graphite);
	}

	.factory-loop__node i {
		z-index: 1;
		width: 14px;
		height: 14px;
		border: 3px solid var(--paper);
		border-radius: 50%;
		background: var(--cobalt);
		box-shadow: 0 0 0 1px var(--cobalt);
	}

	.factory-loop li:last-child .factory-loop__node i {
		background: var(--signal-deep);
		box-shadow: 0 0 0 1px var(--signal-deep);
	}

	.factory-loop__copy {
		padding-top: 1rem;
		border-top: 1px solid var(--line);
	}

	.factory-loop h3 {
		font-size: clamp(1.1rem, 2vw, 1.45rem);
	}

	.factory-loop__prompt {
		margin-top: 0.45rem;
		font-family: var(--font-mono);
		font-size: 0.58rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--cobalt);
	}

	.factory-loop__copy > p:last-of-type {
		margin-top: 0.75rem;
		font-size: 0.76rem;
		line-height: 1.55;
		color: var(--graphite);
	}

	dl {
		display: grid;
		gap: 0.75rem;
		margin-top: 1.25rem;
	}

	dl div {
		padding-top: 0.75rem;
		border-top: 1px dashed var(--line);
	}

	dt {
		font-family: var(--font-mono);
		font-size: 0.54rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--graphite);
	}

	dd {
		margin-top: 0.3rem;
		font-size: 0.7rem;
		line-height: 1.5;
		color: var(--ink-soft);
	}

	@media (max-width: 900px) {
		.factory-loop {
			grid-template-columns: 1fr;
			gap: 0;
		}

		.factory-loop::before {
			inset: 2rem auto 2rem 1.45rem;
			width: 2px;
			height: auto;
		}

		.factory-loop li {
			display: grid;
			grid-template-columns: 3.5rem 1fr;
			padding: 0;
		}

		.factory-loop__node {
			height: auto;
			min-height: 10rem;
			justify-content: flex-start;
			padding-left: 1rem;
		}

		.factory-loop__node span {
			top: 1rem;
			left: 0;
		}

		.factory-loop__copy {
			padding: 1.5rem 0 2rem;
			border-top: 0;
			border-bottom: 1px solid var(--line);
		}
	}
</style>
