const _ = require('../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(['a', 'b', 'c'])).toEqual('c');
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns the last number element of an array', () => {
    expect(_.last([1, 3, 7, 9, 12])).toEqual(12);
  });

  it('returns the last 4 elements of an array', () => {
    expect(_.last(['hello', 2, 5, 7, 'there', 3, 2], 4)).toEqual([7, 'there', 3, 2])
  });

});