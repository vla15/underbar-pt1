const _ = require('../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 4)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 7)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Rarity')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Applejack')).toBe(false);
  });

  it('returns true if the target value is among the value of an object', () => {
    const powerRangers = {
      red: 'jason',
      black: 'zack',
      green: 'tommy',
      yellow: 'trinny',
      blue: 'billy',
      pink: 'kimberly'
    };
    expect(_.contains(powerRangers, 'tommy')).toBe(true);
  });

  it('returns false when the target value is an object and is among the values of the original object', () => {
    const world = {
      hello: 1,
      there: 2,
      much: { 
        there: true 
      }
    };
    const test = { 
      there: true 
    };
    expect(_.contains(world, test)).toBe(false);
  });

});