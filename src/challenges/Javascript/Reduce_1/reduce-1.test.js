import {
  averageArray,
  maxArray,
  minArray,
  productArray,
  sumArray,
} from './reduce-1';

describe('reduce-easy', () => {
  describe('sumArray', () => {
    it('should return the sum of all the numbers in the array', () => {
      expect(sumArray([1, 2, 3])).toBe(6);
      expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
      expect(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
    });

    it('should return 0 if the array is empty', () => {
      expect(sumArray([])).toBe(0);
    });
  });

  describe('productArray', () => {
    it('should return the product of all the numbers in the array', () => {
      expect(productArray([1, 2, 3])).toBe(6);
      expect(productArray([1, 2, 3, 4, 5])).toBe(120);
      expect(productArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(3628800);
    });

    it('should return 1 if the array is empty', () => {
      expect(productArray([])).toBe(1);
    });
  });

  describe('maxArray', () => {
    it('should return the largest number in the array', () => {
      expect(maxArray([1, 2, 3])).toBe(3);
      expect(maxArray([1, 2, 3, 4, 5])).toBe(5);
      expect(maxArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
    });

    it('should return -Infinity if the array is empty', () => {
      expect(maxArray([])).toBe(-Infinity);
    });
  });

  describe('minArray', () => {
    it('should return the smallest number in the array', () => {
      expect(minArray([1, 2, 3])).toBe(1);
      expect(minArray([1, 2, 3, 4, 5])).toBe(1);
      expect(minArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(1);
    });

    it('should return Infinity if the array is empty', () => {
      expect(minArray([])).toBe(Infinity);
    });
  });

  describe('averageArray', () => {
    it('should return the average of all the numbers in the array', () => {
      expect(averageArray([1, 2, 3])).toBe(2);
      expect(averageArray([1, 2, 3, 4, 5])).toBe(3);
      expect(averageArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
    });

    it('should return 0 if the array is empty', () => {
      expect(averageArray([])).toBe(0);
    });
  });
});
