<script lang="ts">
	import { onMount } from 'svelte';
	import { cart } from "../../cart";
	import ProductCard from "../../components/productCard.svelte";


	let active = 0;

	let products: Product[] = [];
	onMount(async () => {
		products = await getProducts();
	});

	const getProducts = async () => {
		const res = await fetch('http://localhost:3000/products');
		const data = await res.json();
		console.log(data);

		return data;
	};
</script>

<div class="p-10 flex flex-col">
	<div class="flex gap-10 mb-20">
		<button
			class:active={active === 1}
			on:click={() => (active = 1)}
			class="current bg-white hover:shadow-lg hover:shadow-slate-400 h-[3rem] w-[15rem] rounded-lg shadow-lg border-2 text-[1rem] font-semibold shadow-slate-300"
			>My Products</button
		>
		<button
			class:active={active === 0}
			on:click={() => (active = 0)}
			class="bg-white hover:shadow-lg hover:shadow-slate-400 h-[3rem] w-[15rem] rounded-lg shadow-lg border-2 text-[1rem] font-semibold shadow-slate-300"
			>My Orders</button
		>
		<button
			class:active={active === 2}
			on:click={() => (active = 2)}
			class="bg-white hover:shadow-lg hover:shadow-slate-400 h-[3rem] w-[15rem] rounded-lg shadow-lg border-2 text-[1rem] font-semibold shadow-slate-300"
			>Settings</button
		>
	</div>

	{#if active === 0}
		
	{#each $cart as item}
	<div class="grid grid-cols-5 pb-10 gap-5">
		<img class="w-40 h-36 object-contain" src={item.image} alt="" />

		<p class="font-semibold text-left overflow-hidden w-[15rem] capitalize">{item.title}</p>

		<p class="font-bold text-lg text-lime-500">GHC {item.price}</p>
		
		<input
		class="bg-violet-400 w-10 h-[1.9rem] rounded p-0.5 text-end"
		type="number"
		name="cart_input"
		id="cartinput"
		bind:value={item.quantity}
		/>
		<p class="font-bold text-lg text-lime-500">GHC {(item.price * item.quantity).toFixed(2)}</p>
		</div>
{/each}

	{:else if active === 1}
	<div class="grid grid-cols-4">
		{#each products as product}
			<li class="inline">
				<ProductCard {product} />
			</li>
		{/each}
	</div>
	{:else}
	<div>else</div>
	{/if}

</div>

<style>
	.active {
		background-color: #9dc69f;
	}
	
</style>
