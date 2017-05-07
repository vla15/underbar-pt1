const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of colors, given an array of house objects', () => {
    const houses = [
      { color: 'black', sqft: 1000, price: 500000},
      { color: 'green', sqft: 2000, price: 1000000},
      { color: 'yellow', sqft: 500, price: 250000},
      { color: 'green', sqft: 750, price: 300000}
    ];
    const result = _.pluck(houses, 'color');
    expect(result).toEqual(['black', 'green', 'yellow', 'green']);
  });

  it('returns array of weights, given an array of people objects', () => {
    const people = [
      { height: 5, weight: 200},
      { height: 7, weight: 300},
      { weight: 400}
    ]
    const result = _.pluck(people, 'height');
    expect(result).toEqual([5, 7, undefined]);
  });

});