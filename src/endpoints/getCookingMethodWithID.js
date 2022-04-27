const CookingMethods = require("../data/cookingMethod.js"); //Need to add data/CookingMethods in future issue

module.exports = {
  method: 'get',
  path: '/CookingMethods/:id',
  async handler(request, response) {
    const id = request.params.id;
    const cookingMethods = await CookingMethods.getOne(id); //CookingMethods.getOne() needs to be implemented
    if (cookingMethods !== null) {
      response.status(200).json(cookingMethods);
    } else {
      response.status(404).json({
        status: 404,
        error: "Item not found",
        message: "ID does not exist"
      })
    }
  }
};
