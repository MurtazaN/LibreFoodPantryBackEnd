const chai = require("chai");
const expect = chai.expect;
const { default: axios } = require('axios');
let invalidUrl = 'http://localhost:10001/category/-1'
var err = new TypeError('Request failed with status code 404');
let validUrl= 'http://localhost:10001/category/1'


describe('GET /categories', function(){
    it('check the data type of the API call to be an array of categories', async ()=>{
        let res = await axios.get('http://localhost:10001/category');
        expect(res.data).to.be.an('array');
    })
    it('Check status response code (200)', async ()=>{
        let res = await axios.get('http://localhost:10001/category')
        expect(res.status).to.equal(200)
    })
});

describe('GET /categories/:id with a valid ID', function(){
    it('Check status response code  is 200', async ()=>{
        let res = await axios.get(validUrl)
        expect(res.status).to.equal(200)
        
    })
    it('Check that data type is an object', async ()=>{
        let res = await axios.get(validUrl)
        expect(res.data[0]).to.be.an('object');
    })
   
    it('Check that the  category ID is the expected value', async ()=>{
        let res = await axios.get(validUrl)
        expect(res.data[0].ID).to.equal(1)
    })
    it('Check that the  category name is the expected value', async ()=>{
        let res = await axios.get(validUrl)
        expect(res.data[1].Category_Name).to.equal('Baby Food')
    })
    it('Check that the  category Subcategory name is the expected value', async ()=>{
        let res = await axios.get(validUrl)
        expect(res.data[2].Subcategory_Name).to.equal(null)
    })
});

describe('GET /categories/:id with an invalid ID', function(){
    it('Test should fail with 404', async ()=>{
        let res = await axios.get(invalidUrl)
        expect(res).to.throw(err)
        
    })
});

