/* Author: Murtaza Nipplewala
*/
const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const CookingMethod = require('../data/cookingMethod');


describe("cookingMethod, getAll", () => {
    let cookingMethod = CookingMethod;    
    it("Verify response is an array", async ()=>{
        let res = await cookingMethod.getAll();
        expect(res).to.be.an('array');
    });
});

describe("cookingMethod, getOne", () => {
    let cookingMethod = CookingMethod;
    let randomCookingMethodID = Math.round(Math.random() * 100);
    
    //this
    it("Verify response is an array", async() =>{
        let res = await cookingMethod.getOne(randomCookingMethodID);
        expect(res).to.be.an('array');
    });
    
    it("Verify invalid ID will return undefined", async() =>{
        let res = await cookingMethod.getOne(-1);
        expect(res).to.be.undefined;
    });

    //this
    it("Verify first element is an object", async() =>{
        let res = await cookingMethod.getOne(randomCookingMethodID);
        let ID = res[0];
        expect(ID).to.be.an('object');
    });
});
