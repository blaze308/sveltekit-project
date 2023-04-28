import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({ locals }) => {
	// if (!locals.user) {
	// 	throw redirect(302, '/');
	// }
	// if (locals.user) {
	// 	throw redirect(302, '/add');
	// }
	
};

export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const price = data.get('price');
		const image = data.get('image');
		const tags = data.get('tags');
		const description = data.get('description');

		await fetch('http://localhost:3000/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ title, price, description, tags, image })
		})
			.then((res) => res.json())
			.then(() => {
				return {
					success: true
				};
			})
			.catch((error) => {
				console.log(error);
			});
	}
};
