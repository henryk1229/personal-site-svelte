<script>
	import Section from './Section.svelte';
	import NavBar from './NavBar.svelte';
	import Sidebar from './Sidebar.svelte';
</script>

<div class="wrapper">
	<div class="page-container">
		<div class="page-container-inner">
			<div class="sider-container">
				<Sidebar />
			</div>
			<div>
				<h1 class="page-title">Henry Koehler</h1>
				<NavBar />
				<div class="title-sub">
					<span style="font-style:italic">Not</span> from Wikipedia, the free encyclopedia
				</div>
				<div class="body-content">
					<p>
						<span style="font-weight:bold">Henry Koehler</span> is an American software engineer and
						musician.
					</p>
					<Section>
						<span slot="title">Personal life</span>
						<span slot="contents"
							>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
							the industry's standard dummy text ever since the 1500s, when an unknown printer took
							a galley of type and scrambled it to make a type specimen book. It has survived not
							only five centuries, but also the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the 1960s with the release of Letraset
							sheets containing Lorem Ipsum passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of Lorem Ipsum.</span
						>
					</Section>
					<Section>
						<span slot="title">Engineering</span>
						<span slot="contents"
							>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
							the industry's standard dummy text ever since the 1500s, when an unknown printer took
							a galley of type and scrambled it to make a type specimen book. It has survived not
							only five centuries, but also the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the 1960s with the release of Letraset
							sheets containing Lorem Ipsum passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of Lorem Ipsum.</span
						>
					</Section>
					<Section>
						<span slot="title">Hobbies</span>
						<span slot="contents"
							>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
							the industry's standard dummy text ever since the 1500s, when an unknown printer took
							a galley of type and scrambled it to make a type specimen book. It has survived not
							only five centuries, but also the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the 1960s with the release of Letraset
							sheets containing Lorem Ipsum passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of Lorem Ipsum.</span
						>
					</Section>
					<Section>
						<span slot="title">External links</span>
						<span slot="list">
							<li>
								<a href="https://www.linkedin.com/in/henry-koehler-a73066176/">Linkedin</a>
							</li>
							<li>
								<a href="https://github.com/henryk1229">Github</a>
							</li>
							<li>
								<a href="mailto:henryk1229@gmail.coms">Gmail</a>
							</li>
						</span>
					</Section>
					<!-- <div>
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
				</div> -->
				</div>
			</div>
		</div>
	</div>
</div>

<style>
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

	p {
		font-size: 14px;
		line-height: 1.5;
		margin: 7px 0px 0px;
		padding: 0px 0px 7px;
	}

	li {
		margin-bottom: 0.3em;
	}

	.page-container {
		min-width: 31.25em;
		max-width: 99.75rem;
		box-sizing: border-box;
		position: relative;
		z-index: 0;
		/* margin: 0 auto; */
		padding-top: 64px;
		padding-bottom: 64px;
		background-color: #fff;
		color: #202122;
		/* TODO - media queries? */
		padding-left: 4rem;
		padding-right: 12rem;
	}

	.page-title {
		margin-bottom: 0;
		margin-top: 0;
	}

	.page-container-inner {
		display: grid;
		column-gap: 24px;
		grid-template: min-content 1fr min-content / 12.25rem minmax(0, 1fr);
	}

	.body-content {
		/* TODO */
	}

	.page-title-main {
	}

	.sider-container {
		margin-top: 2.8rem;
	}

	.title-sub {
		margin: 16px 0px;
		font-size: 0.875rem;
	}
</style>
