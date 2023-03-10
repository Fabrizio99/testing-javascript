const { sum, substract, substractAsync, sumAsync } = require("./math");

// test("substract substracts number", () => {
//   const result = substract(7, 3);
//   const expected = 4;
//   expect(result).toBe(expected);
// });

// test("sum adds number", () => {
//   const result = sum(4, 5);
//   const expected = 9;
//   expect(result).toBe(expected);
// });

test("substractAsync substracts numbers asynchronously", async () => {
  const result = await substractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test("sumAsync adds numbers asynchronously", async () => {
  const result = await sumAsync(4, 5);
  const expected = 9;
  expect(result).toBe(expected);
});

// node -r ./fundamentals/setup-global.js fundamentals/index.js
