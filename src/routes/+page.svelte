<div class="wrapper">
	<div class="header">
		<h1>Hi, I'm Henry</h1>
	</div>
	<div>
		<p>I'm a software engineer working in the political tech space.</p>
		<p>
			I principally work with Typescript, React, GraphQL, Node, and PostgreSQL, and I'm currently
			learning Rust.
		</p>
		<p>I built this minimal site to play with Svelte and host a few projects (coming soon!)</p>
	</div>
</div>

<style>
	@font-face {
		font-family: 'Gelasio';
		font-style: normal;
		font-weight: 400;
		src: local('Gelasio Regular'), local('Gelasio-Regular'),
			url(https://fonts.gstatic.com/s/gelasio/v1/cIf9MaFfvUQxTTqS9C6hYQ.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	h1 {
		font-family: Gelasio;
	}

	p {
		font-family: Gelasio;
	}

	div {
		background-color: #f3efe0;
	}

	.header {
		display: flex;
		justify-content: flex-end;
		padding: 36px;
	}

	.wrapper {
		height: 1024px;
		padding: 72px;
	}
</style>
