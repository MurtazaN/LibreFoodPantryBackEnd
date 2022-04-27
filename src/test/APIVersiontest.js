const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const axios = require('axios');

describe("APIGetVersion", () => {
    it('Check if status is valid' ,async ()=>{
        let res = await axios.get('http://localhost:10001/version')
        expect(res.status).to.equal(200);
    });

    it('Check if version number equals 0.1.0' ,async ()=>{
        let res = await axios.get('http://localhost:10001/version')
        expect(res.data).to.equal('0.1.0');
    });
});

