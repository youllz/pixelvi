<section class="how">
	<div>
		<p class="label">comment ?</p>
	</div>
	<div>
		<p>Des expériences digitales ultra-fluides, pour ceux qui aiment avoir un coup d'avance.</p>
    <p>
      Notre approche repose sur une compréhension approfondie de votre entreprise et de vos besoins en ligne. Nous commençons par écouter attentivement votre vision et vos objectifs, puis nous élaborons des stratégies sur mesure. Grâce à une combinaison de gestion de réseaux sociaux, de création de contenu captivant et de techniques de référencement pointues, nous donnons vie à votre présence en ligne.
    </p>

    <p>
      Notre équipe dédiée suit de près les performances, ajustant constamment nos méthodes pour garantir une visibilité maximale. Notre engagement ? Vous offrir un contenu pertinent et une présence active qui captivent votre audience.
    </p>

    <p>
      Avec des mesures précises et des rapports clairs, nous vous guidons vers un succès en ligne durable, chaque étape étant soigneusement conçue pour vous propulser vers une visibilité et une croissance accrues.
    </p>
	</div>
</section>

<style>
	section {
		width: 100%;
    /* padding: 5vw; */
    background-color: var(--accent);
    color: var(--bg);
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 16px;
	}


  
 
  section div:nth-child(2) {

    display: flex;
    flex-direction: column;
    gap: 8rem;

  }
  section div:nth-child(2) p {
    font-weight: 500;
  }

  section div:nth-child(2) p:nth-child(1) {
    font-weight: 600;
    font-size: clamp(20px, 3vw + 0.1rem, 4rem);
    text-transform: uppercase;
    font-weight: 800;
  }
    
    @media (width < 750px) {
    section {
      grid-template-columns: 1fr;
    }
  }
</style>
