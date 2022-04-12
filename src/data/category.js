const url = "https://www.fsis.usda.gov/shared/data/EN/foodkeeper.json"
const axios = require('axios');

 class Category {
   static async getAll() {
    let res = await axios.get(url);
    let data = res.data;
    let categories = data.sheets[1].data;
    return categories;
   }
   static async getOne(id) {
    let categories = await this.getAll();
    let categoryWithID;
    categories.forEach(category => {
      if (category[0].ID === id) categoryWithID = category;
     }); 
    return categoryWithID;
  }
}
module.exports = Category;