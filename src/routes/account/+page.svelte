<script lang="ts">
	import { onMount } from 'svelte';
	import { cart } from '../../cart';
	import ProductCard from '../../components/productCard.svelte';

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
		<!-- settings  -->
		<div class="w-full">
			<p class="font-bold text-4xl mb-16">Setting Page</p>
			<div class="grid grid-cols-2 mb-10">
				<div class="col-span-1">
					<label class="block font-normal text-[1rem]" for="username">Username</label>
					<input
						class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
						type="text"
						id="username"
						name="username"
						required
					/>
				</div>

				<div class="col-span-1">
					<label class="block font-normal text-[1rem]" for="username">Email Address</label>
					<input
						class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
						type="email"
						id="email"
						name="email"
						required
					/>
				</div>
			</div>
			<div class="mb-10">
				<label class="block font-normal text-[1rem]" for="username">Password*</label>
				<input
					class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
					type="password"
					id="password"
					name="password"
					required
				/>
			</div>
			<div class="mb-10">
				<label class="block font-normal text-[1rem]" for="address">User Address</label>
				<textarea
					class="w-[28.3rem] h-[6rem] rounded-lg border-2"
					id="address"
					name="address"
					required
				/>
			</div>
			<button type="submit" class="place float-right mr-[10rem] font-semibold w-[18rem] h-[3rem] rounded"
				>Update My Details</button
			>
		</div>
	{/if}
</div>

<style>
	.active {
		background-color: #9dc69f;
	}
	.place {
		background-color: #392faf;
        
	}
</style>
