<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from "$lib/Counter.svelte";

	import { goto } from "$app/navigation";



	const start_webrtc = () => {
		goto("/webrtc");
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<button class="btn start_button" on:click={start_webrtc} > Start </button>
</section>

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
