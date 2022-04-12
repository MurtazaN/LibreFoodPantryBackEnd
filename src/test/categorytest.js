const Category = require('../data/category');
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;

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
        expect(ID).to.be.an('object'); //Undefined
    });
});
