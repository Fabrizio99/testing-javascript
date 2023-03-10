async function test(title, callback) {
  try {
    await callback();

    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

function expect(value) {
  return {
    toBe(expected) {
      if (value !== expected)
        throw new Error(`Error: ${value} is not equal to ${expected}`);
    },
  };
}

global.test = test;
global.expect = expect;
