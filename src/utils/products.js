import client from "./client"


class Products {
    async getProducts() {
        let response = await client.get('/products')
            .then(res => { return res })
            .catch(error => { return JSON.stringify(error) })

        return response
    }

    async getSingleProduct(id) {
        let response = client.get(`/products/${id}`)
            .then(res => { return res })
            .catch(error => { return JSON.stringify(error) })
        return response
    }
    async addProduct() {
        let response = await client({
            method: "POST",
            url: '/products/add',
            data: JSON.stringify({
                title: 'pencil'
            })
        })
            .then(res => { return res })
            .catch(error => { return JSON.stringify(error) })
        return response
    }
    async searchProducts(query) {
        let response = await client.get(`/products/search?q=${query}`)
            .then(res => { return res })
            .catch(error => { return error })
        return response
    }
    async getCategoriesProduct() {
        let response = await client({
           method:"GET", 
           url:"/products/categories"
        })
        .then(res=> {return res})
        .catch(res=> {
            
        })

        return response
    }
    async searchCategoriesProduct(params) {
        let response = await client({
           method:"GET", 
           url:`/products/category/${params}`
        })
        .then(res=> {return res})

        return response
    }
}

export default new Products