import { describe, expect, it } from 'vitest';
import { CssVar } from '../../types';
import { getCssVariableName, toCssVar } from './css-utils';

describe('css-utils', () => {
  describe('getCssVariableName', () => {
    it('should return variable name', () => {
      expect(getCssVariableName('var(--some-value)')).toBe('--some-value');
    });
    it('should return undefined if notValidVarName', () => {
      expect(
        getCssVariableName('varName' as unknown as CssVar),
      ).toBeUndefined();
    });
  });

  describe('getCssVariable', () => {
    it('should return variable', () => {
      expect(toCssVar('--some-value')).toBe('var(--some-value)');
    });
  });
});
