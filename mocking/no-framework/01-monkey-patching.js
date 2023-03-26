// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c

const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const originalGetWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Fabrizio", "Pedro");
assert.strictEqual(winner, "Fabrizio");
utils.getWinner = originalGetWinner;
