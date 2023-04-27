export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const price = data.get('price');
		const tags = data.get('tags');
		const description = data.get('description');


		await fetch('http://localhost:3000/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ title, price, description, tags })
		}).then((res) => res.json()).then(() => {
            return {
                success: true
            }
        }).catch((error) => {
            console.log(error);
            
        })
	}
};
