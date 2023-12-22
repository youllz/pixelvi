<section id="acceuil" class="hero">
	<div>
		<h1>
			<span><span class="rev">Transformer votre</span></span>
      <span >
				<span class="s rev">visibilité</span><span class="rev"> en </span><span class="s rev">succès</span>
      </span>
      <span>
        <span class="rev">réel, voilà notre </span>
      </span>
      <span>
        <span class="rev"> mission.</span>
      </span>
		</h1>
	</div>
 

	<div class="hero-bottom">
		
		<div>
			<h2>Nous développons des solutions numériques qui ont un impact significatif</h2>
		</div>
		<div></div>
		<div>
			<p>Être en ligne, c'est exister. Être visible, c'est prospérer.</p>
		</div>
		
	</div>
</section>

<style>
	section {
		background-color: var(--bg);
		min-height: 100dvh;
		color: var(--text);
		padding: 15rem 5vw 3vw;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	h1 {
		text-transform: uppercase;
		font-size: clamp(3rem, 8vw + 0.1rem, 10rem);
    line-height: 85%;
	}

	.s {
		padding: 0 30px;
		background-color: var(--accent);
		border-radius: 100vw;
		color: var(--bg);
	}

	.hero-bottom {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	h2 {
		font-size: clamp(20px, 2vw + 0.1rem, 3rem);
	}

	.rev {
		display: inline-block;
		overflow: hidden;
	}

  h1 > span {
    overflow: hidden;
    height: max-content;
    display: inline-block;
  }
   

   @media(width < 750px) {
    .hero-bottom {
      grid-template-columns: 1fr;
      gap: 10px;
    }
   }

   section {
    justify-content: center;
    gap: 36px;
   }
</style>
