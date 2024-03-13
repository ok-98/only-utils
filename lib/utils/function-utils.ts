export const EMPTY_ARROW_FUNCTION = (..._: unknown[]): void => {};
export const EMPTY_ASYNC_ARROW_FUNCTION = async (
  ..._: unknown[]
): Promise<void> => {};
export const EAF = EMPTY_ARROW_FUNCTION;
export const EAAF = EMPTY_ARROW_FUNCTION;

export const identity = <T>(value: T) => value;
