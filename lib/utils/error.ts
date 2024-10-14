import { Promisify } from '@only/types';

export const tryCatchOrUndefined =
  <Func extends (...args: any) => any>(fn: Func) =>
  (...params: Parameters<typeof fn>): ReturnType<typeof fn> | undefined => {
    try {
      return fn(...params);
    } catch (_) {}

    return undefined;
  };

export const tryCatchOrUndefinedAsync =
  async <Func extends Promisify<(...args: any) => any>>(fn: Func) =>
  async (
    ...params: Parameters<typeof fn>
  ): Promise<ReturnType<typeof fn> | undefined> => {
    try {
      return await fn(...params);
    } catch (_) {}

    return undefined;
  };
