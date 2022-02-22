//This file is for reference/ learning only
//This file will be deleted before production
const axios = require('axios');
const catFactsurl = 'https://cat-fact.herokuapp.com/facts';

https://livecodestream.dev/post/testing-in-nodejs-using-mocha-and-chai-part-2/

//Chef is a class to illustrate basic unit testing with mocha and chai
var Chef = function(){
    this.dishes = ['Dosa', 'Tea', 'Pokoras', 'Pav Bhaji'];
};
Chef.prototype.checkMenu= function(){
    //returns a string
    //returns a random dish from the dishes array
    let dish = this.dishes[Math.floor(Math.random() * this.dishes.length)];
   

    console.log("I will like to have:", dish);
    return dish;
};

Chef.prototype.getCatFacts = async function() {
    let response = await axios.get(catFactsurl);
    let data = await response.data;
    // let data = await response.data[0].text;
    return data;
  }

  
//This version is only used to print data for context
// async function main(){
//    async function printGetCatFacts() {
//         let response = await axios.get(catFactsurl);
//         let data = await response.data;
//         return data;
//       }
//       let catFacts = await printGetCatFacts();
//       console.log(catFacts);
// }
// main();

let chef = new Chef();

module.exports = chef;