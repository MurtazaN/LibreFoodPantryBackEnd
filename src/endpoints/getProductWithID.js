const Product = require("../data/product.js");

    module.exports = {
        method: 'get',
        path: '/product/:id',
        async handler(request, response) {
          const id = request.params.id;
          const product = await Product.getOne(id);
          if (product !== null) {
            response.status(200).json(product);
          } else {
            response.status(404).json({
              status: 404,
              error: "Product not found",
              message: "ID does not exist"
            })
          }
        }
      };