const chai = require("chai");
const expect = chai.expect;
const { default: axios } = require('axios');
const getAllUrl = 'http://localhost:10001/cookingTips';
const getOnelUrl = 'http://localhost:10001/CookingTips/1';
const invalidgetOnelUrl = 'http://localhost:10001/CookingTips/-1';


describe('GET /cookingTips', function(){
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(getAllUrl)
        expect(res.status).to.equal(200)
    })
    it('check the data type of the API call to be an array of cooking methods', async ()=>{
        let res = await axios.get(getAllUrl)
        expect(res.data).to.be.an('array');
    })
});

describe('GET /cookingTips/:id with a valid ID', function(){
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(getOnelUrl)
        expect(res.status).to.equal(200)
    })
    it('Check that data type is an object', async ()=>{
        let res = await axios.get(getOnelUrl)
        expect(res.data[0]).to.be.an('object');
    })
   
    it('Check that the ID is the expected value', async ()=>{
        let res = await axios.get(getOnelUrl)
        expect(res.data[0].ID).to.equal(1)
    })
    it('Check that the Product ID is the expected value', async ()=>{
        let res = await axios.get(getOnelUrl)
        expect(res.data[1].Product_ID).to.equal(21)
    })
    it('Check that the Cooking Tips is the expected value', async ()=>{
        let res = await axios.get(getOnelUrl)
        expect(res.data[2].Tips).to.equal('Cook until yolk and white are firm.')
    })
    it('Check that the  Safe mimum Temperature is the expected value', async ()=>{
        let res = await axios.get(getOnelUrl)
        expect(res.data[3].Safe_Minimum_Temperature).to.equal(null)
    })
    it('Check that the  Rest Time is the expected value', async ()=>{
        let res = await axios.get(getOnelUrl)
        expect(res.data[4].Rest_Time).to.equal(null)
    })
    it('Check that the Rest Time Metric is the expected value', async ()=>{
        let res = await axios.get(getOnelUrl)
        expect(res.data[5].Rest_Time_metric).to.equal(null)
    })
});

describe('GET /cookingMethods/:id with an invalid ID', function(){
    it('Getting invalid input for name, Expect 404 Error', async ()=>{
        let res = await axios.get(invalidgetOnelUrl)
        expect(res.status).to.equal(404)
    })
});