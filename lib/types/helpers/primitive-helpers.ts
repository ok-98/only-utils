import {type Optional} from '..';

export type Primitive = number | string | boolean | bigint | symbol;
export type PrimitiveNullis = Optional<number | string | boolean | bigint | symbol>;
