/**
 * Checks if a number is positive.
 * @param value - The number to check.
 * @param includingZero - Optional. Specifies whether zero should be considered as a positive number. Default is true.
 * @returns True if the number is positive, false otherwise.
 */
export const isPositive = (value: number, includingZero: boolean = true) =>
  includingZero ? value >= 0 : value > 0;

/**
 * Checks if a number is negative.
 *
 * @param value - The number to check.
 * @returns `true` if the number is negative, `false` otherwise.
 */
export const isNegative = (value: number) => value < 0;
