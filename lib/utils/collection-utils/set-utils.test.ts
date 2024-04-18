import { describe, expect, it } from 'vitest';
import { filterNullishSet } from './list-utils.ts';

describe('filterNullishSet', () => {
  it('should filter out null and undefined values from a set', () => {
    const set = new Set([1, null, 2, undefined]);
    expect(filterNullishSet(set)).toEqual(new Set([1, 2]));
  });
  it('should filter out null and undefined values from a set', () => {
    expect(filterNullishSet(1)).toEqual(new Set([1]));
  });
});
