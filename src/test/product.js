const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const Product = require('../data/product');


describe("product, getAll", () => {
    let product = Product;    
    it("Verify response is an array", async ()=>{
        let res = await product.getAll();
        expect(res).to.be.an('array');
    });
});

describe("product, getOne", () => {
    let product = Product;
    let randomProductID = Math.round(Math.random() * 661);
    
    it("Verify response is an array", async() =>{
        let res = await product.getOne(randomProductID);
        expect(res).to.be.an('array');
    });
    
    it("Verify invalid ID will return undefined", async() =>{
        let res = await product.getOne(-1);
        expect(res).to.be.undefined;
    });

    it("Verify first element is an object", async() =>{
        let res = await product.getOne(randomProductID);
        let ID = res[0];
        expect(ID).to.be.an('object');
    });
});

describe("product, getAllWithCID", () => {
    let product = Product;
    let randomCID = Math.round(Math.random() * 25);
    
    it("Verify response is an array", async() =>{
        let res = await product.getAllWithCID(randomCID);
        expect(res).to.be.an('array');
    });

    it("Verify all elements of response have expected Category ID", async() =>{
        let res = await product.getAllWithCID(randomCID); 
        let isCorrectCID = true;
        // let randomID = randomID();
        res.forEach(product =>{
            if (product[1].Category_ID !== randomCID) isCorrectCID = false;
        });
        expect(isCorrectCID).to.be.true;
    });
});

describe("product, getNameWithID", () => {
    let product = Product;
    let randomProductID = Math.round(Math.random() * 661);
    
    it("Verify result is a string, from random ID", async() => {
        let res = await product.getNameWithID(randomProductID);
        expect(res).to.be.a('string');
    });

    it("Verify result is the correct string, from specific ID", async() => {
        let res = await product.getNameWithID(17);
        expect(res).to.equal('Egg substitutes');
    });
});



