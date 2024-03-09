export type Nested<T, ChildKey extends string = 'children'> = T & {
  [key in ChildKey]?: Array<Nested<T, ChildKey>> | Set<Nested<T, ChildKey>>;
};

export type SimpleFunction<T, R> = (value: T) => R;
