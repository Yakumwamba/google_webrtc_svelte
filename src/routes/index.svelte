<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">

	let src = './assets/logo.png'
	import { goto } from "$app/navigation";



	const start_webrtc = () => {
		goto("/webrtc");
	}
</script>

<svelte:head>
	<title>WebRTC & Svelte</title>
</svelte:head>

<div class="hero min-h-screen bg-blue-200">
	<div class="text-center hero-content">
	  <div class="max-w-md">
		  <img src="logo.png" alt="svelte_webrtc"  />
		<h1 class="mb-5 text-5xl font-bold">
			 Hello, Devs
			</h1> 
		<p class="text-xl mb-5">
			  Learn more about webrtc and how it can be used to build a realtime application using svelte and Svelte Kit.
			</p> 
			<a href="/webrtc" class="bg-gray-200 hover:bg-gray-100 border-b-4 border-yellow-400 hover:border-gray-200 text-black text-center py-2 px-4 rounded">
				Get Started
			  </a>
	  </div>
	</div>
  </div>
