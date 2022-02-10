const Category = require("../data/category.js");
    module.exports = {
        method: 'get',
        path: '/category/:id',
        async handler(request, response) {
          const id = request.params.id;
          const category = await Category.getOne(id);
          if (category !== null) {
            response.status(200).json(category);
          } else {
            response.status(404).json({
              status: 404,
              error: "Category not found",
              message: "ID does not exist"
            })
          }
        }
      };