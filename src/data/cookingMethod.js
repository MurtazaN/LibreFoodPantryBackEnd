
/**
 * Author: Murtaza Nipplewala
 * cookingMethod.js is responsible for accessing the cooking method collection in the USDA database.*/

//const Database = require("../lib/database.js");
const url = 'https://www.fsis.usda.gov/shared/data/EN/foodkeeper.json'
const axios = require('axios');

class CookingMethod{
    /**my own
    static async getAll(){
        let collection = await axios.get(Database);
        let result = collection.data;
        let cookingMethod = result.cookingMethod.data;
        return cookingMethod;
    }

    /*Similar to Jim's
     */  
    static async getAll(){
        let collection = await axios.get(url);
        let data = collection.data;
        let cookingMethod = data.sheets[4].data;
        return cookingMethod;
    }

    /*Similar to Jim's
     */ 
    static async getOne(id){
        let collection = await this.getAll();
        let cookingMethodID;
       collection.forEach( cookingMethod => {
        if (collection.ID === id) cookingMethodByID = cookingMethod ;
       }); 
       return cookingMethodByID;
    }
}

module.exports = CookingMethod

async function main() {
    async function getUSDAData(){
        let res = await axios.get(url);
        let data = res.data;
        let version = data.sheets[0].data;
        let categorys = data.sheets[1].data;
        let products = data.sheets[2].data;
        let cookingTips = data.sheets[3].data;
        let cookingMethods = data.sheets[4].data;
        let dataDictionary = data.sheets[5].data;
        return products;
    }
    let cookingMethod = await CookingMethod.getAll();
    //let cookingMethod = await CookingMethod.getOne(1);
    console.log(cookingMethod);
      
}
main();
