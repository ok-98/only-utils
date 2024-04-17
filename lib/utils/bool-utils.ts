/**
 * Returns true always.
 * @param _ - any parameter (ignored)
 * @returns Always true
 */
export const alwaysTrue = (..._: undefined[]) => true;
/**
 * A utility function that always returns false.
 *
 * @param _ - any parameter (ignored)
 * @returns Always false.
 */
export const alwaysFalse = (..._: undefined[]) => false;

/**
 * Checks if a value is false.
 *
 * @param value - The value to check.
 * @returns Returns true if the value is false, otherwise returns false.
 */
export const isFalse = (value: unknown): boolean => value === false;

/**
 * Checks if the given value is true.
 *
 * @param value - The value to check.
 * @returns Returns true if the value is true, otherwise returns false.
 */
export const isTrue = (value: unknown): boolean => value === true;

/**
 * Checks if a value is a boolean.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a boolean, `false` otherwise.
 */
export const isBoolean = (value: unknown): value is boolean =>
  value === true || value === false;

/**
 * Negates a boolean value.
 *
 * @param value - The boolean value to negate.
 * @returns The negated boolean value.
 */
export const negate = (value: boolean): boolean => !value;

/**
 * Checks if a value is falsey.
 *
 * @param value - The value to check.
 * @returns `true` if the value is falsey, `false` otherwise.
 */
export const isFalseyValue = (value: unknown): boolean => !value;
/**
 * Checks if a value is truthy.
 * @param value - The value to check.
 * @returns `true` if the value is truthy, `false` otherwise.
 */
export const isTruthyValue = (value: unknown): boolean => !!value;

/**
 * Checks if a value is a truthy array.
 * @param value - The value to check.
 * @returns `true` if the value is a truthy array, `false` otherwise.
 */
export const isTruthyArray = (value: unknown[]): boolean =>
  Array.isArray(value) && value.filter(isTruthy).length > 0;

/**
 * Checks if the given value is a falsy array.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a falsy array, `false` otherwise.
 */
export const isFalsyArray = (value: unknown[]): boolean =>
  Array.isArray(value) && value.filter(isTruthy).length === 0;

/**
 * Checks if a value is truthy.
 * If the value is an array, it checks if all elements in the array are truthy.
 * If the value is not an array, it checks if the value itself is truthy.
 * @param value - The value to check.
 * @returns A boolean indicating whether the value is truthy.
 */
export const isTruthy = (value: unknown | unknown[]): boolean =>
  Array.isArray(value) ? isTruthyArray(value) : isTruthyValue(value);

/**
 * Checks if a value is falsey.
 * @param value - The value to check.
 * @returns A boolean indicating whether the value is falsey.
 */
export const isFalsey = (value: unknown | unknown[]): boolean =>
  Array.isArray(value) ? isFalsyArray(value) : isFalseyValue(value);
