const Product = require("../data/product.js");

    module.exports = {
        method: 'get',
        path: '/product/:id/name',
        async handler(request, response) {
          const id = request.params.id;
          const name = request.params.name
          const product = await Product.getNameWithID(id, name);
          if (product !== null) {
            response.status(200).json(product);
          } else {
            response.status(404).json({
              status: 404,
              error: "Product not found",
              message: "ID or Name does not exist"
            })
          }
        }
      };