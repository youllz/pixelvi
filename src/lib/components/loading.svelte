
<script lang="ts">
  import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
  import {mounted} from '$lib'

  
  const progress = tweened(0, {
  duration: 2000,
  easing: cubicOut
})

  $: if(!$mounted) {
    progress.set(100)
  }
</script>


<section id="loading">
  <p class="load">
    <span>{Math.floor($progress)}</span>
    {#each 'PIXELVI' as letter}
      <span>{letter}</span>
    {/each}
  </p>
</section>

<style>
  section {
    height: 100dvh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg);
    color: var(--text);
  }

  p {
    font-weight: 800;
    font-size: clamp(20px, 3vw + 0.1rem, 22rem);
  }
</style>