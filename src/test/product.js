const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const Product = require('../data/product.js');
const { default: axios } = require('axios');
const validCall = 'https://api.genderize.io?name=luc';
const inValidCall = 'https://api.genderize.io?name=12';

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
// Testing API Template for Products using the name, id, and categoryId parameters. 
// Did not include subtitle or keywords parameters for this, but they might needed to be added
describe('get /products', function(){
    it('Check the data type of the API call to be an array of products', async ()=>{
        let res = await axios.get(validCall)
        expect(res).to.be.an('array');
    })
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(validCall)
        expect(res.status).to.equal(200)
    })
});
describe('get products/{id}', function(){
    it('Check that data type is an object', async ()=>{
        let res = await axios.get(validCall)
        expect(res).to.be.an('object');
    })
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(validCall)
        expect(res.status).to.equal(200)
    })
    it('Getting valid input for the id', async ()=>{
        let res = await axios.get(validCall)
        expect(res.data.id).to.equal('ID')
    })
    it('Getting valid input for the name', async ()=>{
        let res = await axios.get(validCall)
        expect(res.data.name).to.equal('Name')
    })
    it('Getting valid input for the category ID', async ()=>{
        let res = await axios.get(validCall)
        expect(res.data.categoryId).to.equal('categoryId')
    })
    it('Getting invalid input for name', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.name).to.equal(null)
    })
    it('Getting invalid input for id', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.id).to.equal(null)
    })
    it('Getting invalid input for categoryId', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.categoryId).to.equal(null)
    })
});
describe('get products/{id}/name', function(){
    it('Check that data type is an object', async ()=>{
        let res = await axios.get(validCall)
        expect(res).to.be.an('object');
    })
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(validCall)
        expect(res.status).to.equal(200)
    })
    it('Getting valid input for the id', async ()=>{
        let res = await axios.get(validCall)
        expect(res.data.id).to.equal('ID')
    })
    it('Getting valid input for the name', async ()=>{
        let res = await axios.get(validCall)
        expect(res.data.name).to.equal('Name')
    })
    it('Getting valid input for the category ID', async ()=>{
        let res = await axios.get(validCall)
        expect(res.data.categoryId).to.equal('categoryId')
    })
    it('Getting invalid input for name', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.name).to.equal(null)
    })
    it('Getting invalid input for id', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.id).to.equal(null)
    })
    it('Getting invalid input for categoryId', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.categoryId).to.equal(null)
    })
});
describe('get products/category/{categoryId}', function(){
    it('Check that data type is an object', async ()=>{
        let res = await axios.get(validCall)
        expect(res).to.be.an('object');
    })
    it('Check that category is valid', async ()=>{
        let res = await axios.get(validCall)
        expect(res.data.category).to.be.an('object');
    })
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(validCall)
        expect(res.status).to.equal(200)
    })
    it('Getting valid input for the id', async ()=>{
        let res = await axios.get(validCall)
        expect(res.data.id).to.equal('ID')
    })
    it('Getting valid input for the name', async ()=>{
        let res = await axios.get(validCall)
        expect(res.data.name).to.equal('Name')
    })
    it('Getting valid input for the category ID', async ()=>{
        let res = await axios.get(validCall)
        expect(res.data.categoryId).to.equal('categoryId')
    })
    it('Getting invalid input for name', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.name).to.equal(null)
    })
    it('Getting invalid input for id', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.id).to.equal(null)
    })
    it('Getting invalid input for categoryId', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.categoryId).to.equal(null)
    })
});


