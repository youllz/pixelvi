<section id="contact">
	<div class="contact-h">
		<div>
			<p>
				Travailler <br /> avec nous
			</p>
			<p>
				Nous avons été brefs, mais il y a plus à voir. Des questions? Réservez simplement un appel
				ou envoyez-nous un e-mail, nous vous répondrons bientôt.
			</p>
		</div>
		<div>
			<a href="mailto:zyoussouf70@gmail.com">zyoussouf70@gmail.com
				<span class="c-line"></span>
				<span class="c-line-2"></span>
			</a>
		</div>
	</div>
	<div class="contact-m">
		<div>
			<p>Plan du site</p>
			<ul>
				<li>
					<a href="/#acceuil"> Acceuil </a>
				</li>
				<li>
					<a href="/#acceuil"> Approche </a>
				</li>
				<li>
					<a href="/#acceuil"> Faq </a>
				</li>
				<li>
					<a href="/#acceuil"> Contact </a>
				</li>
			</ul>
		</div>

		<div>
			<p>Réseaux sociaux</p>
			<ul>
				<li>
					<a href="/"> Instagram </a>
				</li>
				<li>
					<a href="/"> LinkedIn </a>
				</li>
				<li>
					<a href="/"> Whatsapp </a>
				</li>
			</ul>
		</div>
	</div>

  <div class="contact-b">
    <span class="logo">
      PIXELVI
    </span>

	<p>
		Abidjan,Côte d'Ivoire
	</p>

    <p>
      Copyright © Pixelvi2024
    </p>

  </div>
</section>

<style>
	section {
		min-height: 100vh;
		background-color: var(--bg);
		/* padding: 5vw; */
		color: var(--text);
	}

	.contact-h {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 20px 0;
		border-bottom: 1px solid #002518e5;
	}

	.contact-h p:nth-child(1) {
		font-size: clamp(30px, 4vw + 0.1rem, 6rem);
		text-transform: uppercase;
		font-weight: 800;
		line-height: 90%;
	}
	.contact-h p:nth-child(2) {
		margin-top: 16px;
	}

	.contact-h a {
		font-size: clamp(20px, 4vw + 0.1rem, 5rem);
		font-weight: 500;
		color: var(--accent);
		position: relative;
		overflow: hidden;
		padding: 2px;
		transform-origin: left;
	}

	.c-line, .c-line-2 {
		position: absolute;
		display: block;
		height: 2px;
		width: 100%;
		background-color: var(--accent);
		transform-origin: right;
	}

	.contact-h a:hover .c-line{
		transform: scaleX(0);
		/* background-color: red; */
	}

	.contact-h a:hover .c-line-2 {
		transform: scaleX(0);

	}
 	
	.c-line {
		z-index: 1;
		transition: transform 0.5s  var(--easing);
	}
	.c-line-2 {
		background-color: var(--accent);
		transform-origin: left;
		transition: transform 0.5s 0.6s var(--easing);
	}

	/* .contact-h a::before {
		content: '';
		position: absolute;
		display: inline-block;
		height: 2px;
		width: 100%;
		background-color: var(--accent);
		bottom: -1px;
		transform: scale(1);
		transform-origin: left;
		transition: transform 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
		transition: transform 0.5s  var(--easing);
		
	}

	.contact-h a:hover::before {
		transform-origin: right;
		transform: scale(0);
	} */

	.contact-h div:nth-child(2) {
		text-align: right;
		display: flex;
		align-items: center;
	}


  .contact-m {
    display: flex;
    gap: 40px;
    padding: 100px 0;
  }

  .contact-m p {
    font-size: clamp(14px, 3vw + 0.1rem, 2.5rem);
    font-weight: 500;
  }
  .contact-m > div {
    display: flex;
    flex-direction: column;
    gap: 16px;


  }

  .contact-m ul {
    display: grid;
    gap: 10px;
    
  }

  .contact-m li {
    font-size: clamp(14px, 1.5vw + 0.1rem, 1.8rem);
    opacity: 0.6;
    transition: opacity 0.3s linear;
  }

  .contact-m li:hover {
    opacity: 1;
  }


  .contact-b {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

  }

  .contact-b span {
    font-size: clamp(40px, 10vw + 0.1rem, 15rem);
    font-weight: 900;
    color: var(--text);
    line-height: 80%;
  }


	@media (width < 750px) {
    .contact-h {
      grid-template-columns: 1fr;
      gap: 20px;
    }

		.contact-b {
			flex-direction: column;
			align-items: center;
			gap: 30px;
		}
  }
</style>
