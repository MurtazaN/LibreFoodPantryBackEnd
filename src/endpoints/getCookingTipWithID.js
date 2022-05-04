const CookingTips = require("../data/cookingTips.js"); //Need to add data/CookingTips in future issue

module.exports = {
  method: 'get',
  path: '/CookingTips/:id',
  async handler(request, response) {
    const id = request.params.id;
    let cookingTip;
    if( id!== undefined){
      cookingTip = await CookingTips.getOne(parseInt(id))
    }
    if (cookingTip !== undefined) {
      response.status(200).json(cookingTip);
    } else {
      response.status(404).json({
        status: 404,
        error: "Item not found",
        message: "ID does not exist"
      })
    }
  }
};
