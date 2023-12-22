<script>
	import Btn from "./Btn.svelte";

</script>
<section id="services">

  <ul>
    <li>
      <a href="/service/site-web">
        site internet
      </a>
      <span class="ser-line">
      </span>
    </li>
    <li>
      <a href="/service/site-web">
       seo /ads
      </a>
      <span class="ser-line"></span>
    </li>
    <li>
      <a href="/service/site-web">
        strategie
      </a>
      <span class="ser-line"></span>
    </li>
    <li>
      <a href="/service/site-web">
       media
      </a>
      <span class="ser-line"></span>
    </li>
  </ul>
  
</section>

<style>
  section {
    width: 100%;
    background-color: var(--bg);
    min-height: 100%;
    padding: 5vw;
    color: var(--text);
  }

  ul {
    width: 100%;
    display: grid;
    grid-auto-rows: minmax(15rem, auto);
  }

  li {
    padding: 5px;
    position: relative;
    display: flex;
    align-items: center;
    background-color: transparent;
    z-index: 1;
    overflow: hidden;
  }

  .ser-line {
    display: inline-block;
    width: 100%;
    transform: scaleX(1);
    transform-origin: left;
    height: 2px;
    background-color: var(--tertiary);
    bottom: 0;
    position: absolute;
  }

  a {
    text-transform: uppercase;
    font-size: clamp(45px, 8vw + 0.1rem, 10rem);
    font-weight: 800;
    transition: all 0.3s var(--easing);
    width: 100%;
    display: block;
    position: absolute;
    /* opacity: 0; */
    /* bottom: -100%; */

  }

  li:hover a {
    padding-left: 30px;
  }

  li::before {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    background-color: rebeccapurple;
    transform-origin: bottom;
    transform: scaleY(0);
    transition: transform 0.2s var(--easing);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    /* box-shadow: 5px 5px 20px 24px rgb(113 108 108 / 53%); */
  margin:50px;
  width:200px;
  /* clip-path:polygon(0 0,100% 0,200% 100%,200% 200%,100% 200%,0 100%); */
  right: 5%;
    
  }

  li:hover::before {
    transform: scaleY(1);
  }

  ul li:nth-child(1)::before {
    background-image: url('/images/webdev.webp');
  }
  ul li:nth-child(2)::before {
    background-image: url('/images/seo-ads.webp');
  }
  ul li:nth-child(3)::before {
    background-image: url('/images/strategie.webp');
  }
  ul li:nth-child(4)::before {
    background-image: url('/images/media.webp');
  }
</style>