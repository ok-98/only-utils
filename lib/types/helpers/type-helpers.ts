export type Nested<T, ChildKey extends string = 'children'> = T & {
  [key in ChildKey]?: Array<Nested<T, ChildKey>> | Set<Nested<T, ChildKey>>;
};

export type SimpleFunction<P, R> = (value: P) => R;
export type AnyFunction<R> = (...args: any[]) => R;

export type Param<F> = F extends (param: infer P, ...args: any[]) => any
  ? P
  : never;
export type ParamArgs<F> = F extends (...args: Array<infer P>) => any
  ? P
  : never;
export type ArrayElement<A> = A extends Array<infer Element> ? Element : never;
export type RecordKey<R> = R extends Record<infer Key, unknown> ? Key : never;
export type RecordValue<R> =
  R extends Record<keyof any, infer Value> ? Value : never;
export type RecordKeyValue<R> = [RecordKey<R>, RecordValue<R>];
export type PromiseOrAwaited<T> = Promise<T> | T;
export type Awaited<P> = P extends Promise<infer T> ? T : never;
