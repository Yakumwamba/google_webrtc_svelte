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

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
	.start_button {
		width: 100%;
		height: 50px;
		background-color: #00bcd4;
		color: white;
		border: none;
		border-radius: 5px;
		font-size: 20px;
		font-weight: bold;
		cursor: pointer;
		margin-top: 20px;
	}
	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
