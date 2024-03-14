import { describe, expect, it } from 'vitest';
import {
  emptyListToUndefined,
  hasApproximately,
  hasBetween,
  hasExactly,
  hasLessThan,
  hasMoreThan,
  isEmpty,
  nonEmpty,
} from './list-utils';

describe('isEmpty', () => {
  it('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for a non-empty map', () => {
    const map = new Map();
    map.set('key', 'value');
    expect(isEmpty(map)).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return false for a non-empty string', () => {
    expect(isEmpty('text')).toBe(false);
  });

  it('should return false ', () => {
    expect(isEmpty(235)).toBe(false);
  });
});

describe('nonEmpty', () => {
  it('should return false for an empty set', () => {
    expect(nonEmpty(new Set())).toBe(false);
  });

  it('should return true for a non-empty array', () => {
    expect(nonEmpty([1, 2, 3])).toBe(true);
  });
});

describe('emptyListToUndefined', () => {
  it('should return undefined for an empty array', () => {
    expect(emptyListToUndefined([])).toBeUndefined();
  });

  it('should return the original set if it is not empty', () => {
    const set = new Set([1, 2, 3]);
    expect(emptyListToUndefined(set)).toBe(set);
  });
});

describe('hasMoreThan', () => {
  it('should return true if an array has more than X elements', () => {
    expect(hasMoreThan([1, 2, 3, 4], 3)).toBe(true);
    expect(hasMoreThan([1, 2, 3, 4], 3, true)).toBe(true);
  });

  it('should return false if an array does not have more than X elements', () => {
    expect(hasMoreThan([1, 2], 3, true)).toBe(false);
  });
});

describe('hasLessThan', () => {
  it('should return true if a set has less than X elements', () => {
    const set = new Set([1, 2]);
    expect(hasLessThan(set, 3)).toBe(true);
  });

  it('should return false if a set has more than or equal to X elements', () => {
    const set = new Set([1, 2, 3]);
    expect(hasLessThan(set, 3)).toBe(false);
  });
});

describe('hasExactly', () => {
  it('should return true if a map has exactly X elements', () => {
    const map = new Map([
      [1, 'one'],
      [2, 'two'],
    ]);
    expect(hasExactly(map, 2)).toBe(true);
  });

  it('should return false if a map does not have exactly X elements', () => {
    const map = new Map([[1, 'one']]);
    expect(hasExactly(map, 2)).toBe(false);
  });
});

describe('hasBetween', () => {
  it('should return true if an array length is between the given range', () => {
    expect(hasBetween([1, 2, 3], [1, 4])).toBe(true);
    expect(hasBetween([1, 2, 3], [2, 4], 'excluding')).toBe(true);
    expect(hasBetween([1, 2, 3], [2, 4], 'including')).toBe(true);
  });

  it('should return false if an array length is not between the given range', () => {
    expect(hasBetween([1, 2, 3, 4], [1, 2])).toBe(false);
    expect(hasBetween([1, 2, 3, 4], [1, 3], 'excluding')).toBe(false);
    expect(hasBetween([1, 2, 3, 4], [1, 3], 'including')).toBe(false);
  });
});

describe('hasApproximately', () => {
  it('should return true if a collection length is approximately X (within a range)', () => {
    expect(hasApproximately([1, 2, 3, 4], 3, 1)).toBe(true);
  });

  it('should return false if a collection length is not approximately X (outside a range)', () => {
    expect(hasApproximately([1, 2, 3, 4, 5], 2, 1)).toBe(false);
  });
});
