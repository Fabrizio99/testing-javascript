function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };

  mockFn.mock = {
    calls: [],
  };

  mockFn.mockImplementation = (newImpl) => (impl = newImpl);

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

const assert = require("assert");
const thumbwar = require("../thumb-war");
const utils = require("../utils");

const winner = thumbwar("Fabrizio", "Pedro");

assert.strictEqual(winner, "Fabrizio");

assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Fabrizio", "Pedro"],
  ["Fabrizio", "Pedro"],
]);

// clean up
delete require.cache[utilsPath];
