/**
 * Checks if a number is positive.
 * @param value - The number to check.
 * @param includingZero - Optional. Specifies whether zero should be considered as a positive number. Default is true.
 * @returns True if the number is positive, false otherwise.
 */
export const isPositive = (value: number, includingZero: boolean = true) =>
  includingZero
    ? isPositiveIncludingZero(value)
    : isPositiveExcludingZero(value);

/**
 * Checks if a number is positive excluding zero.
 *
 * @param value - The number to check.
 * @returns `true` if the number is positive excluding zero, `false` otherwise.
 */
export const isPositiveExcludingZero = (value: number) => value > 0;

/**
 * Checks if a number is positive, including zero.
 * @param value - The number to check.
 * @returns `true` if the number is positive or zero, `false` otherwise.
 */
export const isPositiveIncludingZero = (value: number) => value >= 0;

/**
 * Checks if a number is negative.
 *
 * @param value - The number to check.
 * @returns `true` if the number is negative, `false` otherwise.
 */
export const isNegative = (value: number) => value < 0;

/**
 * Checks if a given number is zero.
 *
 * @param value - The number to check.
 * @returns `true` if the number is zero, `false` otherwise.
 */
export const isZero = (value: number) => value === 0;

/**
 * Checks if a number is even.
 * @param value - The number to check.
 * @returns `true` if the number is even, `false` otherwise.
 */
export const isEven = (value: number) => (value & 1) === 0;

/**
 * Checks if a number is odd.
 * @param value - The number to check.
 * @returns `true` if the number is odd, `false` otherwise.
 */
export const isOdd = (value: number) => (value & 1) === 1;

/**
 * Checks if a value is a number.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a number, `false` otherwise.
 */
export const isNumber = (value: unknown): value is number =>
  typeof value === 'number';

/**
 * Checks if a value is a finite number.
 * @param value - The value to check.
 * @returns `true` if the value is a finite number, `false` otherwise.
 */
export const isFiniteNumber = (value: unknown): value is number =>
  isNumber(value) && Number.isFinite(value);
