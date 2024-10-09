import { AnyFunction, AsyncFunctionOrNot, PromiseOrAwaited } from 'only-types';

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

/**
 * Pauses the execution for a specified amount of time.
 * @param ms - The number of milliseconds to sleep.
 * @returns A Promise that resolves after the specified time has elapsed.
 */
export const sleep = async (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Executes a function after a specified delay.
 *
 * @param ms - The delay in milliseconds.
 * @param fn - The function to be executed.
 * @param funcProps - The parameters to be passed to the function.
 * @returns A promise that resolves with the result of the function execution.
 */
export const delayedFunction = async <R = void>(
  ms: number,
  fn: AsyncFunctionOrNot<AnyFunction<R>>,
  ...funcProps: Parameters<AnyFunction<R>>
): Promise<R> => {
  await sleep(ms);
  return await fn(...funcProps);
};

/**
 * Retries the provided function a maximum number of times until it succeeds or the maximum number of retries is reached.
 *
 * @template R - The return type of the function being retried.
 * @param {number} maxRetries - The maximum number of retries.
 * @param {AsyncFunctionOrNot<AnyFunction<R>>} fn - The function to be retried.
 * @param {...Parameters<AnyFunction<R>>} funcProps - The parameters to be passed to the function.
 * @returns {Promise<R>} - A promise that resolves with the result of the function.
 * @throws {Error} - If the maximum number of retries is reached without the function succeeding.
 */
export const retry = async <R = void>(
  maxRetries: number,
  fn: AsyncFunctionOrNot<AnyFunction<R>>,
  ...funcProps: Parameters<AnyFunction<R>>
): Promise<R> => {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      return await fn(...funcProps);
    } catch (error) {
      retries++;
    }
  }
  throw new Error('Maximum number of retries reached');
};

/**
 * Asynchronously applies a function to each element in an array and returns an array of the results.
 *
 * @template T The type of the elements in the input array.
 * @template R The type of the elements in the resulting array.
 * @param array The input array.
 * @param fn The function to apply to each element in the array.
 * @returns A promise that resolves to an array of the results.
 */
export const mapAsync = async <T, R>(
  array: T[],
  fn: (value: T) => PromiseOrAwaited<R>,
): Promise<R[]> => {
  const results: R[] = [];
  for (const item of array) {
    const result = await fn(item);
    results.push(result);
  }
  return results;
};

/**
 * Filters an array asynchronously based on a predicate function.
 * @param array The array to filter.
 * @param predicate The predicate function that determines whether an item should be included in the filtered array.
 * @returns A promise that resolves to the filtered array.
 */
export const filterAsync = async <T>(
  array: T[],
  predicate: (value: T) => PromiseOrAwaited<boolean>,
): Promise<T[]> => {
  const results: T[] = [];
  for (const item of array) {
    const result = await predicate(item);
    if (result) {
      results.push(item);
    }
  }
  return results;
};

/**
 * Executes multiple asynchronous functions in parallel and returns an array of their results.
 *
 * @param fns The asynchronous functions to execute.
 * @returns A promise that resolves to an array of the results of the executed functions.
 */
export const parallel = async <T>(
  ...fns: (() => PromiseOrAwaited<T>)[]
): Promise<T[]> => {
  return Promise.all(fns.map((fn) => fn()));
};
