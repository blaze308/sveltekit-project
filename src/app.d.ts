// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				name: string;
				role: string;
			};
		}
		// interface PageData {}
		// interface Platform {}
	}
}

declare class Product {
	id: number;
	userId: string;
	title: string;
	description: string;
	price: number;
	category: string;
	image: string;
}

declare class Order {
	id: number;
	total: number;
	orderItems: [
		{
			price: number;
			quantity: number;
		}
	];
	userId : number
}

export { Product, Locals , Order};
