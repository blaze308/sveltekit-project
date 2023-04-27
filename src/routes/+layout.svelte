<script>
    import "../app.css";
	import Navbar from "../components/navbar.svelte";
  </script>
  
  <Navbar/>
  
  <slot />

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
