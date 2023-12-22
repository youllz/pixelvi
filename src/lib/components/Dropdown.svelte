<script>
	import { quadInOut, quadOut } from "svelte/easing";
	import { fade, fly, slide } from "svelte/transition";


  let active = false
  
  const display = () => {
    active = !active
  }

  const hidden = () => {
    active = false
  }
</script>


<div class="container">
  <div class="header">
    <button on:click={display} on:blur={hidden}>
      <span>
        <slot name="header">
          Do you build the entire ship in-house?
        </slot>
      </span>
      <span class="icon">
        {#if active}
        <span in:fly={{y: 20, duration: 500,  easing: quadInOut, delay: 100}} out:fade={{delay: -100}}>
          <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13.825L8.1 17.7q-.275.275-.687.288T6.7 17.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.213t.375-.062q.2 0 .375.062t.325.213l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm0-6L8.1 11.7q-.275.275-.687.288T6.7 11.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 5.425q.2 0 .375.063t.325.212l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"/></svg>
        </span>

        {:else}
        <span in:fly={{y: -20, duration: 500,  easing: quadInOut, delay: 100}} out:fade={{delay: -100}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.175l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.062T11.3 18.3l-4.6-4.6q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275zm0-6L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.062T11.3 12.3L6.7 7.7q-.275-.275-.288-.687T6.7 6.3q.275-.275.7-.275t.7.275z"/></svg>
        </span>
        {/if}
      </span>
    </button>
  </div>
 {#if active}
   <div class="content" transition:slide={{axis: 'y'}}>
    <slot name="content">
     <p>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus a deleniti tenetur, optio fugiat quasi? Fuga itaque maxime amet asperiores obcaecati, excepturi officia quisquam! Nesciunt sed illum debitis ullam.
  </p>
   </slot>
   </div>
 {/if}
</div>


<style>
  .container {
    width: 100%;
    border-top: 1px solid #0e034571;
    /* border-bottom: 1px solid #0e034536; */
    position: relative;
  }

  .container::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s linear;
  }

  .container:hover::before {
    transform: scale(1);
  }

  .header {
    width: 100%;
  }

  button {
    background-color: inherit;
    border: none;
    width: 100%;
    padding: 30px 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    font-size: clamp(16px, 1.5vw + 0.1rem, 2rem);
    font-weight: 700;

  }

  button span:nth-child(1) {
    text-align: left;
  }


  .content {
    padding: 10px 5px;
    font-weight: 300;
    

    & p {
      font-size: clamp(14px, 1.4vw + 0.1rem, 1.4rem) !important;
      font-weight: 500;
    }
  }

  .icon {
    position: relative;
    right: 5%;
  }

  .icon span {
    position: absolute;
  }

  @media (width < 550px) {
    .header button {
      text-align: center;
    }

    .content p {
      text-align: center;
    }
  }
</style>