const CookingMethods = require("../data/cookingMethod.js"); 

module.exports = {
  method: 'get',
  path: '/cookingMethods', 
  async handler(request, response) {
    let cookingMethods;
    cookingMethods = await CookingMethods.getAll(); 
    response.status(200).json(cookingMethods);
  }
};

