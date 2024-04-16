/**
 * Represents a nested object with a specified child key.
 * @template T - The type of the object.
 * @template ChildKey - The type of the child key.
 */
export type Nested<T, ChildKey extends string = 'children'> = T & {
  [key in ChildKey]?: Array<Nested<T, ChildKey>> | Set<Nested<T, ChildKey>>;
};

/**
 * Makes all properties of a type mutable by removing the readonly modifier.
 * @template T - The type to make mutable.
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * Type helper that prettifies the properties of a given type.
 * @template T - The type to prettify.
 */
export type Prettify<T> = {
  [P in keyof T]: T[P];
};

/**
 * Extracts the key type from a record type.
 * @template R - The record type.
 * @returns The keys of the record type.
 */
export type RecordKey<R> = R extends Record<infer Key, unknown> ? Key : never;

/**
 * Extracts the value type from a record type.
 * @template R - The record type.
 * @returns The value type of the record.
 */
export type RecordValue<R> =
  R extends Record<keyof any, infer Value> ? Value : never;

/**
 * Represents a key-value pair in a record.
 * @template R - The type of the record.
 */
export type RecordKeyValue<R> = [RecordKey<R>, RecordValue<R>];

/**
 * Represents a type that can either be a {@link Promise}<{@link T}> or a value of type {@link T}.
 *
 * @typeparam T - The type of the value.
 */
export type PromiseOrAwaited<T> = Promise<T> | T;

/**
 * Extracts the resolved type from a {@link Promise}.
 * @template P The type of the {@link Promise}.
 * @returns The resolved type of the {@link Promise}.
 */
export type Awaited<P> = P extends Promise<infer T> ? T : never;

/**
 * Extracts the instance type from a constructor function type.
 * @template T - The constructor function type.
 * @returns The instance type of the constructor function.
 */
export type InstanceType<T> = T extends new (...args: any[]) => infer R
  ? R
  : never;

export type DeepReadonly<T> = Readonly<{
  [K in keyof T]: T[K] extends number | string | symbol
    ? Readonly<T[K]>
    : T[K] extends Array<infer A>
      ? Readonly<Array<DeepReadonly<A>>>
      : DeepReadonly<T[K]>;
}>;
