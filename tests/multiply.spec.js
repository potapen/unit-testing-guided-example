const { TestScheduler } = require("jest");
const { multiply } = require("./../calculator");

describe('Multiply', () => {
  // Our tests will be added here. My test.
  test("multiplying two positive integers should return the correct value and be positive", ()=>{
    const result = multiply(2,5)
    expect(result).toBe(10)
    });
  test("multiplying a positive integer and a negative integer should return the correct value and be negative", ()=>{
    const result = multiply(3,-6)
    expect(result).toBe(-18)
    });
    test("multiplying any number with zero should return zero", ()=>{
      const result = multiply(4,0)
      expect(result).toBe(0)
      });
});
