<script lang="ts">
	// your script goes here
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import Lenis from '@studio-freight/lenis';
	import Nav from '$lib/components/Nav.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { quadInOut, quartOut } from 'svelte/easing';
	import { navIsOpen, animation, mounted } from '$lib';
	import Loading from '$lib/components/loading.svelte';

	onMount(() => {
		setTimeout(() => {
			$mounted = true

		}, 2000)
		const lenis = new Lenis({
			smoothWheel: true,
			duration: 2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothTouch: true
		});

		lenis.on('scroll', (e: any) => {
			// console.log(e);
		});

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		animation()

		
	});

	
</script>

<svelte:head>
	<meta name="description" content="Chez Pixelvi, nous sommes déterminés à faire briller votre entreprise en ligne. Des solutions personnalisées en marketing digital, développement web et gestion de contenu pour atteindre vos objectifs. Explorez nos services dès aujourd'hui !">
	<title>Pixelvi</title>
</svelte:head>

{#if !$mounted}
	<div transition:slide={{axis: 'y', duration: 1000, easing: quadInOut}} class="loading"><Loading/></div>
{/if}
{#if $navIsOpen}
	<div class="nav-container" transition:slide={{axis: 'y', duration: 500, easing: quadInOut, }} >
		<Nav/>
	</div>
{/if}
<header>
	<div class="logo" >
		<a href="/"> PIXELVI </a>
	</div>

	<div>
		<button on:click={() => {
			$navIsOpen = !$navIsOpen
		}}>
		<span class="text-container">
			{#if $navIsOpen}
				<span in:fly={{y: 20, duration: 500,  easing: quadInOut, delay: 100}} out:fade={{delay: -100}}>
					fermer
				</span>
				{:else}
				<span in:fly={{y: 20, duration: 500,  easing: quadInOut, delay: 100}} out:fade={{delay: -100}}>
					menu
				</span>
			{/if}
		</span>

		
		
		</button>
	</div>
</header>

<main>
	<slot><!-- optional fallback --></slot>
</main>

<footer>
	<Footer />
</footer>

<style>
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 2vw 5vw;
		position: fixed;
		color: var(--text);
		align-items: center;
		z-index: 50;
		mix-blend-mode: difference;
	}

	.logo {
		font-weight: 800;
		font-size: 20px;
		text-transform: uppercase;
	}

	button {
		display: flex;
		position: relative;
		cursor: pointer;
		justify-content: center;
		overflow: hidden;
		background-color: transparent;
		width: clamp(100px, 10vw , 14rem);
		/* align-items: center; */

		height: 30px;
		border: none;
		outline: none;
	}

	

	.text-container {
		font-weight: 500;
		font-size: clamp(14px, 2vw + 0.1rem, 2rem);
		font-family: 'Geist';
		height: 100%;
		width: 100%;
		color: var(--text);
		position: relative;
		text-transform: uppercase;

		& span {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		
	}

	

	

	main {
		width: 100%;
		min-height: 100%;
	}

	.nav-container {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 40;
		
	}

	.loading {
		position: fixed;
		top: 0;
		z-index: 100;
	}
</style>
