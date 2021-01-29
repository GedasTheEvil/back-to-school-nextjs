export async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products')

    if (!res.ok) {
        throw new Error('Could not get products')
    }

    return await res.json()
}

export async function getSingleProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)

    if (!res.ok) {
        throw new Error('Could not get single products')
    }

    return await res.json()
}
