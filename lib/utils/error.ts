import { Promisify } from 'only-types';

export const tryCatchOrUndefined =
  <Func extends (...args: any) => any>(
    fn: Func,
    catchFn?: (e: unknown) => void,
  ) =>
  (...params: Parameters<typeof fn>): ReturnType<typeof fn> | undefined => {
    try {
      return fn(...params);
    } catch (e) {
      catchFn?.(e);
    }

    return undefined;
  };

export const tryCatchOrUndefinedAsync =
  async <Func extends Promisify<(...args: any) => any>>(
    fn: Func,
    catchFn?: (e: unknown) => void,
  ) =>
  async (
    ...params: Parameters<typeof fn>
  ): Promise<ReturnType<typeof fn> | undefined> => {
    try {
      return await fn(...params);
    } catch (e) {
      catchFn?.(e);
    }

    return undefined;
  };

export const isError = (value: unknown): value is Error =>
  value instanceof Error;
