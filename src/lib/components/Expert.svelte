<script lang="ts">
	import { quadInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import Btn from './Btn.svelte';

	const tech = ['UX & UI ', 'Développement Web ', 'Application', 'SEO ', 'Hébergement'];
	const digital = ['Analyse', 'Stratégie numérique', 'Réseaux sociaux contenu', 'Ads'];

	const techs = [
		{
			state: 'Sites internet',
			desc: 'En comprenant comment les clients se connectent à votre marque, nous concevons et développons des expériences numériques magnifiquement conçues et évolutives avec des interactions significatives qui stimulent le changement. En combinant une utilité robuste, une conception intuitive et le pouvoir irrésistible de la narration, nous captivons votre public et donnons vie au message unique de votre marque.'
		},

		{
			state: 'UX & UI',
			desc: 'Applications, sites Web ou expériences numériques complexes : nous concevons tout ce qui peut être mesuré en pixels. Et cela avec une grande partie de facilité d’utilisation et une grande attention aux détails.'
		},

		{
			state: 'seo',
			desc: "C'est sûrement merveilleux d'avoir beaucoup de visiteurs sur le site Web ? Une optimisation des moteurs de recherche (SEO) bien planifiée et exécutée avec soin est la base d’un classement élevé sur Google et d’une visibilité sur le Web."
		},
		{
			state: 'Hébergement',
			desc: "Pixelvi propose l'exploitation de l'environnement serveur pour les sites Web. Nous installons et gérons tous les détails techniques nécessaires au bon fonctionnement du site."
		}
	];

	type Tech =
		| 'Sites internet'
		| 'E-commerce'
		| 'Strategie'
		| 'Media'
		| 'Contenu et reseaux sociaux';

	type Digital = 'Strategie' | 'Media' | 'Contenu et reseaux sociaux';

	let techBtn: Tech = 'Sites internet';
	let digitalBtn: Digital = 'Strategie';

	const getTech = (el: HTMLElement) => {
		const btn = [...el.querySelectorAll('.tech button')];
		const state = techs.map((item) => item.state);

		for (let i = 0; i < state.length; i++) {
			btn[i].addEventListener('click', () => {
				//@ts-ignore
				techBtn = state[i];
			});
		}
	};

	const digitals = [
		{
			state: 'Strategie',
			desc: 'Connaître la cible dans ses moindres détails et le contexte dans son ensemble. Connaître les nouvelles tendances, sans oublier celles qui perdurent. Connaître ce qui forge la culture, autant que ce qui forme les comportements. Pour offrir des solutions d’impact à nos clients, nous développons une connaissance précise et méthodique de leur univers et de leurs publics.'
		},
		{
			state: 'Media',
			desc: 'Élaborer des stratégies qui feront bouger l’aiguille, c’est le leitmotiv de Cartier Média. Contribuer à augmenter un taux de conversion ou à générer un engagement accru auprès d’une marque nous procure une réelle satisfaction. Mais ce qui fait notre fierté, c’est d’accroître l’expérience consommateur à travers notre approche média.'
		},
		{
			state: 'Contenu et reseaux sociaux',
			desc: 'Multiplication des plateformes. Accélération des tendances. Diminution du temps d’attention. Nous savons que le contexte d’aujourd’hui rend les réseaux sociaux plus pertinents que jamais pour joindre les consommateurs. Nous savons aussi qu’il peut être difficile de s’y adapter. Notre équipe de création de contenu est là pour accompagner les marques qui veulent rester à l’avant-plan de la vague numérique.'
		}
	];

	const getDigital = (el: HTMLElement) => {
		const btn = [...el.querySelectorAll('.digi button')];
		const state = digitals.map((item) => item.state);

		for (let i = 0; i < state.length; i++) {
			btn[i].addEventListener('click', () => {
				//@ts-ignore
				digitalBtn = state[i];
			});
		}
	};
</script>

<section id="services">

<div class="tech">
  <h2>01. Technologie</h2>
  <div class="tech-container">
    <div class="btn-container">
      <ul use:getTech>
        {#each techs as items}
          <li>
            <button  class:active={items.state === techBtn}>
              {items.state}
            </button>
          </li>
        {/each}
      </ul>
    </div>
    <div class="desc">
      {#each techs as items}
      {#if items.state === techBtn}
      <p in:fly={{y: 20, duration: 500,  easing: quadInOut, delay: 100}} out:fade={{delay: -100}}>
        {items.desc}
      </p>
    {/if}
      {/each}
    </div>
  </div>
</div>

<!--  -->

<div class="digi">
  <h2>01. Numerique</h2>
  <div class="digi-container">
    <div class="btn-container">
      <ul use:getDigital>
        {#each digitals as items}
          <li>
            <button  class:active={items.state === digitalBtn}>
              {items.state}
            </button>
          </li>
        {/each}
      </ul>
    </div>
    <div class="desc">
      {#each digitals as items}
      {#if items.state === digitalBtn}
      <p in:fly={{y: 20, duration: 500,  easing: quadInOut, delay: 100}} out:fade={{delay: -100}}>
        {items.desc}
      </p>
    {/if}
      {/each}
    </div>
  </div>
</div>
</section>

<style>
	section {
    background-color: var(--bg);
    color: var(--text);
    /* padding: 10vw 5vw; */
    display: flex;
    flex-direction: column;
    gap: 20rem;
    min-height: 100dvh;
  }

  .tech, .digi {
    display: flex;
    flex-direction: column;
    gap: 30px;
    
  }

  .desc {
    position: relative;
  }

  .desc p {
    position: absolute;
  }

  .tech-container, .digi-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    grid-auto-rows: minmax(150px, 1fr);
  }

  .btn-container ul{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }




  button {
    background-color: transparent;
    border: 3px solid var(--accent);
    padding: 1rem 2em;
    cursor: pointer;
    font-size: clamp(16px, 2vw + 0.1rem, 2rem);
    font-weight: 900;
    border-radius: 100vw;
    color: var(--text);
    text-transform: uppercase;
    transition: all 0.3s var(--easing);
  }

  .active {
    background-color: var(--accent);
    color: var(--bg);
  }

  @media (width < 750px) {
    .tech-container, .digi-container {
      grid-template-columns: 1fr;
    }

    section {
      /* min-height: 120dvh; */
      gap: 10rem;
    }
  }

  @media (width < 350px ) {
    .tech-container, .digi-container {
      grid-auto-rows: minmax(240px, 1fr);
    }
  }

 
</style>
