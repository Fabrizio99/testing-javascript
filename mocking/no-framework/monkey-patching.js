const assert = require("assert");
const thumbwar = require("../thumb-war");
const utils = require("../utils");

const originalGetWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p1;
const winner = thumbwar("Fabrizio", "Pedro");

assert.strictEqual(winner, "Fabrizio");

utils.getWinner = originalGetWinner;
