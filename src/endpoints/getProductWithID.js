const Product = require("../data/product.js");

module.exports = {
  method: 'get',
  path: '/product/:id',
  async handler(request, response) {
    const id = request.params.id;
    let product;
    if(id !== undefined) {
      product = await Product.getOne(parseInt(id));
    }
    if (product !== undefined) {
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