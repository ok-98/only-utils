export const isPositive = (value: number, includingZero: boolean = true) =>
  includingZero ? value >= 0 : value > 0;
export const isNegative = (value: number) => value < 0;
