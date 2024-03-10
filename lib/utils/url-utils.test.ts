import { describe, expect, it } from 'vitest';
import { toUrl } from './url-utils';

describe('toUrl', () => {
  it('should return a URL object for a valid URL string', () => {
    const result = toUrl('https://www.example.com');
    expect(result).toBeInstanceOf(URL);
    expect(result?.href).toBe('https://www.example.com/');
  });

  it('should return undefined for an invalid URL string', () => {
    const result = toUrl('not a valid url');
    expect(result).toBeUndefined();
  });

  it('should correctly use the base URL when provided', () => {
    const result = toUrl('/path', 'https://www.example.com');
    expect(result).toBeInstanceOf(URL);
    expect(result?.href).toBe('https://www.example.com/path');
  });

  it('should return undefined when base is invalid', () => {
    const result = toUrl('/path', 'invalid base');
    expect(result).toBeUndefined();
  });

  it('should handle object with toString method as input', () => {
    const result = toUrl({ toString: () => 'https://www.example.com' });
    expect(result).toBeInstanceOf(URL);
    expect(result?.href).toBe('https://www.example.com/');
  });
});
