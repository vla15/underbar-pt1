const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });

    it('returns true is all values in an object are even', () => {
      const nums = { 
        hello: 2, 
        test: 4, 
        weird: 6 
      }
      expect(_.every(nums, num => num % 2 === 0)).toBe(true);
    });

    it('should return false since strings are not even numbers', () => {
      const nums = {
        hello: 'why there', 
        ten: 10, 
        four: 4, 
        dont: 'stop'
      }
      expect(_.every(nums, num => num % 2 === 0)).toBe(false);
    });

  });
});