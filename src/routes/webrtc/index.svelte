<script>
    import { browser } from "$app/env";

    import { onMount } from "svelte";

    let video;
    let canvas;
    onMount(async () => {
        video = document.getElementById("video");
        // @ts-ignore
        canvas = window.canvas = document.getElementById("canvas");
        console.log(canvas);
        //video.play();
        // @ts-ignore
        const constraints = (window.constraints = {
            audio: false,
            video: true,
        });

        if (window.isSecureContext) {
            console.log("Secure");
        } else {
            console.log("Not Secure");
        }
        try {
            if (browser) {
                const stream = await navigator.mediaDevices.getUserMedia(
                    constraints
                );
                console.log("this a stream = > ", stream);
                handleSuccess(stream);
            }
        } catch (error) {
            handleError(error);
        }
        // init();
    });

    //==========================================================

    // handle success
    function handleSuccess(stream) {
        const video = document.querySelector("video");
        const videoTrack = stream.getVideoTracks();
        console.log("videoTrack", videoTrack);
        console.log(`using video device : ${videoTrack[0].label}`);
        // @ts-ignore
        window.stream = stream;
        video.srcObject = stream;
    }
    function handleError(error) {
        if (error.name === "OverconstrainedError") {
            // @ts-ignore
            const v = constraints.video;
            errorMsg(
                `The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`
            );
        } else if (error.name === "NotAllowedError") {
            errorMsg(
                "Permissions have not been granted to use your camera and " +
                    "microphone, you need to allow the page access to your devices in " +
                    "order for the demo to work."
            );
        }
        errorMsg(`getUserMedia error: ${error.message}`, error);
    }

    function errorMsg(msg, error) {
        const errorElement = document.querySelector("#errorMsg");
        errorElement.innerHTML += `<p>${msg}</p>`;
        if (typeof error !== "undefined") {
            console.error(error);
        }
    }
    async function init(e) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(
                // @ts-ignore
                constraints
            );
            handleSuccess(stream);
        } catch (e) {
            handleError(e);
        }
    }
</script>

<div class="bg-blue-300  p-6 rounded h-screen flex items-center justify-center flex-col gap-2">
   

    <div class="">
        <video id="video" playsinline autoplay bind:this={video} >
        <track kind="captions">
        </video>
    </div>
    <div class="p-4 card w-96 bg-white">
         
        <p class="text-xl font-semibold">Welcome to WebRTC With Svelte Tutorial</p> 
        <div class="justify-end card-actions">
          <button class="btn btn-accent">Start Tutorial</button>
        </div>
      </div>
  
    <div id="errorMsg" />
    <canvas bind:this={canvas} width={32} height={32} />
</div>
