const Category = require('../data/category.js');
const chai = require("chai");
const { assert } = require('chai');
const { default: axios } = require('axios');
const expect = chai.expect;

const validCall = 'https://api.genderize.io?name=luc';
const inValidCall = 'https://api.genderize.io?name=12';

//This file is an example of how we should test API calls, for future reference
//I read a few articles on the topic, and this is a simplified version
//Every endpoint should have a desribe funtion, with multiple it test cases
describe('Example API Call test function /Get Example', function(){
      
    it('check the data type of the API call', async ()=>{
        let res = await axios.get(validCall)
        expect(res).to.be.an('object');
    })

    it('Check status for all types of response Codes for example: Status should be 200', async ()=>{
        let res = await axios.get(validCall)
        expect(res.status).to.equal(200)
    })

    it('Test value of a property (ID, category, etc) with valid input', async ()=>{
        let res = await axios.get(validCall)
        expect(res.data.name).to.equal('luc')
    })
    it('Test value of a property (ID, category, etc) with invalid input', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.gender).to.equal(null)
    })
});