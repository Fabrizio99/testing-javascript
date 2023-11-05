const thumbwar = require("../thumb-war");
const utils = require("../utils");

test("should return winner", () => {
  jest.spyOn(utils, "getWinner");
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbwar("Fabrizio", "Pedro");

  expect(winner).toBe("Fabrizio");

  expect(utils.getWinner.mock.calls).toEqual([
    ["Fabrizio", "Pedro"],
    ["Fabrizio", "Pedro"],
  ]);

  utils.getWinner.mockRestore();
});
