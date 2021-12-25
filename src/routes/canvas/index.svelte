


<script>
import { onMount } from "svelte";


    let canvas;
    let ctx;

    onMount(() => {
        canvas = document.getElementById("canvas");

       
    });


   const capture_image = () =>{

    }
</script>

<div class="flex flex-col content"> 
<canvas height="480" width="360" bind:this={canvas}>

   

</canvas>
<button class="btn btn-primary">
    Button
  </button>
</div>

