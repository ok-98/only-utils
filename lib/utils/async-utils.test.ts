import { describe, expect, it } from 'vitest';
import { isAwaited, isPromise } from './async-utils';

describe('isPromise', () => {
  it('should return true if the value is a Promise', () => {
    const value = new Promise((resolve) => resolve('test'));
    expect(isPromise(value)).toBe(true);
  });

  it('should return false if the value is not a Promise', () => {
    const value = 'test';
    expect(isPromise(value)).toBe(false);
  });
});

describe('isAwaited', () => {
  it('should return true if the value is not a Promise', () => {
    const value = 'test';
    expect(isAwaited(value)).toBe(true);
  });

  it('should return false if the value is a Promise', () => {
    const value = new Promise((resolve) => resolve('test'));
    expect(isAwaited(value)).toBe(false);
  });
});
