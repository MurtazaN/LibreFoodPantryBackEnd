const Category = require("../data/category.js");
module.exports = {
  method: 'get',
  path: '/category',
  async handler(request, response) {
    let id = request.query.id;
    let categories;
    if (id === undefined) {
      categories = await Category.getAll();
    } else {
      categories = await Category.getOne(id)
    }
    //categories = JSON.stringify(categories);
    response.status(200).json(categories);
  }	
}