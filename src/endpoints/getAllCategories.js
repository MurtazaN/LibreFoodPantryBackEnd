const Category = require("../data/category.js");
    module.exports = {
        method: 'get',
        path: '/category',
        async handler(request, response) {
          let category = request.query.name;
          if (category === undefined) {
            categories = await category.getAll();
          } else {
            Category.getAll(category)
          }
          response.status(200).json(categories);
        }	
}