/* Author: Murtaza Nipplewala
*/
const chai = require("chai");
const expect = chai.expect;
const { default: axios } = require('axios');
const getAllUrl = 'http://localhost:10001/cookingMethods';
const getOnelUrl = 'http://localhost:10001/cookingMethods/1';
const invalidgetOnelUrl = 'http://localhost:10001/cookingMethods/-1';


describe('GET /cookingMethods', function(){
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(getAllUrl)
        expect(res.status).to.equal(200)
    })
    it('check the data type of the API call to be an array of cooking methods', async ()=>{
        let res = await axios.get(getAllUrl)
        expect(res.data).to.be.an('array');
    })
});

describe('GET /cookingMethods/:id with a valid ID', function(){
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(getOnelUrl)
        expect(res.status).to.equal(200)
    })
    it('Check that data type is an object', async ()=>{
        let res = await axios.get(getOnelUrl)
        expect(res.data[0]).to.be.an('object');
    })
   
    it('Check that the  category ID is the expected value', async ()=>{
        let res = await axios.get(getOnelUrl)
        expect(res.data[0].ID).to.equal(1)
    })
    it('Check that the  Cooking_Method is the expected value', async ()=>{
        let res = await axios.get(getOnelUrl)
        expect(res.data[2].Cooking_Method).to.equal("Oven")
    })
});

describe('GET /cookingMethods/:id with an invalid ID', function(){
    it('Getting invalid input for name, Expect 404 Error', async ()=>{
        let res = await axios.get(invalidgetOnelUrl)
        expect(res.status).to.equal(404)
    })
});
