const CookingTips = require("../data/CookingTips.js"); //Need to add data/CookingTips in future issue

module.exports = {
  method: 'get',
  path: '/cookingTips', 
  async handler(request, response) {
    let cookingTips;
    cookingTips = await CookingTips.getCookingTips(); //Need to implement getCookingTips()
    response.status(200).json(cookingTips);
  }
};

