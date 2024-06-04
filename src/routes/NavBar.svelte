<div class="nav">
	<div>
		<span class="nav-item nav-current">Article</span>
		<a class="nav-item" href="/wordsalad" style="text-decoration:none">WordSalad</a>
	</div>
	<div>
		<span class="nav-item nav-current">Read</span>
		<span class="nav-item disabled">Edit</span>
	</div>
</div>

<style>
	.nav {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		box-shadow: 0 1px #c8ccd1;
		color: #36c;

		padding: 12px 0 7px 0;
		margin-bottom: -1px;
	}

	.nav-current {
		color: #202122;
		border-bottom: 2px solid;
	}

	.disabled {
		cursor: not-allowed;
	}

	.nav-item {
		margin: 0 8px;
	}
</style>
