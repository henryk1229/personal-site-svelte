<div class="section">
	<h2>
		<slot name="title" />
	</h2>
	{#if $$slots.contents}
		<div>
			<slot name="contents" />
		</div>
	{/if}
	{#if $$slots.list}
		<ul>
			<slot name="list" />
		</ul>
	{/if}
</div>

<style>
	h2 {
		margin: 0.25em 0 0.25em 0;
		font-family: 'Linux Libertine', 'Georgia', 'Times', 'Source Serif Pro', serif;
		line-height: 1.375;
		font-size: 1.5em;
		font-weight: normal;
		border-bottom: 1px solid #a2a9b1;
	}
	div {
		font-size: 14px;
		line-height: 1.5;
		margin: 7px 0px 0px;
		padding: 0px 0px 7px;
	}
	ul {
		margin: 0.3em 0 0 1.6em;
		padding: 0;
	}
</style>
