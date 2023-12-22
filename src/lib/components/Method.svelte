<section id="approche">
  <div >
    <p class="method-header" >
      <span>Une méthodologie</span>
       <span>fluide et concrète</span>
    </p>
  </div>
  <div class="cards-container">
    <div>
      <article>
      <div class="card-header">
        <span>
          1
        </span>
        <p>
          Intégration
        </p>
      </div>
      <div class="card-body">
        <p>Nous nous réunissons pour un briefing et, quelques jours plus tard, notre proposition est prête. Tous les détails sont pris en charge, y compris le contrat et les délais.</p>
      </div>
      </article>
      <span class="mtd-line"></span>
    
    </div>

    <!--  -->
    
    <div>
      <article>
          <div class="card-header">
            <span>
              2
            </span>
            <p>
              Modèle
            </p>
          </div>
          <div class="card-body">
            <p>Nous travaillons en partenariat sur une base mensuelle ou par projet, selon ce qui convient le mieux. Vous souhaitez annuler ? Aucune question posée. Envie de prolonger ? Faites le nous savoir.</p>
          </div>
      </article>
      <span class="mtd-line"></span>
    </div>

    <!--  -->
    
    <div>
      <article>
          <div class="card-header">
            <span>
              3
            </span>
            <p>
              Sprint
            </p>
          </div>
          <div class="card-body">
            <p>Ensemble, nous itérons, testons et nous réunissons chaque semaine pour discuter des solutions. Nous envoyons également une mise à jour asynchrone pour que tout le monde soit sur la bonne voie.</p>
          </div>
      </article>
      <span class="mtd-line"></span>
    </div>

    <!--  -->

    <div>
      <article>
          <div class="card-header">
            <span>
              4
            </span>
            <p>
              Remettre
            </p>
          </div>
          <div class="card-body">
            <p>Lorsque notre travail est terminé, nous le documentons et organisons la gouvernance. Nous sommes disponibles pour vous aider avant, pendant et après notre collaboration.</p>
          </div>
      </article>
      <span class="mtd-line"></span>
    </div>
   
  </div>
</section>

<style>
  section {
    width: 100%;
    min-height: 100dvh;
    background-color: var(--bg);
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
    /* padding: 10vw 5vw 5vw; */
  }

 
  
   .method-header {
    text-transform: uppercase;
    font-size: clamp(25px, 5vw + 0.1rem, 8rem);
    font-weight: 800;
    line-height: 90%;
    text-align: center;
    overflow: hidden;

    & span {
      display: inline-block;
    }
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: 3rem;
    width: 100%;
    min-height: 80vh;
    overflow: hidden;
  }

  .cards-container > div {
    position: relative;
    /* height: 60rem; */
    overflow: hidden;


  }


  .cards-container div:nth-child(2) {
    top: 20%;
  }
  .cards-container div:nth-child(4) {
    top: 20%;
  }

  .mtd-line {
    position: absolute;
    display: block;
    height: 100%;
    width: 2px;
    background-color: #002518d8;
    top: 0;
    transform-origin: top;
  }

  article {
    padding: 20px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    gap: 32px;
  }


  .card-body p {
    font-size: clamp(14px, 2vw + 0.1rem, 1.8rem);
  }

  .card-header span {
    display: inline-block;
   padding: 8px;
    background-color: var(--accent);
    text-align: center;
    color: var(--bg);
    font-weight: 900;


  
  }

  .card-header p {
    margin-top: 10px;
    font-weight: 500;
  }

  
  @media (width < 1400px) {
    .cards-container {
      min-height: 100dvh;
    }
    .cards-container div:nth-child(2) {
    top: 0;
  }
  .cards-container div:nth-child(4) {
    top: 0;
  }
  }
</style>