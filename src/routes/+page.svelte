<script>
	import Section from './Section.svelte';
	import NavBar from './NavBar.svelte';
	import Sidebar from './Sidebar.svelte';
	import { onMount } from 'svelte';

	let small = false;

	onMount(() => {
		const query = window.matchMedia(`(max-width: 767px)`);

		const onChange = () => (small = query.matches);
		query.addEventListener('change', onChange);
		onChange();

		return () => query.removeEventListener('change', onChange);
	});
</script>

<div class="wrapper">
	<div class="page-container">
		<div class="page-container-inner">
			{#if !small}
				<div class="sider-container">
					<Sidebar />
				</div>
			{/if}
			<div>
				<h1 class="page-title">Henry Koehler</h1>
				<NavBar />
				<div class="title-sub">
					<span style="font-style:italic">Not</span> from Wikipedia, the free encyclopedia
				</div>
				<div class="body-content">
					<p>
						<span style="font-weight:bold">Henry Hanford Koehler</span> is an American software engineer
						and musician.
					</p>
					<Section>
						<span slot="title">Personal life</span>
						<span slot="contents"
							>Koehler was raised in suburban New Jersey. As a child, he enjoyed playing the guitar,
							Scrabble, and Age of Empires. After attending college in <a
								href="https://en.wikipedia.org/wiki/New_York_City">New York</a
							>, he moved to the city full time, where he was a founding member of the band
							<a href="https://personalspaceband.bandcamp.com/music">Personal Space</a>. He
							currently lives in
							<a href="https://en.wikipedia.org/wiki/Brooklyn">Brooklyn, NY</a> with his fiance.</span
						>
					</Section>
					<Section>
						<span slot="title">Engineering</span>
						<span slot="contents">
							<p>
								In 2019, Koehler attended the <a href="https://flatironschool.com/campuses/nyc/"
									>Flatiron School</a
								> for software engineering.
							</p>
							<p>
								He was the first hire at <a href="https://www.politicsrewired.com/"
									>Politics Rewired</a
								>, a cooperatively run tech startup, joining co-founders
								<a href="https://bprp.xyz/">Ben Packer</a> and Ben Chrobot in October, 2019. In addition
								to full stack contributions to both products that the company offered, he also served
								as the Membership Secretary, and founded and chaired the Social committee.
							</p>
							<p>
								In the summer of 2023, Koehler conceived of <a href="/wordsalad">WordSalad</a>, a
								daily word game. Technical work began in September, 2023, and the game was deployed
								on January 2nd, 2024.
							</p>
							<p>In February, 2024, Koehler began contract work for a European-based AI startup.</p>
						</span>
					</Section>
					<Section>
						<span slot="title">Hobbies</span>
						<span slot="contents">
							In his spare time, Koehler enjoys making music, cooking, and word games.
						</span>
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
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@media (min-width: 767px) {
		.page-container-inner {
			column-gap: 8px;
			grid-template: min-content 0.5fr min-content / 9.25rem minmax(0, 1fr);
		}
	}
	@media (min-width: 900px) {
		.page-container-inner {
			column-gap: 24px;
			grid-template: min-content 1fr min-content / 12.25rem minmax(0, 1fr);
		}
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
		padding-top: 64px;
		padding-bottom: 64px;
		background-color: #fff;
		color: #202122;
		padding-left: 4rem;
		padding-right: 4rem;
	}

	.page-title {
		margin-bottom: 0;
		margin-top: 0;
	}

	.page-container-inner {
		display: grid;
	}

	.sider-container {
		margin-top: 2.8rem;
	}

	.title-sub {
		margin: 16px 0px;
		font-size: 0.875rem;
	}
</style>
