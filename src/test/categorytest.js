const Category = require('../data/category.js');
const chai = require("chai");
const { assert } = require('chai');
const expect = chai.expect;

describe('category, getAll', function(){
    let category = Category;
    it('Check if all categories are listed (array)', async ()=>{
        let res = await category.getAll()
        expect(res).to.be.an('array');
    })
});
describe('category, getOne', function(){
    let category = Category;
    let testID = 1000000;
    it('Check that an invalid ID will be undefined.', async()=>{
        let res = await category.getOne(-1);
        expect(res).to.be.undefined;
    })
    it('Verify method words with a test ID, category object is returned', async()=>{
        let res = await category.getOne(testID)
        expect(res.type).to.be.an('category');
    })
});
