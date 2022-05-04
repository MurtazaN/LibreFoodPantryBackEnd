const CookingTips = require('../data/cookingTips.js');
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const { default: axios } = require('axios');
const validCall = 'https://api.genderize.io?name=luc';
const inValidCall = 'https://api.genderize.io?name=12';

describe('cookingTips, getAll', function(){
    let cookingTip = CookingTips;
    it('Check if all tips are listed (array)', async ()=>{
        let res = await cookingTip.getAll()
        expect(res).to.be.an('array');
    })
});
describe('cookingTips, getOne', function(){
    let cookingTips = CookingTips;
    let testID = 50;
    it('Check that an invalid ID will be undefined.', async()=>{
        let res = await cookingTips.getOne(-1);
        expect(res).to.be.undefined;
    })
    it('Verify method works with a test ID, array is returned', async()=>{
        let res = await cookingTips.getOne(testID)
        expect(res).to.be.an('array');
    })
    it('Verify that array returned by testID is correct size', async()=>{
        let res = await cookingTips.getOne(testID)
        expect(res.length).to.equal(6);
    })
});
// Cooking Tip API description: id(int), name(string)
// Currently set up to have the right tests but need one team member to run
describe('get /cookingTips', function(){
    it('check the data type of the API call to be an array of cooking Tips', async ()=>{
        let res = await axios.get(validCall)
        expect(res).to.be.an('array');
    })
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(validCall)
        expect(res.status).to.equal(200)
    })
});
describe('get /cookingTips/{id}', function(){
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
    it('Getting invalid input for name', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.name).to.equal(null)
    })
    it('Getting invalid input for id', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.id).to.equal(null)
    })
});
