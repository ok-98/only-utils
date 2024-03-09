import { URL } from 'url';
import { TOrUndefined } from '../types';

export const toUrl = (
  value: string | { toString: () => string },
  base?: string | URL,
): TOrUndefined<URL> => {
  try {
    const url = new URL(value, base);
    return url;
  } catch (e) {}

  return undefined;
};
