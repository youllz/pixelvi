<section>
  <span>
    404
  </span>
  <p>Oupss page introuvable</p>
  <a href="/">
    Acceuil
  </a>
</section>



<style>
  section {
    min-height: 50vw;
    padding: 10vw 5vw 5vw;

  }

  span {
    font-size: clamp(30px, 10vw + 0.1rem, 12rem);
    font-weight: 700;
    color: var(--tertiary);
  }

  a {
    font-size: clamp(18px, 1.2vw + 0.1rem, 2rem);
    border-radius: 100vw;
    position: relative;
    font-weight: 800;
  }

  a::before {
    content: '';
		position: absolute;
		display: inline-block;
		height: 2px;
		width: 100%;
		background-color: var(--tertiary);
		bottom: -1px;
		transform: scale(1);
		transform-origin: left;
		transition: transform 0.5s  var(--easing);
  }


   a:hover::before {
		transform-origin: right;
		transform: scale(0);
	}


</style>