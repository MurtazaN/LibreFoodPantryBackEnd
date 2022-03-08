const url = "https://www.fsis.usda.gov/shared/data/EN/foodkeeper.json"
const { ID } = require("axios");
 class Category {
   static async getAll() {
     const categoryCollection = await axios.get(url);
     const category_cursor = categoryCollection.find();
     let categories = await category_cursor.toArray();
     categories.forEach(category => {
       category._id =  category._id.toHexString();
     });
     return categories;
   }
   static async getOne(id) {
    const categories= await this.getAll();
    let category = await categories.findOne({ _id: ID(id) });
    if (category !== null) {
      category._id = category._id.toHexString();
    }
    return category;
  }
}