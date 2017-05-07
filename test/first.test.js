const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns undefined when an object is passed in', () => {
    const testObj = {
      hi: 1,
      hello: 2
    };
    expect(_.first(testObj)).toEqual(undefined);
  });

  it('returns all the elements in the array expect the last element', () => {
    expect(_.first([1, 2, 3, 4, 5], -1)).toEqual([1, 2, 3, 4]);
  });

});