const { expect } = require("@jest/globals");
const { pow } = require("../src/pow");

describe("Pow of positive numbers", () => {
  it("is working successfully", () => {
    const firstNumber = 5;
    const secondNumber = 5;

    expect(pow(firstNumber, secondNumber)).toBe(3125);
  });
});