const Product = require("../data/product.js");

    module.exports = {
        method: 'get',
        path: '/product',
        async handler(request, response) {
        
          let product = request.query.name;
          if (product === undefined) {
            products = await product.getAll();
          } else {
            Product.getAll(product)
          }
          response.status(200).json(product);
        }	
}