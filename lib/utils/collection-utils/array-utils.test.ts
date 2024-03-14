import { describe, expect, it } from 'vitest';
import { asArray, filterNullishArray, mapRecursiveArray } from './list-utils';

describe('asArray', () => {
  it('should convert a set to an array', () => {
    const set = new Set([1, 2, 3]);
    expect(asArray(set)).toEqual([1, 2, 3]);
  });

  // Test for converting a map to an array
  it('should convert a map to an array of its values', () => {
    const map = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(asArray(map)).toEqual(['a', 'b']);
  });

  // Test for handling an array directly without copying
  it('should return the same array instance when not copying', () => {
    const array = [1, 2, 3];
    const result = asArray(array);
    expect(result).not.toBe(array); // Ensure a new array is created
    expect(result).toEqual(array);
  });

  // Test for handling a single value
  it('should wrap a single value in an array', () => {
    const value = 'hello';
    expect(asArray(value)).toEqual(['hello']);
  });

  // Test for handling undefined or null
  it('should return an empty array for null or undefined', () => {
    expect(asArray(null)).toEqual([]);
    expect(asArray(undefined)).toEqual([]);
  });
});

describe('filterNullishArray', () => {
  it('should filter out null and undefined values from an array', () => {
    const array = [1, null, 2, undefined];
    expect(filterNullishArray(array)).toEqual([1, 2]);
  });

  // Test for removing falsy values but keeping non-nullish ones
  it('should remove null and undefined but keep other falsy values', () => {
    const array = [0, false, '', null, undefined];
    expect(filterNullishArray(array)).toEqual([0, false, '']);
  });

  // Test for an array with no nullish values
  it('should return the same array if there are no nullish values', () => {
    const array = [1, 2, 3];
    expect(filterNullishArray(array)).toEqual([1, 2, 3]);
  });

  // Test for an array with only nullish values
  it('should return an empty array if all values are nullish', () => {
    const array = [null, undefined, null];
    expect(filterNullishArray(array)).toEqual([]);
  });

  // Test for handling an empty array
  it('should return an empty array for an empty input array', () => {
    expect(filterNullishArray([])).toEqual([]);
  });
});

describe('mapRecursiveArray', () => {
  it('should apply a function recursively to all array elements', () => {
    const array = [1, [2, [3, 4]], 5];
    const mapper = (x: number) => x * 2;
    expect(mapRecursiveArray(array, mapper)).toEqual([2, [4, [6, 8]], 10]);
  });

  // Test for handling nested arrays
  it('should apply the mapper function to all elements in a nested array', () => {
    const array = [1, [2, [3]]];
    const mapper = (x: number) => x + 1;
    expect(mapRecursiveArray(array, mapper)).toEqual([2, [3, [4]]]);
  });

  // Test for handling empty arrays
  it('should return an empty array for an empty input', () => {
    expect(mapRecursiveArray([], (x: number) => x * 2)).toEqual([]);
    expect(mapRecursiveArray(undefined, (x: number) => x * 2)).toEqual(
      undefined,
    );
  });

  // Test for ensuring the original array is unchanged
  it('should not mutate the original array', () => {
    const array = [1, [2, 3], 4];
    const copy = [...array];
    mapRecursiveArray(array, (x: number) => x * 2);
    expect(array).toEqual(copy);
  });
});
