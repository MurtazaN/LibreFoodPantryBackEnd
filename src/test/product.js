const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const Product = require('../data/product.js');
const { default: axios } = require('axios');
const getAllUrl = 'http://localhost:10001/product';
const getOnelUrl = 'http://localhost:10001/product/';
const productsByCatIDUrl = 'http://localhost:10001/product/category/';
const getNameUrl = 'http://localhost:10001/product/1/name';

describe("GET /product", () => {
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(getAllUrl)
        expect(res.status).to.equal(200)
    })
    it("Verify response is an array", async ()=>{
        let res = await axios.get(getAllUrl)
        expect(res.data).to.be.an('array');
    });
});

describe("GET /product:id " , async() => {
    let randomProductID = Math.round(Math.random() * 300);
    let randomProductUrl = getOnelUrl.concat(randomProductID.toString())
    let invalidUrl = getOnelUrl.concat('-1');
    
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(randomProductUrl)
        expect(res.status).to.equal(200)
    })
    it("Verify response is an array", async() =>{
        let res = await axios.get(randomProductUrl);
        expect(res.data).to.be.an('array');
    });

    it("Verify first element is an object", async() =>{
        let res = await axios.get(randomProductUrl);
        expect(res.data[0].ID).to.equal(randomProductID);
    });
    it("Verify invalid inputs fails with 404", async() =>{
        let res = await axios.get(invalidUrl);
        expect(res.status).to.equal(404);
    });
});

describe("GET product/category:id", () => {
    let randomCID = Math.round(Math.random() * 25);
    let randomUrl = productsByCatIDUrl.concat(randomCID.toString())
    let invalidUrl = productsByCatIDUrl.concat(-1)
    
    it("Verify response is an array", async() =>{
        let res = await axios.get(randomUrl)
        expect(res.data).to.be.an('array');
    });

    it("Verify all elements of response have expected Category ID", async() =>{
        let isCorrectCID = true;
        let res = await axios.get(randomUrl)
        res.data.forEach(product =>{
            if (product[1].Category_ID !== randomCID) isCorrectCID = false;
        });
        expect(isCorrectCID).to.be.true;
    });
    it("Verify invalid inputs fails with 404", async() =>{
        let res = await axios.get(invalidUrl);
        expect(res.status).to.equal(404);
    });
});

describe('GET /product/:id/name', () => {
    let invalidUrl = 'http://localhost:10001/product/-1/name';
    it("Verify result status is 200", async() => {
        let res = await axios.get(getNameUrl);
        expect(res.status).to.equal(200)
    });
    it("Verify result is the correct string", async() => {
        let res = await axios.get(getNameUrl);
        expect(res.data).to.be.a('string')
    });
    it("Verify result is the correct string", async() => {
        let res = await axios.get(getNameUrl);
        expect(res.data).to.equal('Butter');
    });
    it("Verify invalid inputs fails with 404", async() =>{
        let res = await axios.get(invalidUrl);
        expect(res.status).to.equal(404);
    });
});


