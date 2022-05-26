import test from 'node:test';
import assert from 'node:assert';

test('Example', () => {
  assert.equal(1, 1)
})

test('Example', () => {
  assert.equal(1, 0, 'No match')
})


test('Example object', () => {
  assert.deepEqual({ a: 1 }, { a: 1 }, 'No match obj')
})


test('async Example object', async () => {
  const num = await Promise.resolve(1)
  assert.equal(num, 1, 'No match obj')
})

test('Try test with findLast', async () => {
  const nums = [1, 3, 4, 5, 8]
  const lastEven = nums.findLast(n => n % 2 === 0);
  assert.equal(lastEven, 8, 'Fails')
})

test('Try test with findLastIndex', () => {
  const nums = [1, 3, 4, 5, 8]
  const lastEvenIndex = nums.findLastIndex(n => n % 2 === 0);
  assert.equal(lastEvenIndex, 4, 'Fails')
})


test('Try test fetch', async () => {
  let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  const json = await response.json();
  assert.equal(json.name, 'ditto')
})