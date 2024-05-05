<script>
	import Section from './Section.svelte';
	import NavBar from './NavBar.svelte';
</script>

<div class="wrapper">
	<div class="page-container">
		<div class="page-container-inner">
			<h1 class="page-title"><span class="page-title-main">Henry Koehler</span></h1>
			<NavBar />
			<div class="title-sub">Not from Wikipedia, the free encyclopedia</div>
			<div class="body-content">
				<div>
					I'm a software engineer working in the <a href="https://www.politicsrewired.com/"
						>political tech space</a
					>.
				</div>
				<div>
					I principally work with:
					<ul>
						<li>Typescript</li>
						<li>React</li>
						<li>GraphQL</li>
						<li>Node</li>
						<li>PostgreSQL</li>
						<li>Rust</li>
					</ul>
				</div>
				<div>
					In my spare time, I like building <a href="https://hhk.nyc/wordsalad">word games</a>
					and
					<a
						href="https://open.spotify.com/artist/5BN5Uywy6N8nWwmIB7Jr7A?si=KM2GxzfzTn61g3ncSZMOAg"
						target="_blank">making music</a
					>
				</div>
				<h3>Get in touch</h3>
				<ul>
					<li>
						You can find me on <a href="https://www.linkedin.com/in/henry-koehler-a73066176/"
							>linkedin</a
						>, follow me on <a href="https://github.com/henryk1229">github</a>, or reach out to me
						at
						<a href="mailto:henryk1229@gmail.coms">henryk1229@gmail.com</a>
					</li>
				</ul>
			</div>
		</div>
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

	.wrapper {
		font-family: sans-serif;
	}

	h1 {
		font-size: 1.8em;
		font-family: 'Linux Libertine', 'Georgia', 'Times', 'Source Serif Pro', serif;
		line-height: 1.375;
		font-weight: normal;
		border-bottom: 1px solid #a2a9b1;
	}

	.page-container {
		min-width: 31.25em;
		max-width: 99.75rem;
		box-sizing: border-box;
		position: relative;
		z-index: 0;
		margin: 0 auto;
		padding-top: 0.05px;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		background-color: #fff;
		color: #202122;
		/* TODO - media queries? */
		padding-left: 2.75rem;
		padding-right: 2.75rem;
	}

	.page-title {
		margin-bottom: 0;
	}

	.page-container-inner {
		/* TODO */
	}

	.body-content {
		/* TODO */
	}

	.page-title-main {
	}

	.title-sub {
		margin-top: 8px;
		font-size: 0.875rem;
	}
</style>
