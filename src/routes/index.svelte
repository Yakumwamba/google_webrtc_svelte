<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">

	let src = './assets/logo.png'
	let background
	
	import { goto } from "$app/navigation";
import { onMount } from "svelte";

	import NET from 'vanta/dist/vanta.net.min';
	let backgroundVanta;


	onMount( () => {
		this.backgroundVanta = NET({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})
	
	})


	const start_webrtc = () => {
		goto("/webrtc");
	}
</script>

<svelte:head>
	<title>WebRTC & Svelte</title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
</svelte:head>

<div   class="hero min-h-screen bg-blue-200 " id="background">
	<div   class="text-center hero-content absolute  flex justify-center  z-10">
	  <div class="max-w-md">
		  <img src="logo.png" alt="svelte_webrtc"  />
		<h1 class="mb-5 text-5xl font-bold text-white">
			 Hello, Devs
			</h1> 
		<p class="text-xl mb-5 text-white">
			  Learn more about webrtc and how it can be used to build a realtime application using svelte and Svelte Kit.
			</p> 
			<a href="/webrtc" class="bg-gray-200 hover:bg-gray-100 border-b-4 border-yellow-400 hover:border-gray-200 text-black text-center py-2 px-4 rounded">
				Get Started
			  </a>
	  </div>
	</div>
  </div>
