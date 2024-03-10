import { describe, expect, it } from 'vitest';
import {
  braceYourself,
  emptyStringToUndefined,
  quote,
  undefinedToEmptyString,
} from './string-utils';

describe('braceYourself', () => {
  it('should enclose a string with default braces', () => {
    expect(braceYourself('content')).toBe('{content}');
  });

  it('should enclose a string with custom braces', () => {
    expect(braceYourself('content', ['<', '>'])).toBe('<content>');
  });
});

describe('quote', () => {
  it('should enclose a string with double quotes by default', () => {
    expect(quote('text')).toBe('"text"');
  });

  it('should enclose a string with single quotes', () => {
    expect(quote('text', "'")).toBe("'text'");
  });

  it('should enclose a string with backticks', () => {
    expect(quote('text', '`')).toBe('`text`');
  });

  it('should enclose a string with acute accents', () => {
    expect(quote('text', '´')).toBe('´text´');
  });
});

describe('emptyStringToUndefined', () => {
  it('should return undefined for an empty string', () => {
    expect(emptyStringToUndefined('')).toBeUndefined();
  });

  it('should return undefined for a string with only spaces', () => {
    expect(emptyStringToUndefined('   ')).toBeUndefined();
  });

  it('should return the string if it is not empty', () => {
    expect(emptyStringToUndefined('text')).toBe('text');
  });

  it('should return undefined for null or undefined inputs', () => {
    expect(emptyStringToUndefined(null)).toBeUndefined();
    expect(emptyStringToUndefined(undefined)).toBeUndefined();
  });
});

describe('undefinedToEmptyString', () => {
  it('should return an empty string for undefined', () => {
    expect(undefinedToEmptyString(undefined)).toBe('');
  });

  it('should return the original string if it is defined', () => {
    expect(undefinedToEmptyString('defined')).toBe('defined');
  });

  it('should return an empty string for null', () => {
    expect(undefinedToEmptyString(null)).toBe('');
  });
});
