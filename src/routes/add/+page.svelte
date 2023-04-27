<script>
	import { enhance } from '$app/forms';

    let input;
</script>

<div class="grid h-fit">
	<p class="font-semibold py-5 text-lg text-center">Add New Product</p>
	<div class="flex m-auto">
		<form class="" method="POST" action="?/add" use:enhance>
			<div class="mb-10">
				<label class="block font-normal text-[1rem]" for="title">Product Name*</label>
				<input
					class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
					type="text"
					id="title"
					name="title"
					required
				/>
			</div>
			<div class="mb-10">
				<label class="block font-normal text-[1rem]" for="price">Price*</label>
				<input
					class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
					type="text"
					id="price"
					name="price"
					required
				/>
			</div>
			<div class="mb-10">
				<label class="block font-normal text-[1rem]" for="tags">Tags*</label>
				<input
					class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
					type="text"
					id="tags"
					name="tags"
					required
				/>
			</div>
			<div class="mb-10">
				<label class="block font-normal text-[1rem]" for="description">Description*</label>
				<textarea
					class="w-[28.3rem] h-[9rem] rounded-lg border-2"
					id="description"
					name="description"
					required
				/>
			</div>
			<div class="mb-10">
				<label class="block font-normal text-[1rem]" for="images">Product Images*</label>
				<div class="flex justify-start gap-10">
                    
                </div>
			</div>
			<button type="submit" class="place float-right font-semibold w-[18rem] h-[3rem] rounded"
				>Add New Product</button
			>
		</form>
	</div>
</div>


<style>
    .place {
		background-color: #392faf;
        
	}
</style>