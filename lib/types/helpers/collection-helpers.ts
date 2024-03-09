export type ArrayLike<Value> = Value | Value[];
export type SetLike<Value> = Value | Set<Value>;

export type Collection<Value, Key = unknown> = Value[] | Set<Value> | Map<Key, Value>;
export type CollectionLike<Value, Key = unknown> = Value | Collection<Value, Key>;

// Export type Nested<T, children extends string = "children", ChildType = T> = T & Optional<Record<children, CollectionLike<Nested<T, children, ChildType>>>
