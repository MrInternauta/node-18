const { average } = require('./fortesting/util');

describe('Average', () => {
  test('of one value is the value itself', () => {
    expect(average([1])).toBe(1);
  })
  test('of many is calculated correctly', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
  })

  //corner case
  test('empty array expected 0', () => {
    expect(average([])).toBe(0);
  })

  test('empty array expected 0', () => {
    expect(average([])).toBe(0);
  })
})