import { describe, expect, it } from 'vitest';
import {
  isDefined,
  isNotDefined,
  toNull,
  toUndefined,
  transformIfDefined,
} from './nullish-utils';

describe('isDefined', () => {
  it('should return true for non-null and non-undefined values', () => {
    expect(isDefined('string')).toBe(true);
    expect(isDefined(0)).toBe(true);
    expect(isDefined(false)).toBe(true);
    expect(isDefined([])).toBe(true);
    expect(isDefined({})).toBe(true);
  });

  it('should return false for null and undefined', () => {
    expect(isDefined(null)).toBe(false);
    expect(isDefined(undefined)).toBe(false);
  });
});

describe('isNotDefined', () => {
  it('should return false for non-null and non-undefined values', () => {
    expect(isNotDefined('string')).toBe(false);
    expect(isNotDefined(0)).toBe(false);
    expect(isNotDefined(false)).toBe(false);
    expect(isNotDefined([])).toBe(false);
    expect(isNotDefined({})).toBe(false);
  });

  it('should return true for null and undefined', () => {
    expect(isNotDefined(null)).toBe(true);
    expect(isNotDefined(undefined)).toBe(true);
  });
});

describe('toUndefined', () => {
  it('should return the value if it is defined', () => {
    expect(toUndefined('string')).toBe('string');
    expect(toUndefined(0)).toBe(0);
  });

  it('should return undefined if the value is null or undefined', () => {
    expect(toUndefined(null)).toBeUndefined();
    expect(toUndefined(undefined)).toBeUndefined();
  });
});

describe('toNull', () => {
  it('should return the value if it is defined', () => {
    expect(toNull('string')).toBe('string');
    expect(toNull(0)).toBe(0);
  });

  it('should return null if the value is undefined', () => {
    expect(toNull(undefined)).toBeNull();
  });

  // Note: Assuming the behavior is to keep null as null
  it('should return null if the value is null', () => {
    expect(toNull(null)).toBeNull();
  });
});

describe('transformIfDefined', () => {
  it('should apply the mapper function if the value is defined', () => {
    const mapper = (x: number) => x * 2;
    expect(transformIfDefined(5, mapper)).toBe(10);
  });

  it('should return undefined if the value is not defined', () => {
    const mapper = (x: number) => x * 2;
    expect(transformIfDefined(null, mapper)).toBeUndefined();
    expect(transformIfDefined(undefined, mapper)).toBeUndefined();
  });
});