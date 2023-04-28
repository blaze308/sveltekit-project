<script>
	import NavbarLoggedOut from './../components/navbarLoggedOut.svelte';
	import { page } from '$app/stores';
	import '../app.css';
	import NavbarLoggedIn from '../components/navbarLoggedIn.svelte';
	import Navbar from '../components/navbarLoggedIn.svelte';
</script>

<!-- <NavbarLoggedIn/>
<NavbarLoggedOut/> -->
{#if !$page.data.user}
<NavbarLoggedOut/>
{:else}
<NavbarLoggedIn/>
{/if}

<main>
	<slot />
</main>

<style>
	:global(*) {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-decoration: none;
		color: black;
	}
</style>
