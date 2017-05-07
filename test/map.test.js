_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every number in an array and adds one', () => {
    const arr = [2, 4, 6, 8, 10];
    const mappedArr = _.map(arr, (num) => num + 1);
    expect(mappedArr).toEqual([3, 5, 7, 9, 11]);
  });

  it('maps every string in an array and adds the letter z', () => {
    const arr = ['hi', 'friend', 'take', 'me', 'home'];
    const mappedArr = _.map(arr, (word) => word + 'z');
    expect(mappedArr).toEqual(['hiz', 'friendz', 'takez', 'mez', 'homez']);
  });

});