<script>
	import { cart } from "../../cart";

    
</script>

<div>
	<p class="font-bold m-10 text-4xl">My Cart</p>

	{#each $cart as item}
    <div class="relative flex pl-10 pb-5">
		<img
            class="w-36 h-28"
			src={item.image}
			alt=""
		/>
        <button class="bg-green-400 hover:bg-green-500 w-10 h-10 absolute mt-[4.5rem]">X</button>

     	<p class="font-semibold">{item.title}</p>
		
	</div>
    {/each}

	
</div>


<style>
   
</style>
