function fn(callback = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return callback(...args);
  };

  mockFn.mock = { calls: [] };

  mockFn.mockImplementation = (newCallback) => (callback = newCallback);

  return mockFn;
}

const utilsPath = require.resolve("../utils");
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p1),
  },
};

// console.log(require.cache);

const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const winner = thumbWar("Fabrizio", "Pedro");
assert.strictEqual(winner, "Fabrizio");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Fabrizio", "Pedro"],
  ["Fabrizio", "Pedro"],
]);

// cleanup
delete require.cache[utilsPath];
