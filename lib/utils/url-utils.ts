import { CtorParam1, CtorParam2, TOrUndefined } from 'only-types';
import type { URL } from 'url';
import { isDefined } from './nullish-utils.ts';

const requireURL = (
  value: CtorParam1<typeof URL>,
  base?: CtorParam2<typeof URL>,
) => {
  const { URL: urlCtor }: { URL: typeof URL } = require('url');
  return new urlCtor(value, base);
};

/**
 * Converts a value to a {@link URL} object.
 * @param value - The value to convert to a {@link URL}.
 * @param base - The base {@link URL} to resolve against (optional).
 * @returns The {@link URL} object if the conversion is successful, otherwise undefined.
 */
export const toUrl = (
  value: CtorParam1<typeof URL>,
  base?: CtorParam2<typeof URL>,
): TOrUndefined<URL> => {
  try {
    const url = requireURL(value, base);
    return url;
  } catch (e) {}

  return undefined;
};

/**
 * Checks if a URL is valid.
 * @param value - The URL to validate.
 * @returns A boolean indicating whether the URL is valid or not.
 */
export const isUrlValid = (value: CtorParam1<typeof URL>): boolean =>
  isDefined(toUrl(value));
