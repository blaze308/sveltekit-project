<script lang="ts">
    
import { onMount } from "svelte";
	import Fab from "../../components/fab.svelte";
	import ProductCard from "../../components/productCard.svelte";
	import type { Product } from "../../app";
      
    let products: Product[] = [];
    onMount(async () => {
      products = await getProducts();
    });
  
    const getProducts = async () => {
      // const res = await fetch("https://fakestoreapi.com/products");
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      console.log(data);
  
      return data;
    };
  </script>
  
  <p class="font-bold md:ml-5 md:text-4xl sm:text-2xl sm:ml-4 m-10">Awesome Products to Use in Eternity</p>
  
  {#each products as product}
    <li class="inline">
      <ProductCard {product} />
    </li>
  {/each}
  <Fab/>