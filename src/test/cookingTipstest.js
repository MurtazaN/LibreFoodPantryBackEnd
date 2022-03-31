const CookingTips = require('../data/cookingTips.js');
const chai = require("chai");
const expect = chai.expect;

describe('cookingTip, getAll', function(){
    let cookingTip = CookingTips;
    it('Check if all tips are listed (array)', async ()=>{
        let res = await cookingTips.getAll()
        expect(res).to.be.an('array');
    })
});
describe('cookingTip, getOne', function(){
    let cookingTips = CookingTips;
    let testID = 50;
    it('Check that an invalid ID will be undefined.', async()=>{
        let res = await cookingTips.getOne(-1);
        expect(res).to.be.undefined;
    })
    it('Verify method works with a test ID, cookingTip object is returned', async()=>{
        let res = await cookingTips.getOne(testID)
        expect(res.type).to.be.an('cookingTip');
    })
});