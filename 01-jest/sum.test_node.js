const sum = require('./sum');

const checks = [
  {
    a: 1,
    b: 2,
    result: 3
  },
  {
    a: 3,
    b: 2,
    result: 5
  },
  {
    a: 5,
    b: 3,
    result: 8
  },
  {
    a: -10,
    b: 5,
    result: -5
  }
]
checks.forEach(element => {
  let { a, b, result } = element;
  console.assert(sum(a, b) == result,
    `The sum of ${a} and ${b} expected to be ${result}`
  )
});
console.log(`Check performance ${check.length}`);
