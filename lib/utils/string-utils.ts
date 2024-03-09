import { isDefined } from '.';
import { Optional, TOrUndefined } from '../types';

export const braceYourself = (
  value: string,
  [start, end]: [string, string] = ['{', '}'],
): string => `${start}${value}${end}`;

export const quote = (
  value: string,
  quotation: "'" | '"' | '`' | '´' = '"',
): string => braceYourself(value, [quotation, quotation]);

export const emptyStringToUndefined = (
  value: Optional<string>,
): TOrUndefined<string> => {
  if (!isDefined(value)) {
    return undefined;
  }

  return value.trim().length === 0 ? undefined : value.trim();
};

export const undefinedToEmptyString = (value: Optional<string>) => value ?? '';
