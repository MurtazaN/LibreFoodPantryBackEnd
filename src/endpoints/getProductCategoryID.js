const Product = require("../data/product.js");

    module.exports = {
        method: 'get',
        path: '/product/category/:categoryId',
        async handler(request, response) {
          const CID = request.params.categoryid;
          const product = await product.getAllWithCID(CID);
          if (product !== null) {
            response.status(200).json(product);
          } else {
            response.status(404).json({
              status: 404,
              error: "Product not found",
              message: "categoryID does not exist"
            })
          }
        }
      };