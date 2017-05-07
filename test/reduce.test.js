const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a product without an explicit initial value for the accumulator', () => {
    const arr = [2, 3, 4, 5, 6];
    const result = _.reduce(arr, (a, b) => a * b);
    expect(result).toEqual(720);
  });

  it('reduces an array of an array to a single array with an explicit initial value fro the accumulator', () => {
    const arr = [[2, 3, 4]];
    const result = _.reduce(arr, (acc, values) => acc.concat(values), []);
    expect(result).toEqual([2, 3, 4]);
  });

});