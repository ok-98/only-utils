import { describe, expect, it } from 'vitest';
import { filterNullishMap } from './list-utils';

describe('filterNullishMap', () => {
  it('should filter out null and undefined values from a map', () => {
    const map = new Map([
      [1, 'value1'],
      [2, null],
      [3, 'value3'],
      [4, undefined],
    ]);
    expect(filterNullishMap(map)).toEqual(
      new Map([
        [1, 'value1'],
        [3, 'value3'],
      ]),
    );
  });
});
