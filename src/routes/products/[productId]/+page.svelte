<script lang="ts">


	import { onMount } from 'svelte';
	import ProductCard from '../../../components/productCard.svelte';
	import { cart } from '../../../cart';
	import { addtoCart } from '../../cartFunc';
	import type { Product } from '../../../app';
	

	export let data;
	const { product } = data;

	let products: Product[] = [];
	onMount(async () => {
		products = await getProducts();
	});

	function added() {
		alert("item added")
	}

	let q = 1;

	export let total: number;
	$: {
		total = 0;
		$cart.map((item: any) => (total += item.quantity));
	}

	
	
	//filter
	const getProducts = async () => {
		const res = await fetch('http://localhost:3000/products');
		const data = await res.json();
		console.log(data);

		return data;
	};
</script>

<div class="grid grid-cols-2 h-[30rem] w-full pt-8 ">
	<div class="col-span-1 flex flex-col gap-5 ml-10">
		<img class="w-[35rem] h-[22rem] object-contain" src={product.image} alt="" />
		<div class="flex justify-start gap-10">
			<img class="w-[7rem] h-[5rem] object-contain" src={product.image} alt="" />

			<img class="w-[7rem] h-[5rem] object-contain" src={product.image} alt="" />

			<img class="w-[7rem] h-[5rem] object-contain" src={product.image} alt="" />

			<img class="w-[7rem] h-[5rem] object-contain" src={product.image} alt="" />
		</div>
	</div>
	<div class="col-span-1 w-full h-fit flex flex-col gap-5">
		<p class="font-semibold text-[2rem]">{product.title}</p>
		<p class="font-bold text-[2rem] text-lime-500">GHC {product.price}</p>
		<p class="w-[30rem] text-lg">{product.description}</p>

		<div class="flex mt-auto mx-auto gap-10 pr-28">
			<input
				class="bg-violet-400 w-12 h-[1.9rem] rounded p-0.5 text-center"
				type="number"
				name="cart_input"
				id="cartinput"
				bind:value={q}
			/>
			<button on:click={() => {
				alert(`${q} item(s) added to cart`)
				addtoCart(product,q)
				}} class="bg-green-400 hover:bg-green-500 font-semibold w-[12rem] h-[2rem] rounded">Add to Cart</button>
		</div>
	</div>
</div>

<div class="flex mt-10 flex-col ml-5">
	<p class="font-bold md:ml-5 md:text-4xl sm:text-2xl sm:ml-4 mt-36 mb-10">
		Similar and Related Products
	</p>
	<!-- {total} -->

	<div>
		{#each products as product}
			<li class="inline">
				<ProductCard {product} />
			</li>
		{/each}
	</div>
</div>

<style>
	input[type='number']::-webkit-inner-spin-button {
		padding: 0.5px;
		-webkit-appearance: value;
		opacity: 1;
		height:1.6rem;
	}
</style>
