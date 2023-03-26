const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

function fn(callback = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return callback(...args);
  };

  mockFn.mock = { calls: [] };

  mockFn.mockImplementation = (newCallback) => (callback = newCallback);

  return mockFn;
}

function spyOn(object, property) {
  let originalCallback = object[property];

  object[property] = fn();
  object[property].mockRestore = () => (object[property] = originalCallback);
}

spyOn(utils, "getWinner");
utils.getWinner.mockImplementation((p1, p2) => p1);

const winner = thumbWar("Fabrizio", "Pedro");
assert.strictEqual(winner, "Fabrizio");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Fabrizio", "Pedro"],
  ["Fabrizio", "Pedro"],
]);

// cleanup
utils.getWinner.mockRestore();
