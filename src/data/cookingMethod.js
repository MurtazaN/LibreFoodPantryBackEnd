
/**
 * Author: Murtaza Nipplewala
 * cookingMethod.js is responsible for accessing the cooking method collection in the USDA database.*/

const url = 'https://www.fsis.usda.gov/shared/data/EN/foodkeeper.json'
const axios = require('axios');
const logger = require('../lib/logger');

class CookingMethod{
    
    static async getAll(){
        let collection = await axios.get(url);
        let data = collection.data;
        let cookingMethod = data.sheets[4].data;
        return cookingMethod;
    }

    static async getOne(id){
        let collection = await this.getAll();
        let cookingMethodByID;
       collection.forEach( cookingMethod => {
        if (cookingMethod[0].ID === id) cookingMethodByID = cookingMethod ;
       }); 
       return cookingMethodByID;
    }
}

async function main(){
    let cookingMethod = await CookingMethod.getOne(1);
    console.log(cookingMethod);
  }
//   main()

module.exports = CookingMethod;

// async function main() {
//     async function getUSDAData(){
//         let res = await axios.get(url);
//         let data = res.data;
//         let version = data.sheets[0].data;
//         let categorys = data.sheets[1].data;
//         let products = data.sheets[2].data;
//         let cookingTips = data.sheets[3].data;
//         let cookingMethods = data.sheets[4].data;
//         let dataDictionary = data.sheets[5].data;
//         return products;
//     }
//     let cookingMethod = await CookingMethod.getAll();
//     //let cookingMethod = await CookingMethod.getOne(1);
//     console.log(cookingMethod);
      
// }
// main();
