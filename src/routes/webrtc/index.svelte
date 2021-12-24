<script>
    import { onMount } from "svelte";

    let video;

    onMount(() => {
        video = document.getElementById("video");
        //video.play();
        const constraints = (window.constraints = {
            audio: false,
            video: {
                width: { min: 1280, ideal: 1920, max: 2560 },
                height: { min: 720, ideal: 1080, max: 1440 },
            },
        });

        console.log(constraints);
        init();
    });

    //==========================================================

    // handle success
    function handleSuccess(stream) {
        const video = document.querySelector("video");
        const videoTrack = stream.getVideoTracks();
        console.log("videoTrack", videoTrack);
        console.log(`using video device : ${videoTrack[0].label}`);
        window.stream = stream;
        video.srcObject = stream;
    }
    function handleError(error) {
        if (error.name === "OverconstrainedError") {
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
        errorMsg(`getUserMedia error: ${error.name}`, error);
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
                constraints
            );
            handleSuccess(stream);
          
        } catch (e) {
            handleError(e);
        }
    }
</script>

<div>
    <h2>This is a webrtc demo</h2>

    <video id="video" playsinline autoplay bind:this={video} />
    <div id="errorMsg"></div>
</div>
