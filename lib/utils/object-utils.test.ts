import { describe, expect, it } from 'vitest';
import { EMPTY_OBJECT } from './const-utils';
import { hasKey, isEmptyObject } from './object-utils';

describe('hasKey', () => {
  it('should return true if the object has the key', () => {
    const obj = { a: 1, b: 2 };
    expect(hasKey(obj, 'a')).toBe(true);
  });

  it('should return false if the object does not have the key', () => {
    const obj = { a: 1, b: 2 };
    expect(hasKey(obj, 'c')).toBe(false);
  });

  it('should handle keys that exist on the prototype chain', () => {
    const obj = {};
    expect(hasKey(obj, 'toString')).toBe(true);
  });
});

describe('isEmptyObject', () => {
  it('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  it('should return true for the EMPTY_OBJECT', () => {
    expect(isEmptyObject(EMPTY_OBJECT)).toBe(true);
  });

  it('should return false for a non-empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  it('should return true for an object with only undefined values', () => {
    expect(isEmptyObject({ a: undefined })).toBe(true);
  });
});
