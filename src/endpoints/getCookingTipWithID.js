const CookingTips = require("../data/cookingTips.js"); //Need to add data/CookingTips in future issue

module.exports = {
  method: 'get',
  path: '/CookingTips/:id',
  async handler(request, response) {
    const id = request.params.id;
    const cookingTips = await CookingTips.getOne(id); //CookingTips.getOne() needs to be implemented
    if (cookingTips !== null) {
      response.status(200).json(cookingTips);
    } else {
      response.status(404).json({
        status: 404,
        error: "Item not found",
        message: "ID does not exist"
      })
    }
  }
};
