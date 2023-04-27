
export const load = ({ fetch, params }) => {
    console.log(params);

    const fetchProducts = async (id: string) => {
        const res = await fetch(`http://localhost:3000/products/${id}`)
        const data = await res.json();
        return data;
    }

    return {
        product: fetchProducts(params.productId)
    }
}