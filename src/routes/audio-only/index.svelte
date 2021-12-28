<script>
  import { browser } from "$app/env";

  import { onMount } from "svelte";

  let constraints;
  let windowObject;
  let navigator;
  let audio;
  let errorMessageBox;
  let audioTracks
  let audioTrackLabel

  onMount(async () => {
    console.log(window);
    windowObject = window;
    constraints = windowObject.constraints = {
      audio: true,
      video: false
    };
  
  });

  const handleSuccess = (stream) => {
     audioTracks = stream.getAudioTracks();
    console.log("Got stream with constraints:", constraints);
    console.log(`Using audio device: ${audioTracks[0].label}`);
    audioTrackLabel = audioTracks[0].label;

    stream.oninactive = () => {
      console.log("Stream is inactive");
    };

    windowObject.stream = stream;
    console.log("Stream stats", stream);
    audio.srcObject = stream;
  };

  const handleError = (error) => {
    const errorMessage =
      "navigator.MediaDevices.getUserMedia error: " + error.message;
    errorMessageBox.innerText = errorMessage;
    console.error(errorMessage);
  };

  const startAudioCapture = () => {
 

    windowObject.navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(handleSuccess)
      .catch(handleError);
  };

  const stopAudioCapture = () => {
    const stream = windowObject.stream;
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  };
</script>
<div class="flex items-center justify-center w-screen">
  <div class="card text-center shadow-2xl w-5/12 bg-green-300">
    <div class="card-body flex items-center justify-center gap-2">
      <h2 class="card-title text-gray">getUserMedia : audio only</h2>
  
      <div class="justify-center card-actions">
        <audio bind:this={audio} controls autoplay />
        <button
          class="btn bg-red-400 border-4  rounded-full" 
          on:click={() => {
            startAudioCapture();
          }}>Start Capture</button>
        <p class="text-red text-sm " bind:this={errorMessageBox} />
      </div>
      <div class="w-96 h-32 bg-gray-200 flex flex-start flex-col items-start p-2">
        <p>Got stream with constraints: <span><strong>{JSON.stringify(constraints)}</strong></span></p>
        <p>Using audio device : {audioTrackLabel ? audioTrackLabel : "No device connected yet" }</p>
      </div>
      <div id="meters">
        <div id="instant">
            <div class="label">Instant:</div>
            <meter high="0.25" max="1" value="0"></meter>
            <div class="value"></div>
        </div>
        <div id="slow">
            <div class="label">Slow:</div>
            <meter high="0.25" max="1" value="0"></meter>
            <div class="value"></div>
        </div>
        <div id="clip">
            <div class="label">Clip:</div>
            <meter max="1" value="0"></meter>
            <div class="value"></div>
        </div>
    </div>
    </div>
  </div>

  
  
</div>
