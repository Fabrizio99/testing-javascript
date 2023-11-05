const thumbwar = require("../thumb-war");
const utils = require("../utils");

jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p1),
  };
});
test("should return winner", () => {
  const winner = thumbwar("Fabrizio", "Pedro");

  expect(winner).toBe("Fabrizio");

  expect(utils.getWinner.mock.calls).toEqual([
    ["Fabrizio", "Pedro"],
    ["Fabrizio", "Pedro"],
  ]);

  utils.getWinner.mockReset();
});
