
const axios = require('axios');
const url = 'https://www.fsis.usda.gov/shared/data/EN/foodkeeper.json'


class Product{

    static async getAll(){
        let res = await axios.get(url);
        let data = res.data;
        let products = data.sheets[2].data;
        return products;
    }

    static async getOne(id){
        let products = await this.getAll();
        let productbyID;
       products.forEach(product => {
        if (product[0].ID === id) productbyID = product ;
       }); 
       return productbyID;
    }

    static async getAllWithCID(CID) {
        let products = await this.getAll();
        let productsCID = [];
        products.forEach(product =>{
            if (product[1].Category_ID === CID) productsCID.push(product);
        });
        return productsCID;   
    }

    static async getNameWithID(id){
        let product = await this.getOne(id);
        let name = product[2].Name;
        return name;
    }
}
module.exports = Product;

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
    return products;
  }
  let product = await Product.getNameWithID(90);
//   console.log(product[0].contains());
console.log(product);
  
}
main();