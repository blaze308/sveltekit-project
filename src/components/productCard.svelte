<script lang="ts">
	import type { Product } from "../app";

    export let product: Product = {id: 0, title: "", description: "", image: "", price: 0, category: "" ,userId: ""}
</script>

<div class=" inline-block sm:p-3 md:m-3 md:p-2">
    <a href="/products/{product.id}" class="bg-white hover:scale-105 shadow-lg shadow-slate-500 rounded-md h-fit w-72 flex flex-col">
         <a href="/products/{product.id}" class="text-left p-2 m-2 hover:underline overflow-hidden capitalize h-14 text-md font-normal">{product.title}</a>
         <img class=" object-contain w-fill h-64 p-4" src={product.image} alt="">
         <p class="ml-auto pr-6 m-2 font-bold text-lg text-lime-500">GHC {product.price}</p>
    </a>
</div>