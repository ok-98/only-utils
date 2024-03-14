/**
 * Represents a nested object with a specified child key.
 * @template T - The type of the object.
 * @template ChildKey - The type of the child key.
 */
export type Nested<T, ChildKey extends string = 'children'> = T & {
  [key in ChildKey]?: Array<Nested<T, ChildKey>> | Set<Nested<T, ChildKey>>;
};

/**
 * Represents a simple function that takes a parameter of type P and returns a value of type R.
 * @template P The type of the parameter.
 * @template R The type of the return value.
 * @param value The value of type P to be passed to the function.
 * @returns The result of applying the function to the given value.
 */
export type SimpleFunction<P, R> = (value: P) => R;

/**
 * Represents a function that can accept any number of arguments and returns a value of type R.
 * @template R - The return type of the function.
 */
export type AnyFunction<R> = (...args: any[]) => R;

/**
 * Extracts the first parameter type from a function type.
 * @template F - The function type.
 * @returns The parameter type of the function.
 */
export type Param<F> = F extends (param: infer P, ...args: any[]) => any
  ? P
  : never;

/**
 * Extracts the parameter types from a function type.
 * @template F - The function type.
 * @returns An array of parameter types.
 */
export type ParamArgs<F> = F extends (...args: Array<infer P>) => any
  ? P
  : never;

/**
 * Extracts the element type from an array type.
 * @template A - The array type.
 * @returns The element type of the array.
 */
export type ArrayElement<A> = A extends Array<infer Element> ? Element : never;

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
