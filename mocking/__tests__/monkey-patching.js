const assert = require("assert");
const thumbwar = require("../thumb-war");
const utils = require("../utils");

test("should return winner", () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbwar("Fabrizio", "Pedro");

  expect(winner).toBe("Fabrizio");

  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenCalledWith("Fabrizio", "Pedro");
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, "Fabrizio", "Pedro");
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, "Fabrizio", "Pedro");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Fabrizio", "Pedro"],
    ["Fabrizio", "Pedro"],
  ]);

  utils.getWinner = originalGetWinner;
});
