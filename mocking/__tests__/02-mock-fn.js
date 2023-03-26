const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("returns winner", () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar("Fabrizio", "Pedro");

  expect(winner).toBe("Fabrizio");

  //better
  expect(utils.getWinner.mock.calls).toEqual([
    ["Fabrizio", "Pedro"],
    ["Fabrizio", "Pedro"],
  ]);

  // another way
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, "Fabrizio", "Pedro");
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, "Fabrizio", "Pedro");

  // cleanup
  utils.getWinner = originalGetWinner;
});
