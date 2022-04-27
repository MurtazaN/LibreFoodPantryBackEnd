
const apiReturn = require("./data/apiReturn.js");
const axios = require("axios");
const url = "https://foodkeeper-api.herokuapp.com/swagger-ui.html";
// const 
class Helper{
    static async help(){
        let page = await axios.get(url);
        console.log(page);
        console.log("Hello");
    }
}

Helper.help();

