const should = require("chai").should();
const fizzBuzzer = require("../fizzBuzzer");

//unit tests for fizzBuzzer function

describe("fizzBuzzer", function(){
	//test the normal cases with numbers
	it("should return the right result for positive numbers", function(){
		const normalInputs = [
			{input: 30, result: "fizz-buzz"},
			{input: 9, result: "fizz"},
			{input: 100, result: "buzz"},
			{input: 37, result: 37}
		];
		normalInputs.forEach(function(testCase){
			fizzBuzzer(testCase.input).should.equal(testCase.result);
		});
	});

	//test non-numerical inputs
	it("should return an error for non-numerical inputs", function(){
		const inputs = [true, "foo", undefined, "5"];
		inputs.forEach(function(input){
			(function(){fizzBuzzer(input)}).should.throw(Error);
		});
	});

	//test edge cases
	it("should return the right result for edge case numbers", function(){
		const edgeInputs = [
			{input: -15, result: "fizz-buzz"},
			{input: 0, result: "fizz-buzz"},
			{input: -7, result: -7}
		];
		edgeInputs.forEach(function(testCase){
			fizzBuzzer(testCase.input).should.equal(testCase.result);
		});
	});
})