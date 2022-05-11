const CookingMethods = require("../data/cookingMethod.js"); //Need to add data/CookingMethods in future issue

module.exports = {
  method: 'get',
  path: '/cookingMethods/:id',
  async handler(request, response) {
    const id = request.params.id;
   let cookingMethod;
   if(id!== undefined) {
     cookingMethod = await CookingMethods.getOne(parseInt(id))
   }
    if (cookingMethod !== undefined) {
      response.status(200).json(cookingMethod);
    } else {
      response.status(404).json({
        status: 404,
        error: "Item not found",
        message: "ID does not exist"
      })
    }
  }
};
