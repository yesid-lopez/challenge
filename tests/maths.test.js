const { expect } = require("@jest/globals");
const { sum, power } = require("../src/maths");

describe("Sum of positive numbers", () => {
  it("is working successfully", () => {
    const firstNumber = 5;
    const secondNumber = 5;

    expect(sum(firstNumber, secondNumber)).toBe(10);
  });
});

describe("Power of positive numbers", () => {
  it("is working successfully", () => {
    const firstNumber = 5;
    const secondNumber = 2;

    expect(power(firstNumber, secondNumber)).toBe(25);
  });
});
