<script lang="ts">
	import { onMount } from 'svelte';

	const words =
		`Chez PIXELVi, nous sommes animés par une conviction : aider les entreprises à prospérer dans l'univers numérique en leur offrant une visibilité qui va bien au-delà des clics et des vues.`.split(
			' '
		);
</script>

<section id="why">
	<div class="container">
		<div>
			<p class="label">pourquoi nous ?</p>
		</div>
		<div class="reveal-container">
			<p class="rv">
				{#each words as letter}
					<span class="reveal">
						{letter}
					</span>
				{/each}
			</p>
		</div>
	</div>
</section>

<style>
	section {
		height: 200dvh;
    display: block;
		/* padding: 10vw 5vw; */
		background-color: var(--bg);
		color: var(--text);
		gap: 20px;
		/* background-color: red; */
	}

	.container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 3fr;
		position: sticky;
		top: 10%;
    gap: 16px;
	}

	.container div:nth-child(2) {
		position: sticky;
	}
	
	.container div:nth-child(2) p {
				font-size: clamp(30px, 5vw + 0.1rem, 10rem);
				line-height: 110%;
				letter-spacing: -1px;
				font-weight: 600;
	
				/* 
				background-clip: text;
				-webkit-background-clip: text;
				color: transparent;
				background-image: linear-gradient(to right, #b6b6b6, #b6b6b6) ;
				background-size: 0%; */
			}

  .reveal {
    background-clip: text;
    -webkit-background-clip: text;
			color: transparent;
			color: rgb(182, 182, 182, 0.2);
			/* background-image: linear-gradient(to right, #b6b6b6, #fff) ; */
      background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1));
			/* background-size: 0%; */
  }

	@media (width < 750px) {
		.container {
			grid-template-columns: 1fr;
		}
	}
</style>
