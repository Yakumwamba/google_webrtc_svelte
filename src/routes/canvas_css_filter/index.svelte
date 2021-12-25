<script>
    import { onMount } from "svelte";

    let canvas;
    let video;
    let navigator;

    onMount(() => {
        console.log(canvas);
        canvas.width = video.width;
        canvas.height = video.height;
        navigator = navigator || window.navigator;
        window = window;
    });
</script>


<div> 


    
</div>