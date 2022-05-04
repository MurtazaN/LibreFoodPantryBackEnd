const Category = require("../data/category.js");
    module.exports = {
        method: 'get',
        path: '/category/:id',
        async handler(request, response) {
          const id = request.params.id;
         let category;
         if(id !== undefined){
           category = await Category.getOne(parseInt(id))
         }
          if (category !== undefined) {
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