import { describe, expect, it } from 'vitest';
import { isNegative, isPositive } from './number-utils';

describe('isPositive', () => {
  it('should return true for a positive number', () => {
    expect(isPositive(5)).toBe(true);
  });

  it('should return true for zero by default', () => {
    expect(isPositive(0)).toBe(true);
  });

  it('should return false for a negative number', () => {
    expect(isPositive(-5)).toBe(false);
  });

  it('should return false for zero when includingZero is false', () => {
    expect(isPositive(0, false)).toBe(false);
  });

  it('should return true for a positive decimal number', () => {
    expect(isPositive(3.14)).toBe(true);
  });
});

describe('isNegative', () => {
  it('should return true for a negative number', () => {
    expect(isNegative(-5)).toBe(true);
  });

  it('should return false for zero', () => {
    expect(isNegative(0)).toBe(false);
  });

  it('should return false for a positive number', () => {
    expect(isNegative(5)).toBe(false);
  });

  it('should return true for a negative decimal number', () => {
    expect(isNegative(-3.14)).toBe(true);
  });
});
