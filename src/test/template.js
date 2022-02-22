
const Chef = require('../data/template.js');
const chai = require("chai");
const { assert } = require('chai');
const expect = chai.expect;
const assert = chai.assert;

describe('Chef test', function(){
   
    let chef = Chef;
    
    it('check the dish has valid name.', function(){
        assert.isString(chef.checkMenu(), 'string');
    })

    it('check the length of dishes is valid.', function(){
        assert(chef.dishes.length > 10, 'not a valid dish array length');
    })
    
    it('check for a dish in menu.', function (){
        let dish= chef.checkMenu()
        assert.oneOf(dish, chef.dishes)

    });
    
});

describe("GET /facts", () => {
    let chef = Chef;
	
    it("should verify is response is valid", async () => {
    	let res = await chef.getCatFacts();
        expect(res[0].status.verified).to.equal(true);
	})

    it("check type of cat fact object", async () => {
    	let res = await chef.getCatFacts();
        expect(res[0].type).to.equal('cat');
	})

    it("check that the response[0] is an object", async () => {
    	let res = await chef.getCatFacts();
        expect(res[0]).to.be.a('object');
	})
})