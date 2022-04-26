const Category = require('../data/category');
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const { default: axios } = require('axios');
const validCall = 'https://api.genderize.io?name=luc';
const inValidCall = 'https://api.genderize.io?name=12';

describe("category, getAll", () => {
    let category = Category;
    it('Check if all categories are listed (array)', async ()=>{
        let res = await category.getAll()
        expect(res).to.be.an('array');
    });
});
describe("category, getOne", () => {
    let category = Category;
    let testID = 10;
    it('Check that an invalid ID will be undefined.', async()=>{
        let res = await category.getOne(-1);
        expect(res).to.be.undefined;
    });
    it('Verify method works with a test ID, category object is returned', async()=>{
        let res = await category.getOne(testID);
        let ID = res[0];
        expect(ID).to.be.an('object'); 
    });
});
// Category API description: id(int), name(string), subcategory(string)
// Currently set up to have the right tests but still unable to make API calls
describe('get /categories', function(){
    it('check the data type of the API call to be an array of categories', async ()=>{
        let res = await axios.get(validCall)
        expect(res).to.be.an('array');
    })
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(validCall)
        expect(res.status).to.equal(200)
    })
});
describe('get /categories/{id}', function(){
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
    it('Getting valid input for the subcategory', async ()=>{
        let res = await axios.get(validCall)
        expect(res.data.subcategory).to.equal('SubCategory')
    })
    it('Getting invalid input for name', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.name).to.equal(null)
    })
    it('Getting invalid input for id', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.id).to.equal(null)
    })
    it('Getting invalid input for subcategory', async ()=>{
        let res = await axios.get(inValidCall)
        expect(res.data.subcategory).to.equal(null)
    })
});
