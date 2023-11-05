const assert = require("assert");
const thumbwar = require("../thumb-war");
const utils = require("../utils");

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

function spyOn(obj, prop) {
  const original = obj[prop];

  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = original);
}

spyOn(utils, "getWinner");

utils.getWinner.mockImplementation((p1, p2) => p1);

const winner = thumbwar("Fabrizio", "Pedro");

assert.strictEqual(winner, "Fabrizio");

assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Fabrizio", "Pedro"],
  ["Fabrizio", "Pedro"],
]);

utils.getWinner.mockRestore();
