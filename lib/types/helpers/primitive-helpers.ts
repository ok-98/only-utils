import { type Optional } from '..';

export type Primitive = number | string | boolean | bigint | symbol;
export type PrimitiveNullish = Optional<
  number | string | boolean | bigint | symbol
>;
