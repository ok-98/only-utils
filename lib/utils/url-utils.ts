import { URL } from 'url';
import { TOrUndefined } from '../types';

/**
 * Converts a value to a {@link URL} object.
 * @param value - The value to convert to a {@link URL}.
 * @param base - The base {@link URL} to resolve against (optional).
 * @returns The {@link URL} object if the conversion is successful, otherwise undefined.
 */
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
