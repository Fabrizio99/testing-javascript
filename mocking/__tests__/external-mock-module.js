const thumbwar = require("../thumb-war");
const utils = require("../utils");

jest.mock("../utils");
test("should return winner", () => {
  const winner = thumbwar("Fabrizio", "Pedro");

  expect(winner).toBe("Fabrizio");

  expect(utils.getWinner.mock.calls).toEqual([
    ["Fabrizio", "Pedro"],
    ["Fabrizio", "Pedro"],
  ]);

  utils.getWinner.mockReset();
});
