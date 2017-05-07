const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups object values', () => {
    const people = {
      people: 5,
      save: 10,
      three: 5,
      two: 'man'
    };
    expect(_.uniq(people)).toBe([5, 10, 'man']);
  });

});