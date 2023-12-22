<section id="team">
  <div>
    <p class="label">que des pros</p>
  </div>
  <div>
    <p>
      Notre équipe est conçue sur mesure pour chaque projet. Nous collaborons avec des experts indépendants, chacun spécialisé dans son domaine, pour offrir à nos clients une expérience unique.
    </p>
    <br>
    <br>
    <p>
      Cette flexibilité nous permet d'adapter notre équipe à votre projet, garantissant ainsi des résultats de qualité et une approche personnalisée à chaque étape de notre collaboration.
    </p>
    <br>
    <br>
    <p>
      Chez nous, pas de bureau tape-à-l'œil, mais une qualité de travail exceptionnelle.
    </p>
  </div>
</section>


<style>
	section {
		width: 100%;
    /* padding: 10vw 5vw; */
    background-color: var(--bg);
    color: var(--text);
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 16px;
	}


 
  section div:nth-child(2) {

    display: flex;
    flex-direction: column;
    /* gap: 8rem; */
  
    
  }
  section div:nth-child(2) p {
    font-weight: 500;
  }

  @media (width < 750px) {
    section {
      grid-template-columns: 1fr;
      /* gap: 20px; */
    }
  }
</style>