const Category = require("../data/category.js");
module.exports = {
  method: 'get',
  path: '/category',
  async handler(request, response) {
    let category = request.query.name;
    let categories;
    if (category === undefined) {
      categories = await Category.getAll();
    } else {
      categories = await Category.getOne(category)
    }
    //categories = JSON.stringify(categories);
    response.status(200).json(categories);
  }	
}