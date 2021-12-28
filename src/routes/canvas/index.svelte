<script>
    // I created this project to learn how to use the Svelte library and to learn how to use the Svelte CLI.
    // This is a guide to how to use the Svelte CLI and webrtc in Svelte.

    import { onMount } from "svelte";

    let canvas;
    let video;
    let navigator;
    let filters;
    let brightness = 20;

    onMount(() => {
        console.log(canvas);
        canvas.width = video.width;
        canvas.height = video.height;
        navigator = navigator || window.navigator;
        filters = document.querySelector(".filters");
    });

    const enableCameraAndAudio = async () => {
        console.log(navigator);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false,
            });

            handleSuccess(stream);
        } catch (err) {
            handleError(err);
        }

        //video.play();
    };
    const capture_image = () => {
        console.log("capturing images ....", video);
        canvas.className = video.className;
        canvas
            .getContext("2d")
            .drawImage(video, 0, 0, canvas.width, canvas.height);
    };

    const handleSuccess = (stream) => {
        video.srcObject = stream;
        video.play();
    };

    const handleError = (error) => {
        console.log("navigator.getUserMedia error: ", error);
    };

    const stopStream = () => {
        console.log("stopping stream ....");
        const tracks = video.srcObject.getTracks();
        tracks.forEach((track) => {
            track.stop();
            console.log("stopped track ....", track.id);
        });

        video.srcObject = null;
    };
    const filterChanged = (e) => {
        console.log("filter changed ....", e.target.value);
        video.className = e.target.value;
    };

    const changingBrightness = (e) => {
        console.log("changing brightness ....", e.target.value);
        if (e.target.value < 50) {
            brightness = 0;
        } else if (e.target.value > 50) {
            brightness = 100;
        } else {
            brightness = 20;
        }
        video.className = "brightness-75";
    };
</script>

<div class="flex flex-col">
    <video bind:this={video} playsinline width="480" height="360" autoplay>
        <track kind="captions" />
    </video>

    <canvas bind:this={canvas} />
    <p>Brightness</p>
    <input
        on:change={changingBrightness}
        type="range"
        max="100"
        value={brightness}
        class="range"
    />
    <label for="filter">Filter: </label>
    <select
        class="form-select appearance-none
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        bind:this={filters}
        on:change={filterChanged}
    >
        <option> None </option>
        <option value="grayscale"> Grayscale </option>
        <option value="sepia"> Serpia </option>
        <option value="invert"> Invert </option>
        <option value="blur"> Blur </option>
    </select>
    <button class="btn btn-secondary" on:click={capture_image}
        >Take snapshot</button
    >
    <button class="btn btn-accent" on:click={enableCameraAndAudio}
        >Enable Camera</button
    >
    <button class="btn btn-warning" on:click={stopStream}>Stop Stream</button>
</div>
