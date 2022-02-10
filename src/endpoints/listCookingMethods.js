const CookingTips = require("../data/CookingMethods.js"); //Need to add data/CookingTips in future issue

module.exports = {
  method: 'get',
  path: '/cookingTips', 
  async handler(request, response) {
    let cookingTips;
    cookingTips = await CookingTips.getCookingMethods(); //Need to implement getCookingMethods()
    response.status(200).json(cookingTips);
  }
};

