const axios = require('axios');
const url = 'https://www.fsis.usda.gov/shared/data/EN/foodkeeper.json'
const localURL = 'http://localhost:10001/category '

class CookingTip{

    static async getAll(){
        let res = await axios.get(url);
        let data = res.data;
        let cookingTips = data.sheets[3].data;
        return cookingTips; 
    }

    static async getOne(id){
        let tip = await this.getAll();
        let cookingTipID;
        tip.forEach(tip => {
        if (tip[0].ID === id) cookingTipID = tip ;
       }); 
       return cookingTipID;
    }
}

module.exports = CookingTip;

//main() is for testing, it will be replaced once we create test files
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
    return cookingTips;
  }
  let tip = await CookingTip.getOne(21);
  let result = await axios.get(localURL);
// console.log(tip);
  
}
// main();