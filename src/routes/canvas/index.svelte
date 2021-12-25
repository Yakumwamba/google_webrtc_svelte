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
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    };

    const handleSuccess = (stream) => {
        video.srcObject = stream;
        video.play();
    };

    const handleError = (error) => {
        console.log("navigator.getUserMedia error: ", error);
    };

    const stopStream    = () => {
        console.log("stopping stream ....");
        const tracks = video.srcObject.getTracks();
        tracks.forEach((track) => {
            track.stop();
            console.log("stopped track ....", track.id);
        });

        video.srcObject = null;
    };
</script>

<div class="flex flex-col">
    <video bind:this={video} playsinline width="480" height="360" autoplay />

    <canvas bind:this={canvas} />

    <button class="btn btn-secondary" on:click={capture_image}
        >Take snapshot</button
    >
    <button class="btn btn-accent" on:click={enableCameraAndAudio}
        >Enable Camera</button
    >
    <button class="btn btn-warning" on:click={stopStream}
        >Stop Stream</button
    >
</div>
