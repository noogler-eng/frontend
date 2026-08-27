import assert from "node:assert";
import funs from "../functions.js";


describe("pow", () => {
    before(() => {
        console.log("Starting pow tests...");
    })

    after(() => {
        console.log("Finished pow tests.");
    })

    afterEach(() => {
        console.log("Test completed.");
    })

    beforeEach(() => {
        console.log("Starting a new test...");
    })

    it("should return correct result for positive base and exponent", () => {
        assert.equal(funs.pow(2, 3), 8);
    });

    it("should return 1 for any base with exponent 0", () => {
        assert.equal(funs.pow(5, 0), 1);
        assert.equal(funs.pow(-3, 0), 1);
    });

    it("should return correct result for negative base and even exponent", () => {
        assert.equal(funs.pow(-2, 4), 16);
    });

    it("should return correct result for negative base and odd exponent", () => {
        assert.equal(funs.pow(-2, 3), -8);
    });

    it("should return correct result for fractional base and positive exponent", () => {
        assert.equal(funs.pow(0.5, 2), 0.25);
    });


    it("should return correct result for positive base and exponent", () => {
        assert.equal(funs.pow(2, 3), 8);
    });
});