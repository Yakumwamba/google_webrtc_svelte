<script>
    import { onMount } from "svelte";

    let canvas;
    let video;
    let navigator;

    let stream;
    let errormessage;
    let widthOutput;
    let widthInput;
    let sizeLock;
    let aspectLock;
    let dimemsions;
    let currentWidth = 0;
    let currentHeight = 0;
    //buttons and input

    let VGA;
    let HD;
    let fullHD;
    onMount(() => {
        console.log(canvas);
        // canvas.width = video.width;
        // canvas.height = video.height;
        navigator = navigator || window.navigator;
        video = document.querySelector("video");
        video.onloadedmetadata = () => {
            displayVideoDimensions("loadedmetadata");
        };

        video.onresize = () => {
            displayVideoDimensions("resize");
        };

        widthInput.onchange = constraintChange;

        sizeLock.onchange = (e) => {
            if (sizeLock.checked) {
                console.log("size locked");
                video.style.width = "100%";
            } else {
                console.log("setting auto size");
                video.style.width = "auto";
            }
        };
    });

    // constrainsts

    const vgaConstraints = {
        video: {
            width: { exact: 640 },
            height: { exact: 480 },
        },
    };
    const HDConstraints = {
        video: {
            width: { exact: 640 },
            height: { exact: 480 },
        },
    };
    const fullHDConstraints = {
        video: {
            width: { exact: 640 },
            height: { exact: 480 },
        },
    };

    //GET MEDIA

    const gotStream = (mediaStream) => {
        stream = mediaStream;
        video.srcObject = mediaStream;
        errormessage.style.display = "none";
        video.style.display = "block";

        const track = mediaStream.getVideoTracks()[0];
        const constrainsts = track.getConstraints();
        console.log("Result constraints : ", JSON.stringify(constrainsts));

        if (constrainsts && constrainsts.width && constrainsts.width.exact) {
            widthInput.value = constrainsts.width.exact;
            widthOutput.textContent = constrainsts.width.exact;
        } else if (
            constrainsts &&
            constrainsts.width &&
            constrainsts.width.min
        ) {
            widthInput.value = constrainsts.width.min;
            widthOutput.textContent = constrainsts.width.min;
        } else {
            widthInput.value = constrainsts.width.min;
            widthOutput.textContent = constrainsts.width.min;
        }
    };

    const errorMessage = (who, what) => {
        const message = `${who} :  ${what}`;
        errormessage.innerText = message;
        errormessage.style.display = "block";
        video.style.display = "none";
    };

    const clearMessage = () => {
        errormessage.style.display = "none";
    };

    const displayVideoDimensions = (whereSeen) => {
        if (video.videoWidth) {
            widthOutput.textContent = video.videoWidth;
            dimemsions.innerText =
                "Actual video dimensions: " +
                video.videoWidth +
                "x" +
                video.videoHeight;

            if (
                currentWidth !== video.videoWidth ||
                currentHeight !== video.videoHeight
            ) {
                console.log(whereSeen + ": " + dimemsions.innerText);
                currentWidth = video.videoWidth;
                currentHeight = video.videoHeight;
            }
        } else {
            dimemsions.innerText = "Video not ready ";
        }
    };

    const constraintChange = (e) => {
        widthOutput.textContent = e.target.value;
        const track = stream.getVideoTracks()[0];

        let constraints;
        if (aspectLock.checked) {
            constraints = {
                width: {
                    exact: e.target.value,
                },
                aspectRatio: {
                    exact: video.videoWidth / video.videoHeight,
                },
            };
        } else {
            constraints = {
                width: {
                    exact: e.target.value,
                },
            };
        }

        clearMessage();
        console.log("applying " + JSON.stringify(constraints));
        track.applyConstraints(constraints).then(
            () => {
                console.log("success");
                displayVideoDimensions("applyConstraints");
            },
            (error) => {
                console.log("error", error);
                errorMessage("applyConstraints", error);
            }
        );
    };

    const getMedia = (constraints) => {
        if (stream) {
            stream.getTracks().forEach((track) => track.stop());
        }
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(gotStream)
            .catch((error) => {
                errorMessage("getUserMedia", error);
            });
    };

    const vgaButton = () => {
        console.log("VGA button clicked");
    };
    const HDButton = () => {
      getMedia(HDConstraints);
    };
    const fullHDButton = () => {
        console.log("Full HD button clicked");
    };
</script>

<div class="flex flex-col justify-center h-screen items-center gap-2">
    <h>Select the camera resolution</h>

    <button class="btn btn-primary" bind:this={VGA} on:click={vgaButton}
        >VGA
    </button>
    <button class="btn btn-primary" bind:this={HD} on:click={HDButton}
        >HD
    </button>
    <button class="btn btn-primary" bind:this={fullHD} on:click={vgaButton}>
        FULL HD
    </button>
</div>

<div id="videoblock">
    <p bind:this={dimemsions} />

    <video bind:this={video} playsinline autoplay />
    <div id="width">
        <label>Width <span bind:this={widthOutput} />px:</label>
        <input
            bind:this={widthInput}
            type="range"
            min="0"
            max="7680"
            value="0"
        />
    </div>
    <input bind:this={sizeLock} type="checkbox" />Lock video size<br />
    <input bind:this={aspectLock} type="checkbox" />Lock aspect ratio<br />
</div>
<p bind:this={errorMessage} />
xc