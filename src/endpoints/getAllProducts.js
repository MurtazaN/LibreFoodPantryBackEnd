const Product = require("../data/product.js");

    module.exports = {
        method: 'get',
        path: '/product',
        async handler(request, response) {
        let products;
        products = await Product.getAll();
        return response.status(200).json(products);
        }	
}