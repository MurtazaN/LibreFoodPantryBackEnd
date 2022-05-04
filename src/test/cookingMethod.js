/* Author: Murtaza Nipplewala
*/
const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const CookingMethod = require('../data/cookingMethod');
const { default: axios } = require('axios');
const validCall = 'https://api.genderize.io?name=luc';
const inValidCall = 'https://api.genderize.io?name=12';


describe("cookingMethod, getAll", () => {
    let cookingMethod = CookingMethod;    
    it("Verify if all cooking Method are listed in an array", async ()=>{
        let res = await cookingMethod.getAll();
        expect(res).to.be.an('array');
    });
});

describe("cookingMethod, getOne", () => {
    let cookingMethod = CookingMethod;
    let randomCookingMethodID = Math.round(Math.random() * 100);
    
    //this
    it("Verify response is an array", async() =>{
        let res = await cookingMethod.getOne(randomCookingMethodID);
        expect(res).to.be.an('array');
    });
    
    it("Verify invalid ID will return undefined", async() =>{
        let res = await cookingMethod.getOne(-1);
        expect(res).to.be.undefined;
    });

    //this
    it("Verify method works with a random ID, and a cooking method object is returned", async() =>{
        let res = await cookingMethod.getOne(randomCookingMethodID);
        let ID = res[0];
        expect(ID).to.be.an('object');
    });
});
// Cooking Method API description: id(int), name(string)
// Currently set up but need a team member to run and test
describe('get /cookingMethods', function(){
    it('check the data type of the API call to be an array of cooking methods', async ()=>{
        let res = await axios.get(validCall)
        expect(res).to.be.an('array');
    })
    it('Check status response code (200)', async ()=>{
        let res = await axios.get(validCall)
        expect(res.status).to.equal(200)
    })
});
describe('get /cookingMethods/{id}', function(){
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
