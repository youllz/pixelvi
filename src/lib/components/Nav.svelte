<script>
	import { navIsOpen } from "$lib";
	

  const links = [
    {
      url: '/#acceuil',
      title: 'acceuil'
    },
    {
      url: '/#services',
      title: 'services'
    },
    {
      url: '/#approche',
      title: 'approche'
    },
    {
      url: '/#faq',
      title: 'faq'
    },
    {
      url: '/#contact',
      title: 'contact'
    },
  ]


</script>


<section>
<div class="nav-left">
  <ul>
    {#each links as link, idx}
       <li >
          <a href={link.url} on:click={() => {
            $navIsOpen = !$navIsOpen
          }}>
            {link.title}
          </a>
       </li>
       {/each}
  </ul>
</div>
<div class="nav-right">
  <ul>
    <li>
        <a href="mailto:zyoussouf70@gmail.com">
          zyoussouf70@gmail.com
        </a>
    </li>
    <li>
     <a href="tel:+2550141472963">
      +255 01 41 47 29 63
     </a>
    </li>
  </ul>
  <ul>
    <li>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"><path fill="currentColor" d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m-48 152a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m60-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-28 48a32 32 0 1 1-32-32a32 32 0 0 1 32 32"/></svg>
      </a>
    <li>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg>
      </a>
    </li>
    <li>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
      </a>
    </li>

  </ul>
</div>
</section>



<style>
  section {
    min-height: 100dvh;
    width: 100%;
    /* position: fixed; */
    top: 0;
    display: grid;
    grid-template-columns: 3fr 1fr;
    background-color: var(--tertiary);
    color: var(--text);
    padding: 15rem 5vw 5vw;
  }

  .nav-left ul {
    display: flex;
    flex-direction: column;
  }


  .nav-left ul a {
    font-size: clamp(60px, 8vw + 0.1rem, 15rem);
    line-height: 90%;
    text-transform: uppercase;
    font-weight: 900;
    transition: color 0.3s var(--easing);
    position: relative;
  }

  

  .nav-left a:hover {
    color: var(--accent);
  }

  .nav-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 32px;


    & ul:nth-child(1) {
      font-size: clamp(14px, 1.4vw + 0.1rem, 1.7rem);
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    & ul:nth-child(2) {
      display: flex;
      gap: 20px;
    }
  }

  @media (width < 550px) {
    section {
      grid-template-columns: 1fr;
    }
  }

  @media (width < 370px) {
    .nav-left ul  a {
      font-size: 15vw;
    }
  }
</style>