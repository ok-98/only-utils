import { PromiseOrAwaited } from '../types';

/**
 * Checks if a value is a Promise.
 * @param value The value to check.
 * @returns True if the value is a Promise, false otherwise.
 */
export const isPromise = <T>(
  value: PromiseOrAwaited<T>,
): value is Promise<T> => {
  return value instanceof Promise;
};

/**
 * Checks if a value is already resolved from a Promise.
 * @param value - The value to check.
 * @returns `true` if the value is not a Promise, `false` otherwise.
 */
export const isAwaited = <T>(value: PromiseOrAwaited<T>): value is T => {
  return !isPromise(value);
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
