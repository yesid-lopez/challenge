const { expect } = require("@jest/globals");
const { sum } = require("../src/maths");

describe("Sum of positive numbers", () => {
  it("is working successfully", () => {
    const firstNumber = 5;
    const secondNumber = 5;

    expect(sum(firstNumber, secondNumber)).toBe(10);
  });
});
