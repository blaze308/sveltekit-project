<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let current = true;

	function toggleTrue() {
		current = true;
	}
	function toggleFalse() {
		current = false;
	}
	export let form: ActionData;
</script>

<div class="grid grid-cols-2">
	<div class="grid col-span-1">
		<p class="font-bold m-10 text-4xl">Checkout Order</p>

		<!-- login detail -->
		<div class="flex flex-col ml-10">
			<div class="flex flex-col rounded-sm shadow-lg shadow-slate-300 h-[28rem] w-[34rem]">
				<!-- button div for switch -->
				<div class="flex justify-between w-full h-10">
					<button on:click={toggleTrue} class="loginBtn h-14 rounded-tl-sm w-full"
						><p>Login</p></button
					>
					<button on:click={toggleFalse} class="signupBtn h-14 rounded-tr-sm w-full"
						><p>Signup</p>
					</button>
				</div>

				{#if form?.user}
					<p class="text-red-600">Username is taken</p>
				{/if}

				{#if form?.invalid}
					<p class="text-red-600">Username and Email required</p>
				{/if}

				{#if form?.credentials}
					<p class="text-red-600">Invalid Credentials</p>
				{/if}
				{#if form?.success}
					<p class="text-red-600">Account Created</p>
				{/if}

				<!-- form div -->
				{#if current === true}
					<div class="p-10 flex">
						<form class="" method="POST" action="?/login" use:enhance>
							<div class="mb-10">
								<label class="block font-normal text-[1rem]" for="login_username"
									>Username / Email Address*</label
								>
								<input
									class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
									type="text"
									id="login_username"
									name="login_username"
									required
								/>
							</div>

							<div class="">
								<label class="block font-normal text-[1rem]" for="login_password">Password*</label>
								<input
									class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
									type="password"
									id="login_password"
									name="login_password"
									required
								/>
							</div>

							<div class="flex flex-col">
								<a href="/reset" class="reset inline-block mt-2.5 ml-auto hover:underline"
									>Forgot Password?</a
								>
								<button
									type="submit"
									class="bg-white hover:shadow-2xl hover:shadow-slate-400 h-14 rounded-lg shadow-lg border-2 text-[1.7rem] font-semibold shadow-slate-300 mt-8 w-[25rem] m-auto"
									>Portal Access</button
								>
								<p class="m-auto pt-5">
									Not a User?
									<button on:click={toggleFalse} class="reset hover:underline"
										>Create Account</button
									>
								</p>
							</div>
						</form>
					</div>
				{:else}
					<div class="p-8 flex">
						<form class="" method="POST" action="?/signup" use:enhance>
							<div class="mb-2">
								<label class="block font-normal text-[1rem]" for="signup_username">Username*</label>
								<input
									class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
									type="text"
									id="signup_username"
									name="signup_username"
									required
								/>
							</div>
							<div class="mb-2">
								<label class="block font-normal text-[1rem]" for="signup_email"
									>Email Address*</label
								>
								<input
									class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
									type="email"
									id="signup_email"
									name="signup_email"
									required
								/>
							</div>

							<div class="">
								<label class="block font-normal text-[1rem]" for="signup_password">Password*</label>
								<input
									class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
									type="password"
									id="signup_password"
									name="signup_password"
									required
								/>
							</div>

							<div class="flex flex-col">
								<button
									type="submit"
									class="bg-white hover:shadow-2xl hover:shadow-slate-400 h-14 rounded-lg shadow-lg border-2 text-[1.7rem] font-semibold shadow-slate-300 mt-8 w-[25rem] m-auto"
									>Create My Account</button
								>
								<p class="m-auto pt-5">
									Already a User?
									<button on:click={toggleTrue} class="reset hover:underline">Login</button>
								</p>
							</div>
						</form>
					</div>
				{/if}
			</div>
		</div>
		<div class="flex flex-col m-10 mt-[6rem]">
			<p>Payment method</p>
			<p>Cash on delivery with 5% shipping fee</p>
		</div>
	</div>
	<div class="col-span-1 m-10 h-fit">
		<p class="font-semibold py-5 text-lg">Shipping Address</p>
		<div class="flex ">
			<form class="" method="POST" action="?/ship" use:enhance>
				<div class="mb-10">
					<label class="block font-normal text-[1rem]" for="address">Address*</label>
					<input
						class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
						type="text"
						id="address"
						name="address"
						required
					/>
				</div>
				<div class="mb-10">
					<label class="block font-normal text-[1rem]" for="state">State/Region/Province*</label>
					<input
						class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
						type="text"
						id="state"
						name="state"
						required
					/>
				</div>
				<div class="mb-10">
					<label class="block font-normal text-[1rem]" for="country">Country*</label>
					<input
						class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
						type="text"
						id="country"
						name="country"
						required
					/>
				</div>
				<div class="mb-10">
					<label class="block font-normal text-[1rem]" for="country">Country*</label>
					<textarea
						class="w-[28.3rem] h-[9rem] rounded-lg border-2"
						id="country"
						name="country"
						required
					/>
				</div>
                <button class="place float-right text-white font-semibold w-[18rem] h-[3rem] rounded"
                    >Place Order Now</button
                >
			</form>
		</div>
	</div>
</div>

<style>
	.loginBtn {
		background-color: #69f26e;
	}
	.loginBtn > p {
		font-size: 24px;
	}

	.loginBtn:hover {
		background-color: #4ce451;
	}
	.signupBtn > p {
		color: white;
		font-size: 24px;
	}
	.signupBtn {
		background-color: #ea6a6a;
	}
	.signupBtn:hover {
		background-color: #f34949;
	}
	.reset {
		color: #60279a;
		font-size: 15px;
	}
	.place {
		background-color: #392faf;
        
	}
</style>
