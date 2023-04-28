// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				name: string
				role: string
			}
		}
		// interface PageData {}
		// interface Platform {}
	}
}

declare class Product {
	id: number
	description: string
	image: string
	price: number
	title: string
	tag: string
}

export {
	Product, Locals
}