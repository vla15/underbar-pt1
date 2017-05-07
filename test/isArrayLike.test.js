const _ = require('../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      length: 10
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeObj = {
      'foo': 'bar'
    };
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
  });

  it('returns true for a string', () => {
    const string = 'hello'
    expect(_.isArrayLike(string)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      length: 5,
      1: 'what',
      2: 'there'
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
  });

});
