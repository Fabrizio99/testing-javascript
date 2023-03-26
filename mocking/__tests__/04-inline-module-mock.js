const thumbWar = require("../thumb-war");
const utils = require("../utils");

// monkey patching just works with require but not with modules,
// jest.mock allows us to do monkey patching even with modules

/*  jest has total control of module system
    before Jest runs our code, it transforms that to move the jest.mock 
    call up to the top of the file to ensure that the mock is in place 
    before any of our modules are loaded
*/

jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p1),
  };
});

test("returns winner", () => {
  const winner = thumbWar("Fabrizio", "Pedro");

  expect(winner).toBe("Fabrizio");

  expect(utils.getWinner.mock.calls).toEqual([
    ["Fabrizio", "Pedro"],
    ["Fabrizio", "Pedro"],
  ]);

  // cleanup
  utils.getWinner.mockReset();
});
