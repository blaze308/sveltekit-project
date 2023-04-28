<script>
	// @ts-nocheck

	import { enhance } from '$app/forms';
	let input;
    let container;
    let image;
    let placeholder;
      let showImage = false;
  
    function onChange() {
      const file = input.files[0];
          
      if (file) {
              showImage = true;
  
        const reader = new FileReader();
        reader.addEventListener("load", function (loadevent) {
          image.setAttribute("src", reader.result);
		//   console.log(loadevent.target.result.length);
        });
        reader.readAsDataURL(file);
		return;
	} 
	showImage = false; 
}
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
					<input bind:this={input} on:change={onChange} type="file" name="image" />
					<div class="imagediv" bind:this={container}>
						{#if showImage}
							<img class="inputImage" bind:this={image} src="" alt="Preview" />
						{:else}
							<span bind:this={placeholder}>Image Preview</span>
						{/if}
					</div>
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

	input::-webkit-textfield-decoration-container {
    font-weight: bold;
    color: dodgerblue;
    padding: 0.5em;
    border: thin solid grey;
    border-radius: 3px;
}

.imagediv {
	width: 300px;
	min-height: 100px;
	border: 2px solid #ddd;
	margin-top: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	color: #ccc;
  }
  .inputImage {
	width: 100%;
  }
</style>

