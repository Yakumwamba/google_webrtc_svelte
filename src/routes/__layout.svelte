<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import "../styles/tailwind.css";
</script>

<Header />

<main>
	<slot />
</main>

<footer class="flex flex-col items-center justify-center h-24 bg-black">
	<p class="text-gray-200">visit <a class=" btn-link text-yellow-200" href="https://github.com/yakumwamba/google_webrtc_svelte">Yakumwamba git repo</a> to learn webrtc</p>
</footer>
