import { describe, expect, it } from 'vitest';
import { isTruthy } from './bool-utils.ts';

describe('isTruthy', () => {
  it('should return true for truthy values', () => {
    expect(isTruthy(true)).toBe(true);
    expect(isTruthy(1)).toBe(true);
    expect(isTruthy('hello')).toBe(true);
  });

  it('should return false for falsy values', () => {
    expect(isTruthy(false)).toBe(false);
    expect(isTruthy(0)).toBe(false);
    expect(isTruthy('')).toBe(false);
    expect(isTruthy(null)).toBe(false);
    expect(isTruthy(undefined)).toBe(false);
  });

  it('should return true for truthy arrays', () => {
    expect(isTruthy([1, 2, 3])).toBe(true);
    expect(isTruthy(['a', 'b', 'c'])).toBe(true);
    expect(isTruthy([{ name: 'John' }, { name: 'Jane' }])).toBe(true);
  });

  it('should return false for falsy arrays', () => {
    expect(isTruthy([])).toBe(false);
    expect(isTruthy([null, undefined])).toBe(false);
    expect(isTruthy([0, false, ''])).toBe(false);
  });
});
