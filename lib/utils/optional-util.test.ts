import { describe, expect, it } from 'vitest';
import { optional } from './optional-util';

describe('optional', () => {
  describe('get', () => {
    it('should return the wrapped value if it is defined', () => {
      const value = 42;
      const optionalValue = optional(value);
      expect(optionalValue.get()).toBe(value);
    });

    it('should return undefined if the wrapped value is not defined', () => {
      const optionalValue = optional(undefined);
      expect(optionalValue.get()).toBeUndefined();
    });
  });

  describe('or', () => {
    it('should return the current optional value if it is defined', () => {
      const value = 42;
      const optionalValue = optional(value);
      const other = optional(24);
      expect(optionalValue.or(other)).toBe(optionalValue);
    });

    it('should return the provided alternative value if the current value is not defined', () => {
      const optionalValue = optional(undefined);
      const other = optional(24);
      expect(optionalValue.or(other)).toBe(other);
    });
  });

  describe('isPresent', () => {
    it('should return true if the optional value is present (defined)', () => {
      const value = 42;
      const optionalValue = optional(value);
      expect(optionalValue.isPresent()).toBe(true);
    });

    it('should return false if the optional value is not present (undefined)', () => {
      const optionalValue = optional(undefined);
      expect(optionalValue.isPresent()).toBe(false);
    });
  });

  describe('orElse', () => {
    it('should return the wrapped value if it is defined', () => {
      const value = 42;
      const optionalValue = optional(value);
      const defaultValue = 24;
      expect(optionalValue.orElse(defaultValue)).toBe(value);
    });

    it('should return the provided default value if the wrapped value is not defined', () => {
      const optionalValue = optional<number>(undefined);
      const defaultValue = 24;
      expect(optionalValue.orElse(defaultValue)).toBe(defaultValue);
    });
  });

  describe('orElseThrow', () => {
    it('should return the wrapped value if it is defined', () => {
      const value = 42;
      const optionalValue = optional(value);
      const error = new Error('Value is not defined');
      expect(optionalValue.orElseThrow(error)).toBe(value);
    });

    it('should throw the provided error if the wrapped value is not defined', () => {
      const optionalValue = optional(undefined);
      const error = new Error('Value is not defined');
      expect(() => optionalValue.orElseThrow(error)).toThrow(error);
    });
  });

  describe('map', () => {
    it('should apply the provided mapper function to the wrapped value if it is defined', () => {
      const value = 42;
      const optionalValue = optional(value);
      const mapper = (x: number) => x * 2;
      const mappedValue = optionalValue.map(mapper);
      expect(mappedValue.get()).toBe(mapper(value));
    });

    it('should return an empty optional value if the current value is not defined', () => {
      const optionalValue = optional<number>(undefined);
      const mapper = (x: number) => x * 2;
      const mappedValue = optionalValue.map(mapper);
      expect(mappedValue.isPresent()).toBe(false);
    });
  });

  describe('filter', () => {
    it('should return the current optional value if it is defined and satisfies the predicate', () => {
      const value = 42;
      const optionalValue = optional(value);
      const predicate = (x: number) => x > 0;
      const filteredValue = optionalValue.filter(predicate);
      expect(filteredValue.get()).toBe(value);
    });

    it('should return an empty optional value if the current value is not defined', () => {
      const optionalValue = optional<number>(undefined);
      const predicate = (x: number) => x > 0;
      const filteredValue = optionalValue.filter(predicate);
      expect(filteredValue.isPresent()).toBe(false);
    });

    it('should return an empty optional value if the current value does not satisfy the predicate', () => {
      const value = -42;
      const optionalValue = optional(value);
      const predicate = (x: number) => x > 0;
      const filteredValue = optionalValue.filter(predicate);
      expect(filteredValue.isPresent()).toBe(false);
    });

    it('empty should be empty', () => {
      const empty = optional.empty;
      expect(empty.isPresent()).toBe(false);
    });
  });
});
