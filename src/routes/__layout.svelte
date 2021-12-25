<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import "../styles/tailwind.css";
</script>

<Header />

<main>
	<slot />
</main>

<footer class="flex justify-center">
	<p>visit <a class=" btn-link" href="https://github.com/yakumwamba/google_webrtc">Yakumwamba git repo</a> to learn webrtc</p>
</footer>
