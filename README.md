# only-utils

**O**nly **N**ice **L**ean **Y**are **-** **UTILS**.

---

![NPM Version](https://img.shields.io/npm/v/only-utils) ![NPM Downloads](https://img.shields.io/npm/dt/only-utils) ![npm bundle size](https://img.shields.io/bundlephobia/min/only-utils) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/only-utils) ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/only-utils) ![NPM License](https://img.shields.io/npm/l/only-utils)

---

WORK IN PROGRESS

## Install

Install using npm or your favourite package manager:

Install package:

```sh
# npm
npm install only-utils

# yarn
yarn add only-utils

# pnpm
pnpm add only-utils

# bun
bun install only-utils
```

## Table of contents

### Type Aliases

- [AnyFunction](README.md#anyfunction)
- [ArrayElement](README.md#arrayelement)
- [ArrayLike](README.md#arraylike)
- [ArrayWithAtLeast1](README.md#arraywithatleast1)
- [ArrayWithAtLeast2](README.md#arraywithatleast2)
- [ArrayWithAtLeast3](README.md#arraywithatleast3)
- [ArrayWithAtLeast4](README.md#arraywithatleast4)
- [Awaited](README.md#awaited)
- [Braces](README.md#braces)
- [Collection](README.md#collection)
- [CollectionLike](README.md#collectionlike)
- [CssVar](README.md#cssvar)
- [CssVarName](README.md#cssvarname)
- [CtorParam](README.md#ctorparam)
- [CtorParam1](README.md#ctorparam1)
- [CtorParam10](README.md#ctorparam10)
- [CtorParam2](README.md#ctorparam2)
- [CtorParam3](README.md#ctorparam3)
- [CtorParam4](README.md#ctorparam4)
- [CtorParam5](README.md#ctorparam5)
- [CtorParam6](README.md#ctorparam6)
- [CtorParam7](README.md#ctorparam7)
- [CtorParam8](README.md#ctorparam8)
- [CtorParam9](README.md#ctorparam9)
- [CtorParamArgs](README.md#ctorparamargs)
- [CtorParameters](README.md#ctorparameters)
- [EmptyFunction](README.md#emptyfunction)
- [InstanceType](README.md#instancetype)
- [Mutable](README.md#mutable)
- [Nested](README.md#nested)
- [NonEmptyArray](README.md#nonemptyarray)
- [Nullish](README.md#nullish)
- [Optional](README.md#optional)
- [OptionalKeys](README.md#optionalkeys)
- [OptionalValue](README.md#optionalvalue)
- [Param](README.md#param)
- [Param1](README.md#param1)
- [Param10](README.md#param10)
- [Param2](README.md#param2)
- [Param3](README.md#param3)
- [Param4](README.md#param4)
- [Param5](README.md#param5)
- [Param6](README.md#param6)
- [Param7](README.md#param7)
- [Param8](README.md#param8)
- [Param9](README.md#param9)
- [ParamArgs](README.md#paramargs)
- [Prettify](README.md#prettify)
- [Primitive](README.md#primitive)
- [PrimitiveNullish](README.md#primitivenullish)
- [PromiseOrAwaited](README.md#promiseorawaited)
- [Promisify](README.md#promisify)
- [Quotation](README.md#quotation)
- [RecordKey](README.md#recordkey)
- [RecordKeyValue](README.md#recordkeyvalue)
- [RecordValue](README.md#recordvalue)
- [RecursiveArray](README.md#recursivearray)
- [RequiredKeys](README.md#requiredkeys)
- [SetLike](README.md#setlike)
- [SimpleFunction](README.md#simplefunction)
- [TOrNull](README.md#tornull)
- [TOrUndefined](README.md#torundefined)

### Variables

- [EMPTY\_ARRAY](README.md#empty_array)
- [EMPTY\_OBJECT](README.md#empty_object)

### Functions

- [EMPTY\_ARROW\_FUNCTION](README.md#empty_arrow_function)
- [EMPTY\_ASYNC\_ARROW\_FUNCTION](README.md#empty_async_arrow_function)
- [alwaysFalse](README.md#alwaysfalse)
- [alwaysTrue](README.md#alwaystrue)
- [areDefined](README.md#aredefined)
- [areEqual](README.md#areequal)
- [areNotDefined](README.md#arenotdefined)
- [asArray](README.md#asarray)
- [asType](README.md#astype)
- [asValueOrNull](README.md#asvalueornull)
- [asValueOrUndefined](README.md#asvalueorundefined)
- [braceYourself](README.md#braceyourself)
- [emptyListToUndefined](README.md#emptylisttoundefined)
- [emptyStringToUndefined](README.md#emptystringtoundefined)
- [executeIfDefined](README.md#executeifdefined)
- [filterNullishArray](README.md#filternullisharray)
- [filterNullishMap](README.md#filternullishmap)
- [filterNullishSet](README.md#filternullishset)
- [getComputedValue](README.md#getcomputedvalue)
- [getCssVarValue](README.md#getcssvarvalue)
- [getCssVariableName](README.md#getcssvariablename)
- [hasApproximatly](README.md#hasapproximatly)
- [hasBetween](README.md#hasbetween)
- [hasExactly](README.md#hasexactly)
- [hasKey](README.md#haskey)
- [hasLessThan](README.md#haslessthan)
- [hasMoreThan](README.md#hasmorethan)
- [identity](README.md#identity)
- [isArray](README.md#isarray)
- [isBoolean](README.md#isboolean)
- [isDefined](README.md#isdefined)
- [isEmpty](README.md#isempty)
- [isEmptyObject](README.md#isemptyobject)
- [isFalse](README.md#isfalse)
- [isFalsey](README.md#isfalsey)
- [isFalseyValue](README.md#isfalseyvalue)
- [isFalsyArray](README.md#isfalsyarray)
- [isMap](README.md#ismap)
- [isNegative](README.md#isnegative)
- [isNotDefined](README.md#isnotdefined)
- [isPositive](README.md#ispositive)
- [isPrimitive](README.md#isprimitive)
- [isPrimitiveOrNull](README.md#isprimitiveornull)
- [isSet](README.md#isset)
- [isTrue](README.md#istrue)
- [isTruthy](README.md#istruthy)
- [isTruthyArray](README.md#istruthyarray)
- [isTruthyValue](README.md#istruthyvalue)
- [isType](README.md#istype)
- [mapRecursiveArray](README.md#maprecursivearray)
- [negate](README.md#negate)
- [nonEmpty](README.md#nonempty)
- [optional](README.md#optional-1)
- [quote](README.md#quote)
- [toCssVar](README.md#tocssvar)
- [toUrl](README.md#tourl)
- [transformIfDefined](README.md#transformifdefined)
- [undefinedToEmptyString](README.md#undefinedtoemptystring)

## Type Aliases

### AnyFunction

Ƭ **AnyFunction**\<`R`\>: (...`args`: `any`[]) => `R`

Represents any function that takes any number of arguments and returns a value of type R.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `void` | The return type of the function. |

#### Type declaration

▸ (`...args`): `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`R`

#### Defined in

[lib/types/helpers/function-helpers.ts:21](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L21)

___

### ArrayElement

Ƭ **ArrayElement**\<`A`\>: `A` extends infer Element[] ? `Element` : `never`

Extracts the element type from an array type.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | The array type. |

#### Defined in

[lib/types/helpers/collection-helpers.ts:6](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/collection-helpers.ts#L6)

___

### ArrayLike

Ƭ **ArrayLike**\<`Value`\>: `Value` \| `Value`[]

Represents a type that can be either a single Value or an Array of Value.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `Value` | The type of the value(s) in the array. |

#### Defined in

[lib/types/helpers/collection-helpers.ts:13](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/collection-helpers.ts#L13)

___

### ArrayWithAtLeast1

Ƭ **ArrayWithAtLeast1**\<`T`\>: [`T`, ...T[]]

Represents an array type with at least one element.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements. |

#### Defined in

[lib/types/helpers/collection-helpers.ts:51](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/collection-helpers.ts#L51)

___

### ArrayWithAtLeast2

Ƭ **ArrayWithAtLeast2**\<`T`\>: [`T`, ...ArrayWithAtLeast1\<T\>]

Represents an array with at least two elements of type T.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the array. |

#### Defined in

[lib/types/helpers/collection-helpers.ts:57](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/collection-helpers.ts#L57)

___

### ArrayWithAtLeast3

Ƭ **ArrayWithAtLeast3**\<`T`\>: [`T`, ...ArrayWithAtLeast2\<T\>]

Represents an array with at least three elements of type T.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the array. |

#### Defined in

[lib/types/helpers/collection-helpers.ts:63](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/collection-helpers.ts#L63)

___

### ArrayWithAtLeast4

Ƭ **ArrayWithAtLeast4**\<`T`\>: [`T`, ...ArrayWithAtLeast3\<T\>]

Represents an array with at least four elements of type T.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the array. |

#### Defined in

[lib/types/helpers/collection-helpers.ts:69](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/collection-helpers.ts#L69)

___

### Awaited

Ƭ **Awaited**\<`P`\>: `P` extends `Promise`\<infer T\> ? `T` : `never`

Extracts the resolved type from a Promise.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `P` | The type of the Promise. |

#### Defined in

[lib/types/helpers/type-helpers.ts:59](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/type-helpers.ts#L59)

___

### Braces

Ƭ **Braces**: [``"{"``, ``"}"``] \| [``"["``, ``"]"``] \| [``"("``, ``")"``] \| [``"<"``, ``">"``] \| [`string`, `string`]

Represents a set of braces.
A brace is defined as an opening and closing character pair.
It can be one of the following types:
- `{` and `}`
- `[` and `]`
- `(` and `)`
- `<` and `>`
- A custom pair of opening and closing characters specified as a string.

#### Defined in

[lib/types/helpers/string-helpers.ts:11](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/string-helpers.ts#L11)

___

### Collection

Ƭ **Collection**\<`Value`, `Key`\>: `Value`[] \| `Set`\<`Value`\> \| `Map`\<`Key`, `Value`\>

Represents a collection of values.
It can be an Array, a Set, or a Map.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `Value` | The type of values in the collection. |
| `Key` | `unknown` | The type of keys in the map (optional). |

#### Defined in

[lib/types/helpers/collection-helpers.ts:27](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/collection-helpers.ts#L27)

___

### CollectionLike

Ƭ **CollectionLike**\<`Value`, `Key`\>: `Value` \| [`Collection`](README.md#collection)\<`Value`, `Key`\>

Represents a type that can either be a single Value or a [Collection](README.md#collection) of Value.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `Value` | The type of the value(s) in the collection. |
| `Key` | `unknown` | The type of the key(s) used to access the value(s) in the collection. |

#### Defined in

[lib/types/helpers/collection-helpers.ts:37](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/collection-helpers.ts#L37)

___

### CssVar

Ƭ **CssVar**: \`var($\{CssVarName})\`

Represents a CSS variable.

#### Defined in

[lib/types/helpers/browser-helpers.ts:11](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/browser-helpers.ts#L11)

___

### CssVarName

Ƭ **CssVarName**: \`--$\{string}\`

Represents the name of a CSS variable.

#### Defined in

[lib/types/helpers/browser-helpers.ts:5](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/browser-helpers.ts#L5)

___

### CtorParam

Ƭ **CtorParam**\<`C`\>: [`CtorParam1`](README.md#ctorparam1)\<`C`\>

Extracts the first parameter type from a constructor function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The constructor function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:229](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L229)

___

### CtorParam1

Ƭ **CtorParam1**\<`C`\>: `C` extends (`param`: infer P, ...`args`: `any`) => `any` ? `P` : `never`

Extracts the first parameter type from a constructor function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The constructor function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:236](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L236)

___

### CtorParam10

Ƭ **CtorParam10**\<`C`\>: `C` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `_4`: `any`, `_5`: `any`, `_6`: `any`, `_7`: `any`, `_8`: `any`, `_9`: `any`, `param`: infer P, ...`args`: `any`) => `any` ? `P` : `never`

Extracts the tenth parameter type from a constructor function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The constructor function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:395](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L395)

___

### CtorParam2

Ƭ **CtorParam2**\<`C`\>: `C` extends (`_0`: `any`, `param`: infer P, ...`args`: `any`) => `any` ? `P` : `never`

Extracts the type of the second constructor parameter from a given class.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The class type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:248](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L248)

___

### CtorParam3

Ƭ **CtorParam3**\<`C`\>: `C` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `param`: infer P, ...`args`: `any`) => `any` ? `P` : `never`

Extracts the third parameter type from a constructor function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The constructor function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:262](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L262)

___

### CtorParam4

Ƭ **CtorParam4**\<`C`\>: `C` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `param`: infer P, ...`args`: `any`) => `any` ? `P` : `never`

Extracts the fourth parameter type from a constructor function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The constructor function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:278](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L278)

___

### CtorParam5

Ƭ **CtorParam5**\<`C`\>: `C` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `_4`: `any`, `param`: infer P, ...`args`: `any`) => `any` ? `P` : `never`

Extracts the fifth parameter type from a constructor function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The constructor function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:295](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L295)

___

### CtorParam6

Ƭ **CtorParam6**\<`C`\>: `C` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `_4`: `any`, `_5`: `any`, `param`: infer P, ...`args`: `any`) => `any` ? `P` : `never`

Extracts the sixth parameter type from a constructor function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The constructor function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:313](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L313)

___

### CtorParam7

Ƭ **CtorParam7**\<`C`\>: `C` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `_4`: `any`, `_5`: `any`, `_6`: `any`, `param`: infer P, ...`args`: `any`) => `any` ? `P` : `never`

Extracts the seventh parameter type from a constructor function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The constructor function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:332](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L332)

___

### CtorParam8

Ƭ **CtorParam8**\<`C`\>: `C` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `_4`: `any`, `_5`: `any`, `_6`: `any`, `_7`: `any`, `param`: infer P, ...`args`: `any`) => `any` ? `P` : `never`

Extracts the eighth parameter type from a constructor function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The constructor function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:352](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L352)

___

### CtorParam9

Ƭ **CtorParam9**\<`C`\>: `C` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `_4`: `any`, `_5`: `any`, `_6`: `any`, `_7`: `any`, `_8`: `any`, `param`: infer P, ...`args`: `any`) => `any` ? `P` : `never`

Extracts the ninth parameter type from a constructor function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The constructor function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:373](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L373)

___

### CtorParamArgs

Ƭ **CtorParamArgs**\<`C`\>: `C` extends (...`args`: infer P[]) => `any` ? `P` : `never`

Extracts the parameter types from a constructor function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The constructor function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:210](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L210)

___

### CtorParameters

Ƭ **CtorParameters**\<`C`\>: `C` extends (...`args`: infer P) => `any` ? `P` : `never`

Extracts the constructor parameters from a class constructor type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | extends (...`args`: `any`) => `any` | The class constructor type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:221](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L221)

___

### EmptyFunction

Ƭ **EmptyFunction**\<`R`\>: () => `R`

Represents an empty function that takes no arguments and returns a value of type R.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `void` | The return type of the function. |

#### Type declaration

▸ (): `R`

##### Returns

`R`

#### Defined in

[lib/types/helpers/function-helpers.ts:15](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L15)

___

### InstanceType

Ƭ **InstanceType**\<`T`\>: `T` extends (...`args`: `any`[]) => infer R ? `R` : `never`

Extracts the instance type from a constructor function type.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The constructor function type. |

#### Defined in

[lib/types/helpers/type-helpers.ts:66](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/type-helpers.ts#L66)

___

### Mutable

Ƭ **Mutable**\<`T`\>: \{ -readonly [P in keyof T]: T[P] }

Makes all properties of a type mutable by removing the readonly modifier.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type to make mutable. |

#### Defined in

[lib/types/helpers/type-helpers.ts:14](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/type-helpers.ts#L14)

___

### Nested

Ƭ **Nested**\<`T`, `ChildKey`\>: `T` & \{ [key in ChildKey]?: Nested\<T, ChildKey\>[] \| Set\<Nested\<T, ChildKey\>\> }

Represents a nested object with a specified child key.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `T` | The type of the object. |
| `ChildKey` | extends `string` = ``"children"`` | The type of the child key. |

#### Defined in

[lib/types/helpers/type-helpers.ts:6](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/type-helpers.ts#L6)

___

### NonEmptyArray

Ƭ **NonEmptyArray**\<`T`\>: [`ArrayWithAtLeast1`](README.md#arraywithatleast1)\<`T`\>

Represents a non-empty Array type.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the array. |

#### Defined in

[lib/types/helpers/collection-helpers.ts:45](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/collection-helpers.ts#L45)

___

### Nullish

Ƭ **Nullish**: ``null`` \| `undefined`

Represents a type that can be null or undefined.

#### Defined in

[lib/types/helpers/nullish-helpers.ts:18](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/nullish-helpers.ts#L18)

___

### Optional

Ƭ **Optional**\<`T`\>: `T` \| [`Nullish`](README.md#nullish)

Represents an optional value that can either be of type T or [Nullish](README.md#nullish).

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type. |

#### Defined in

[lib/types/helpers/nullish-helpers.ts:24](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/nullish-helpers.ts#L24)

___

### OptionalKeys

Ƭ **OptionalKeys**\<`T`\>: \{ [K in keyof T]-?: Object extends Pick\<T, K\> ? K : never } extends \{ [\_ in keyof T]: infer U } ? `U` : `never`

Get the optional keys of a given type.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type to extract optional keys from. |

#### Defined in

[lib/types/helpers/nullish-helpers.ts:32](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/nullish-helpers.ts#L32)

___

### OptionalValue

Ƭ **OptionalValue**\<`T`\>: `Object`

Represents an optional value that may or may not be present.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the optional value. |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | (`predicate`: [`SimpleFunction`](README.md#simplefunction)\<`T`, `boolean`\>) => [`OptionalValue`](README.md#optionalvalue)\<`T`\> | - |
| `get` | () => [`TOrUndefined`](README.md#torundefined)\<`T`\> | - |
| `ifPresent` | (`callback`: [`SimpleFunction`](README.md#simplefunction)\<`T`\>) => `void` | - |
| `ifPresentOrElse` | (`callback`: [`SimpleFunction`](README.md#simplefunction)\<`T`\>, `emptyAction`: [`EmptyFunction`](README.md#emptyfunction)) => `void` | - |
| `isPresent` | () => `boolean` | - |
| `map` | \<R\>(`mapper`: [`SimpleFunction`](README.md#simplefunction)\<`T`, `R`\>) => [`OptionalValue`](README.md#optionalvalue)\<`R`\> | - |
| `or` | \<R\>(`other`: [`OptionalValue`](README.md#optionalvalue)\<`R`\>) => [`OptionalValue`](README.md#optionalvalue)\<`T`\> \| [`OptionalValue`](README.md#optionalvalue)\<`R`\> | - |
| `orElse` | (`defaultValue`: `T`) => `T` | - |
| `orElseThrow` | (`error`: `Error`) => `T` | - |

#### Defined in

[lib/utils/optional-util.ts:12](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/optional-util.ts#L12)

___

### Param

Ƭ **Param**\<`F`\>: `F` extends (`param`: infer P, ...`args`: `any`[]) => `any` ? `P` : `never`

Extracts the first parameter type from a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`) => `any` | The function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:28](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L28)

___

### Param1

Ƭ **Param1**\<`F`\>: [`Param`](README.md#param)\<`F`\>

Extracts the first parameter type from a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`) => `any` | The function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:40](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L40)

___

### Param10

Ƭ **Param10**\<`F`\>: `F` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `_4`: `any`, `_5`: `any`, `_6`: `any`, `_7`: `any`, `_8`: `any`, `param`: infer P, ...`args`: `any`[]) => `any` ? `P` : `never`

Extracts the tenth parameter type from a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`) => `any` | The function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:178](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L178)

___

### Param2

Ƭ **Param2**\<`F`\>: `F` extends (`_0`: `any`, `param`: infer P, ...`args`: `any`[]) => `any` ? `P` : `never`

Extracts the second parameter type from a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`) => `any` | The function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:47](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L47)

___

### Param3

Ƭ **Param3**\<`F`\>: `F` extends (`_0`: `any`, `_1`: `any`, `param`: infer P, ...`args`: `any`[]) => `any` ? `P` : `never`

Extracts the third parameter type from a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`) => `any` | The function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:59](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L59)

___

### Param4

Ƭ **Param4**\<`F`\>: `F` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `param`: infer P, ...`args`: `any`[]) => `any` ? `P` : `never`

Extracts the fourth parameter type from a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`) => `any` | The function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:73](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L73)

___

### Param5

Ƭ **Param5**\<`F`\>: `F` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `param`: infer P, ...`args`: `any`[]) => `any` ? `P` : `never`

Extracts the fifth parameter type from a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`) => `any` | The function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:88](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L88)

___

### Param6

Ƭ **Param6**\<`F`\>: `F` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `_4`: `any`, `param`: infer P, ...`args`: `any`[]) => `any` ? `P` : `never`

Extracts the sixth parameter type from a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`) => `any` | The function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:104](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L104)

___

### Param7

Ƭ **Param7**\<`F`\>: `F` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `_4`: `any`, `_5`: `any`, `param`: infer P, ...`args`: `any`[]) => `any` ? `P` : `never`

Extracts the seventh parameter type from a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`) => `any` | The function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:121](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L121)

___

### Param8

Ƭ **Param8**\<`F`\>: `F` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `_4`: `any`, `_5`: `any`, `_6`: `any`, `param`: infer P, ...`args`: `any`[]) => `any` ? `P` : `never`

Extracts the eighth parameter type from a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`) => `any` | The function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:139](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L139)

___

### Param9

Ƭ **Param9**\<`F`\>: `F` extends (`_0`: `any`, `_1`: `any`, `_2`: `any`, `_3`: `any`, `_4`: `any`, `_5`: `any`, `_6`: `any`, `_7`: `any`, `param`: infer P, ...`args`: `any`[]) => `any` ? `P` : `never`

Extracts the ninth parameter type from a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`) => `any` | The function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:158](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L158)

___

### ParamArgs

Ƭ **ParamArgs**\<`F`\>: `F` extends (...`args`: infer P[]) => `any` ? `P` : `never`

Extracts the parameter types from a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`) => `any` | The function type. |

#### Defined in

[lib/types/helpers/function-helpers.ts:199](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L199)

___

### Prettify

Ƭ **Prettify**\<`T`\>: \{ [P in keyof T]: T[P] }

Type helper that prettifies the properties of a given type.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type to prettify. |

#### Defined in

[lib/types/helpers/type-helpers.ts:22](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/type-helpers.ts#L22)

___

### Primitive

Ƭ **Primitive**: `number` \| `string` \| `boolean` \| `bigint` \| `symbol`

Represents a primitive type in TypeScript.
A primitive can be one of the following types: number, string, boolean, bigint, or symbol.

#### Defined in

[lib/types/helpers/primitive-helpers.ts:7](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/primitive-helpers.ts#L7)

___

### PrimitiveNullish

Ƭ **PrimitiveNullish**: [`Optional`](README.md#optional)\<`number` \| `string` \| `boolean` \| `bigint` \| `symbol`\>

Represents a type that can be either a primitive value (number, string, boolean, bigint, symbol)
or null or undefined.

#### Defined in

[lib/types/helpers/primitive-helpers.ts:13](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/primitive-helpers.ts#L13)

___

### PromiseOrAwaited

Ƭ **PromiseOrAwaited**\<`T`\>: `Promise`\<`T`\> \| `T`

Represents a type that can either be a Promise<T> or a value of type T.

**`Typeparam`**

T - The type of the value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/types/helpers/type-helpers.ts:52](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/type-helpers.ts#L52)

___

### Promisify

Ƭ **Promisify**\<`F`\>: (...`args`: `Parameters`\<`F`\>) => `Promise`\<`ReturnType`\<`F`\>\>

Promisifies a function type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends (...`args`: `any`[]) => `any` | The function type to be promisified. |

#### Type declaration

▸ (`...args`): `Promise`\<`ReturnType`\<`F`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`\<`F`\> |

##### Returns

`Promise`\<`ReturnType`\<`F`\>\>

#### Defined in

[lib/types/helpers/function-helpers.ts:418](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L418)

___

### Quotation

Ƭ **Quotation**: ``"'"`` \| ``"\""`` \| ``"`"`` \| ``"´"``

Represents a quotation mark.
It can be one of the following characters: "'", '"', '`', '´'.

#### Defined in

[lib/types/helpers/string-helpers.ts:22](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/string-helpers.ts#L22)

___

### RecordKey

Ƭ **RecordKey**\<`R`\>: `R` extends `Record`\<infer Key, `unknown`\> ? `Key` : `never`

Extracts the key type from a record type.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The record type. |

#### Defined in

[lib/types/helpers/type-helpers.ts:31](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/type-helpers.ts#L31)

___

### RecordKeyValue

Ƭ **RecordKeyValue**\<`R`\>: [[`RecordKey`](README.md#recordkey)\<`R`\>, [`RecordValue`](README.md#recordvalue)\<`R`\>]

Represents a key-value pair in a record.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The type of the record. |

#### Defined in

[lib/types/helpers/type-helpers.ts:45](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/type-helpers.ts#L45)

___

### RecordValue

Ƭ **RecordValue**\<`R`\>: `R` extends `Record`\<keyof `any`, infer Value\> ? `Value` : `never`

Extracts the value type from a record type.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The record type. |

#### Defined in

[lib/types/helpers/type-helpers.ts:38](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/type-helpers.ts#L38)

___

### RecursiveArray

Ƭ **RecursiveArray**\<`T`\>: `T` \| `undefined` \| [`RecursiveArray`](README.md#recursivearray)\<`T`\>[]

Represents a recursive Array that can contain values of type T, undefined, or other recursive arrays.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of values contained in the array. |

#### Defined in

[lib/types/helpers/collection-helpers.ts:75](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/collection-helpers.ts#L75)

___

### RequiredKeys

Ƭ **RequiredKeys**\<`T`\>: \{ [K in keyof T]-?: Object extends Pick\<T, K\> ? never : K } extends \{ [\_ in keyof T]: infer U } ? `U` : `never`

Get the required keys of a given type.

**`Param`**

The type to calculate the required keys for.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type to calculate the required keys for. |

#### Defined in

[lib/types/helpers/nullish-helpers.ts:45](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/nullish-helpers.ts#L45)

___

### SetLike

Ƭ **SetLike**\<`Value`\>: `Value` \| `Set`\<`Value`\>

Represents a type that can either be a single Value or a Set of Value.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `Value` | The type of the values in the Set. |

#### Defined in

[lib/types/helpers/collection-helpers.ts:18](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/collection-helpers.ts#L18)

___

### SimpleFunction

Ƭ **SimpleFunction**\<`P`, `R`\>: (`value`: `P`) => `R`

Represents a simple function that takes a parameter of type P and returns a value of type R.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | `P` | The type of the parameter. |
| `R` | `void` | The type of the return value. |

#### Type declaration

▸ (`value`): `R`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `P` | The value of type P to be passed to the function. |

##### Returns

`R`

#### Defined in

[lib/types/helpers/function-helpers.ts:8](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/function-helpers.ts#L8)

___

### TOrNull

Ƭ **TOrNull**\<`T`\>: `T` \| ``null``

Represents a type that can either be of type T or null.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type that can be nullable. |

#### Defined in

[lib/types/helpers/nullish-helpers.ts:13](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/nullish-helpers.ts#L13)

___

### TOrUndefined

Ƭ **TOrUndefined**\<`T`\>: `T` \| `undefined`

Represents a type that can either be of type T or undefined.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type parameter. |

#### Defined in

[lib/types/helpers/nullish-helpers.ts:6](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/types/helpers/nullish-helpers.ts#L6)

## Variables

### EMPTY\_ARRAY

• `Const` **EMPTY\_ARRAY**: readonly []

An empty array.

#### Defined in

[lib/utils/const-utils.ts:9](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/const-utils.ts#L9)

___

### EMPTY\_OBJECT

• `Const` **EMPTY\_OBJECT**: `Object`

Represents an empty object.

#### Defined in

[lib/utils/const-utils.ts:4](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/const-utils.ts#L4)

## Functions

### EMPTY\_ARROW\_FUNCTION

▸ **EMPTY_ARROW_FUNCTION**(`..._`): `void`

An empty arrow function that takes any number of arguments and returns void.

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._` | `unknown`[] |

#### Returns

`void`

#### Defined in

[lib/utils/function-utils.ts:4](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/function-utils.ts#L4)

___

### EMPTY\_ASYNC\_ARROW\_FUNCTION

▸ **EMPTY_ASYNC_ARROW_FUNCTION**(`..._`): `Promise`\<`void`\>

An empty async arrow function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._` | `unknown`[] |

#### Returns

`Promise`\<`void`\>

A Promise that resolves to void.

#### Defined in

[lib/utils/function-utils.ts:12](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/function-utils.ts#L12)

___

### alwaysFalse

▸ **alwaysFalse**(`..._`): `boolean`

A utility function that always returns false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `..._` | `undefined`[] | any parameter (ignored) |

#### Returns

`boolean`

Always false.

#### Defined in

[lib/utils/bool-utils.ts:13](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/bool-utils.ts#L13)

___

### alwaysTrue

▸ **alwaysTrue**(`..._`): `boolean`

Returns true always.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `..._` | `undefined`[] | any parameter (ignored) |

#### Returns

`boolean`

Always true

#### Defined in

[lib/utils/bool-utils.ts:6](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/bool-utils.ts#L6)

___

### areDefined

▸ **areDefined**\<`T`\>(`values`): values is T[]

Checks if all values in an array are defined.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Optional`](README.md#optional)\<`T`\>[] | The array of values to check. |

#### Returns

values is T[]

`true` if all values are defined, `false` otherwise.

#### Defined in

[lib/utils/nullish-utils.ts:23](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/nullish-utils.ts#L23)

___

### areEqual

▸ **areEqual**\<`T`\>(`...values`): `boolean`

Checks if multiple values are equal.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the values. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | [`T`, `T`, ...T[]] | The values to compare. |

#### Returns

`boolean`

- True if all values are equal, false otherwise.

#### Defined in

[lib/utils/object-utils.ts:40](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/object-utils.ts#L40)

___

### areNotDefined

▸ **areNotDefined**\<`T`\>(`values`): values is Nullish[]

Checks if all values in an array are not defined.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Optional`](README.md#optional)\<`T`\>[] | The array of values to check. |

#### Returns

values is Nullish[]

True if all values are not defined, false otherwise.

#### Defined in

[lib/utils/nullish-utils.ts:42](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/nullish-utils.ts#L42)

___

### asArray

▸ **asArray**\<`Value`, `Key`\>(`value`): `Value`[]

Converts a collection-like value into an array.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `Value` | The type of values in the collection. |
| `Key` | `unknown` | The type of keys in the collection. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<[`CollectionLike`](README.md#collectionlike)\<`Value`, `Key`\>\> | The collection-like value to convert. |

#### Returns

`Value`[]

- The converted array.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:79](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L79)

___

### asType

▸ **asType**\<`T`\>(`value`): `T`

Casts a value to the specified type.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type to cast the value to. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to be casted. |

#### Returns

`T`

The casted value.

#### Defined in

[lib/utils/object-utils.ts:95](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/object-utils.ts#L95)

___

### asValueOrNull

▸ **asValueOrNull**\<`T`\>(`value`): [`TOrNull`](README.md#tornull)\<`T`\>

Returns the value if it is defined, otherwise returns null.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<`T`\> | The value to check. |

#### Returns

[`TOrNull`](README.md#tornull)\<`T`\>

The value if it is defined, otherwise null.

#### Defined in

[lib/utils/nullish-utils.ts:71](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/nullish-utils.ts#L71)

___

### asValueOrUndefined

▸ **asValueOrUndefined**\<`T`\>(`value`): [`TOrUndefined`](README.md#torundefined)\<`T`\>

Converts an optional value to its corresponding value or undefined.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<`T`\> | The optional value to convert. |

#### Returns

[`TOrUndefined`](README.md#torundefined)\<`T`\>

The corresponding value if it is defined, otherwise undefined.

#### Defined in

[lib/utils/nullish-utils.ts:63](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/nullish-utils.ts#L63)

___

### braceYourself

▸ **braceYourself**(`value`, `«destructured»?`): `string`

Wraps the given value with braces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The value to be wrapped. |
| `«destructured»` | [`Braces`](README.md#braces) | - |

#### Returns

`string`

The wrapped value.

#### Defined in

[lib/utils/string-utils.ts:13](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/string-utils.ts#L13)

___

### emptyListToUndefined

▸ **emptyListToUndefined**\<`Value`\>(`value`): `undefined` \| [`CollectionLike`](README.md#collectionlike)\<`Value`\>

Converts an empty list to undefined.

#### Type parameters

| Name |
| :------ |
| `Value` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`CollectionLike`](README.md#collectionlike)\<`Value`\> | The list to convert. |

#### Returns

`undefined` \| [`CollectionLike`](README.md#collectionlike)\<`Value`\>

The converted list, or undefined if the list is empty.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:184](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L184)

___

### emptyStringToUndefined

▸ **emptyStringToUndefined**(`value`): [`TOrUndefined`](README.md#torundefined)\<`string`\>

Converts an empty string to undefined.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<`string`\> | The string value to convert. |

#### Returns

[`TOrUndefined`](README.md#torundefined)\<`string`\>

The converted string value or undefined if the input is an empty string.

#### Defined in

[lib/utils/string-utils.ts:33](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/string-utils.ts#L33)

___

### executeIfDefined

▸ **executeIfDefined**\<`T`\>(`value`, `callback`): `void`

Executes the provided callback function if the value is defined.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the value. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<`T`\> | The value to check for definedness. |
| `callback` | [`SimpleFunction`](README.md#simplefunction)\<`T`\> | The callback function to execute if the value is defined. |

#### Returns

`void`

#### Defined in

[lib/utils/nullish-utils.ts:94](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/nullish-utils.ts#L94)

___

### filterNullishArray

▸ **filterNullishArray**\<`Value`\>(`value`): `Value`[]

Filters out nullish values from an array-like object.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `Value` | The type of values in the array. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`ArrayLike`](README.md#arraylike)\<[`Optional`](README.md#optional)\<`Value`\>\> | The array-like object to filter. |

#### Returns

`Value`[]

A new array containing only the non-nullish values.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:90](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L90)

___

### filterNullishMap

▸ **filterNullishMap**\<`Key`, `Value`\>(`value`): `Map`\<`Key`, `Value`\>

Filters out nullish values from a map and returns a new map with the non-nullish values.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `Key` | The type of the keys in the map. |
| `Value` | The type of the values in the map. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Map`\<`Key`, [`Optional`](README.md#optional)\<`Value`\>\> | The map to filter. |

#### Returns

`Map`\<`Key`, `Value`\>

A new map with the non-nullish values.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:126](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L126)

___

### filterNullishSet

▸ **filterNullishSet**\<`Value`\>(`value`): `Set`\<`Value`\>

Filters out nullish values from a Set-like collection.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `Value` | The type of values in the collection. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`SetLike`](README.md#setlike)\<[`Optional`](README.md#optional)\<`Value`\>\> | The Set-like collection to filter. |

#### Returns

`Set`\<`Value`\>

A new Set containing only the non-nullish values from the input collection.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:100](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L100)

___

### getComputedValue

▸ **getComputedValue**(`value`, `element`, `pseudoElt?`): `string`

Retrieves the computed value of a CSS property for a given element.
This function can only be executed in a browser context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The CSS property to retrieve the computed value for. |
| `element` | `Element` | The element to retrieve the computed value from. |
| `pseudoElt?` | `string` | Optional. The pseudo-element to retrieve the computed value for. |

#### Returns

`string`

The computed value of the CSS property.

**`Throws`**

if the function is executed outside of a browser context.

#### Defined in

[lib/utils/browser/css-utils.ts:69](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/browser/css-utils.ts#L69)

___

### getCssVarValue

▸ **getCssVarValue**(`value`, `element?`, `pseudoElt?`): `undefined` \| `string`

Retrieves the value of a CSS variable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | \`--$\{string}\` \| \`var(--$\{string})\` | The CSS variable or variable name. |
| `element?` | `Element` | The element to get the computed value from. Defaults to `document.body`. |
| `pseudoElt?` | `string` | The pseudo-element to get the computed value from. |

#### Returns

`undefined` \| `string`

The computed value of the CSS variable.

**`Throws`**

If the function is executed outside of a browser context.

#### Defined in

[lib/utils/browser/css-utils.ts:41](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/browser/css-utils.ts#L41)

___

### getCssVariableName

▸ **getCssVariableName**(`value`): `undefined` \| \`--$\{string}\`

Retrieves the name of a CSS variable from a given value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | \`var(--$\{string})\` | The CSS variable value. |

#### Returns

`undefined` \| \`--$\{string}\`

The name of the CSS variable, or undefined if the value is not a valid CSS variable.

#### Defined in

[lib/utils/browser/css-utils.ts:15](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/browser/css-utils.ts#L15)

___

### hasApproximatly

▸ **hasApproximatly**\<`T`\>(`value`, `x`, `approxRange`): `boolean`

Checks if a value exists in a collection within a specified approximate range.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the collection. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`CollectionLike`](README.md#collectionlike)\<`T`\> | The collection to search in. |
| `x` | `number` | The value to search for. |
| `approxRange` | `number` | The approximate range within which to search for the value. |

#### Returns

`boolean`

A boolean indicating whether the value exists within the approximate range.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:290](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L290)

___

### hasBetween

▸ **hasBetween**\<`T`\>(`value`, `range`, `matchType?`): `boolean`

Checks if the length of a collection-like value falls within a specified range.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`CollectionLike`](README.md#collectionlike)\<`T`\> | The collection-like value to check. |
| `range` | [`number`, `number`] | The range of acceptable lengths, specified as a tuple of two numbers [start, end]. |
| `matchType?` | ``"including"`` \| ``"excluding"`` | The type of matching to perform: 'including' or 'excluding'. Defaults to 'including'. |

#### Returns

`boolean`

`true` if the length of the collection-like value falls within the specified range, `false` otherwise.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:261](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L261)

___

### hasExactly

▸ **hasExactly**\<`T`\>(`value`, `x`): `boolean`

Checks if a collection has exactly a specified number of elements.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the collection. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`CollectionLike`](README.md#collectionlike)\<`T`\> | The collection to check. |
| `x` | `number` | The number of elements to check for. |

#### Returns

`boolean`

`true` if the collection has exactly `x` elements, `false` otherwise.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:251](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L251)

___

### hasKey

▸ **hasKey**\<`T`\>(`obj`, `key`): key is keyof T

Checks if an object has a specific key.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `object` | The type of the object. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | The object to check. |
| `key` | `any` | The key to check for. |

#### Returns

key is keyof T

A boolean indicating whether the object has the specified key.

#### Defined in

[lib/utils/object-utils.ts:21](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/object-utils.ts#L21)

___

### hasLessThan

▸ **hasLessThan**\<`T`\>(`value`, `x`, `equals?`): `boolean`

Checks if the given collection has less than a specified number of elements.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the collection. |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | [`CollectionLike`](README.md#collectionlike)\<`T`\> | `undefined` | The collection to check. |
| `x` | `number` | `undefined` | The maximum number of elements allowed. |
| `equals` | `boolean` | `false` | Optional. If true, includes collections with exactly x elements. |

#### Returns

`boolean`

True if the collection has less than x elements (or x elements if equals is true), false otherwise.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:236](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L236)

___

### hasMoreThan

▸ **hasMoreThan**\<`T`\>(`value`, `x`, `equals?`): `boolean`

Checks if a collection has more than a specified number of elements.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the collection. |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | [`CollectionLike`](README.md#collectionlike)\<`T`\> | `undefined` | The collection to check. |
| `x` | `number` | `undefined` | The number of elements to compare against. |
| `equals` | `boolean` | `false` | Optional. If true, includes the case where the collection has exactly x elements. |

#### Returns

`boolean`

True if the collection has more than x elements (or exactly x elements if equals is true), false otherwise.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:220](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L220)

___

### identity

▸ **identity**\<`T`\>(`value`): `T`

Returns the input value as is.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to be returned. |

#### Returns

`T`

The input value.

#### Defined in

[lib/utils/function-utils.ts:32](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/function-utils.ts#L32)

___

### isArray

▸ **isArray**\<`T`\>(`value`): value is T[]

Checks if a value is an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<[`CollectionLike`](README.md#collectionlike)\<`T`\>\> | The value to check. |

#### Returns

value is T[]

`true` if the value is an array, `false` otherwise.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:28](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L28)

___

### isBoolean

▸ **isBoolean**(`value`): value is boolean

Checks if a value is a boolean.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

value is boolean

`true` if the value is a boolean, `false` otherwise.

#### Defined in

[lib/utils/bool-utils.ts:37](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/bool-utils.ts#L37)

___

### isDefined

▸ **isDefined**\<`T`\>(`value`): value is T

Checks if a value is defined (not null or undefined).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<`T`\> | The value to check. |

#### Returns

value is T

`true` if the value is defined, `false` otherwise.

#### Defined in

[lib/utils/nullish-utils.ts:15](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/nullish-utils.ts#L15)

___

### isEmpty

▸ **isEmpty**\<`Value`, `Key`\>(`value`): `boolean`

Checks if a collection-like value is empty.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `Value` | The type of values in the collection. |
| `Key` | `unknown` | The type of keys in the collection. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`CollectionLike`](README.md#collectionlike)\<`Value`, `Key`\> | The collection-like value to check. |

#### Returns

`boolean`

A boolean indicating whether the collection-like value is empty.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:150](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L150)

___

### isEmptyObject

▸ **isEmptyObject**\<`T`\>(`value`): `boolean`

Checks if an object is empty.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The object to check. |

#### Returns

`boolean`

True if the object is empty, false otherwise.

#### Defined in

[lib/utils/object-utils.ts:29](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/object-utils.ts#L29)

___

### isFalse

▸ **isFalse**(`value`): `boolean`

Checks if a value is false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

`boolean`

Returns true if the value is false, otherwise returns false.

#### Defined in

[lib/utils/bool-utils.ts:21](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/bool-utils.ts#L21)

___

### isFalsey

▸ **isFalsey**(`value`): `boolean`

Checks if a value is falsey.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

`boolean`

A boolean indicating whether the value is falsey.

#### Defined in

[lib/utils/bool-utils.ts:94](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/bool-utils.ts#L94)

___

### isFalseyValue

▸ **isFalseyValue**(`value`): `boolean`

Checks if a value is falsey.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

`boolean`

`true` if the value is falsey, `false` otherwise.

#### Defined in

[lib/utils/bool-utils.ts:54](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/bool-utils.ts#L54)

___

### isFalsyArray

▸ **isFalsyArray**(`value`): `boolean`

Checks if the given value is a falsy array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown`[] | The value to check. |

#### Returns

`boolean`

`true` if the value is a falsy array, `false` otherwise.

#### Defined in

[lib/utils/bool-utils.ts:76](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/bool-utils.ts#L76)

___

### isMap

▸ **isMap**\<`T`, `R`\>(`value`): value is Map\<T, R\>

Checks if the given value is an instance of Map.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the map keys. |
| `R` | The type of the map values. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<[`CollectionLike`](README.md#collectionlike)\<`R`, `T`\>\> | The value to check. |

#### Returns

value is Map\<T, R\>

True if the value is an instance of Map, false otherwise.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:48](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L48)

___

### isNegative

▸ **isNegative**(`value`): `boolean`

Checks if a number is negative.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The number to check. |

#### Returns

`boolean`

`true` if the number is negative, `false` otherwise.

#### Defined in

[lib/utils/number-utils.ts:16](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/number-utils.ts#L16)

___

### isNotDefined

▸ **isNotDefined**\<`T`\>(`value`): value is Nullish

Checks if a value is not defined.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<`T`\> | The value to check. |

#### Returns

value is Nullish

A boolean indicating whether the value is not defined.

#### Defined in

[lib/utils/nullish-utils.ts:34](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/nullish-utils.ts#L34)

___

### isPositive

▸ **isPositive**(`value`, `includingZero?`): `boolean`

Checks if a number is positive.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | The number to check. |
| `includingZero` | `boolean` | `true` | Optional. Specifies whether zero should be considered as a positive number. Default is true. |

#### Returns

`boolean`

True if the number is positive, false otherwise.

#### Defined in

[lib/utils/number-utils.ts:7](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/number-utils.ts#L7)

___

### isPrimitive

▸ **isPrimitive**(`value`): value is Primitive

Checks if a value is a [Primitive](README.md#primitive) type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

value is Primitive

Returns true if the value is a primitive type, false otherwise.

#### Defined in

[lib/utils/object-utils.ts:61](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/object-utils.ts#L61)

___

### isPrimitiveOrNull

▸ **isPrimitiveOrNull**(`value`): value is PrimitiveNullish

Checks if a value is a [Primitive](README.md#primitive) or null.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

value is PrimitiveNullish

`true` if the value is a primitive or null, `false` otherwise.

#### Defined in

[lib/utils/object-utils.ts:78](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/object-utils.ts#L78)

___

### isSet

▸ **isSet**\<`T`\>(`value`): value is Set\<T\>

Checks if the given value is a Set.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<[`CollectionLike`](README.md#collectionlike)\<`T`\>\> | The value to check. |

#### Returns

value is Set\<T\>

`true` if the value is a Set, `false` otherwise.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:37](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L37)

___

### isTrue

▸ **isTrue**(`value`): `boolean`

Checks if the given value is true.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

`boolean`

Returns true if the value is true, otherwise returns false.

#### Defined in

[lib/utils/bool-utils.ts:29](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/bool-utils.ts#L29)

___

### isTruthy

▸ **isTruthy**(`value`): `boolean`

Checks if a value is truthy.
If the value is an array, it checks if all elements in the array are truthy.
If the value is not an array, it checks if the value itself is truthy.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

`boolean`

A boolean indicating whether the value is truthy.

#### Defined in

[lib/utils/bool-utils.ts:86](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/bool-utils.ts#L86)

___

### isTruthyArray

▸ **isTruthyArray**(`value`): `boolean`

Checks if a value is a truthy array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown`[] | The value to check. |

#### Returns

`boolean`

`true` if the value is a truthy array, `false` otherwise.

#### Defined in

[lib/utils/bool-utils.ts:67](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/bool-utils.ts#L67)

___

### isTruthyValue

▸ **isTruthyValue**(`value`): `boolean`

Checks if a value is truthy.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

`boolean`

`true` if the value is truthy, `false` otherwise.

#### Defined in

[lib/utils/bool-utils.ts:60](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/bool-utils.ts#L60)

___

### isType

▸ **isType**\<`T`\>(`value`, `typeChecker`): value is T

Checks if a value matches a specific type.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type to check against. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |
| `typeChecker` | [`AnyFunction`](README.md#anyfunction)\<`boolean`\> | A function that checks if the value matches the specified type. |

#### Returns

value is T

True if the value matches the specified type, false otherwise.

#### Defined in

[lib/utils/object-utils.ts:105](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/object-utils.ts#L105)

___

### mapRecursiveArray

▸ **mapRecursiveArray**\<`T`, `R`\>(`value`, `mapper`): [`RecursiveArray`](README.md#recursivearray)\<`R`\>

Recursively maps the elements of an array or a nested array using a mapper function.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the elements in the input array. |
| `R` | The type of the elements in the output array. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`RecursiveArray`](README.md#recursivearray)\<`T`\> | The input array or nested array to be mapped. |
| `mapper` | (`v`: `T`) => `R` | The function used to map each element of the array. |

#### Returns

[`RecursiveArray`](README.md#recursivearray)\<`R`\>

- The resulting array with mapped elements.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:196](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L196)

___

### negate

▸ **negate**(`value`): `boolean`

Negates a boolean value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The boolean value to negate. |

#### Returns

`boolean`

The negated boolean value.

#### Defined in

[lib/utils/bool-utils.ts:46](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/bool-utils.ts#L46)

___

### nonEmpty

▸ **nonEmpty**\<`Value`, `Key`\>(`value`): `boolean`

Checks if a collection is non-empty.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | `Value` |
| `Key` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`CollectionLike`](README.md#collectionlike)\<`Value`, `Key`\> | The collection to check. |

#### Returns

`boolean`

`true` if the collection is non-empty, `false` otherwise.

#### Defined in

[lib/utils/collection-utils/list-utils.ts:174](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/collection-utils/list-utils.ts#L174)

___

### optional

▸ **optional**\<`T`\>(`value`): [`OptionalValue`](README.md#optionalvalue)\<`T`\>

This is similar like the Optional class in Java.
Creates an optional value wrapper around the provided value.
An optional value can either contain a defined value or be empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<`T`\> | The value to be wrapped. |

#### Returns

[`OptionalValue`](README.md#optionalvalue)\<`T`\>

An object with various utility methods to work with the optional value.

**`Typeparam`**

T - The type of the value being wrapped.

#### Defined in

[lib/utils/optional-util.ts:149](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/optional-util.ts#L149)

___

### quote

▸ **quote**(`value`, `quotation?`): `string`

Adds quotation marks around a string value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `string` | `undefined` | The string value to be quoted. |
| `quotation` | [`Quotation`](README.md#quotation) | `'"'` | The quotation mark to be used (default: "). |

#### Returns

`string`

The quoted string.

#### Defined in

[lib/utils/string-utils.ts:25](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/string-utils.ts#L25)

___

### toCssVar

▸ **toCssVar**(`value`): \`var(--$\{string})\`

Converts a CSS variable name to a CSS variable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | \`--$\{string}\` | The CSS variable name. |

#### Returns

\`var(--$\{string})\`

The CSS variable.

#### Defined in

[lib/utils/browser/css-utils.ts:31](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/browser/css-utils.ts#L31)

___

### toUrl

▸ **toUrl**(`value`, `base?`): [`TOrUndefined`](README.md#torundefined)\<`URL`\>

Converts a value to a URL object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| {} | The value to convert to a URL. |
| `base?` | `string` \| `URL` | The base URL to resolve against (optional). |

#### Returns

[`TOrUndefined`](README.md#torundefined)\<`URL`\>

The URL object if the conversion is successful, otherwise undefined.

#### Defined in

[lib/utils/url-utils.ts:18](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/url-utils.ts#L18)

___

### transformIfDefined

▸ **transformIfDefined**\<`T`, `R`\>(`value`, `mapper`): [`TOrUndefined`](README.md#torundefined)\<`R`\>

Transforms the value if it is defined using the provided mapper function.
If the value is undefined or null, the result will also be undefined.

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<`T`\> | The value to transform. |
| `mapper` | [`SimpleFunction`](README.md#simplefunction)\<`T`, `R`\> | The function used to transform the value. |

#### Returns

[`TOrUndefined`](README.md#torundefined)\<`R`\>

The transformed value if the original value is defined, otherwise undefined.

#### Defined in

[lib/utils/nullish-utils.ts:82](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/nullish-utils.ts#L82)

___

### undefinedToEmptyString

▸ **undefinedToEmptyString**(`value`): `string`

Converts an optional string value to an empty string if it is undefined.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Optional`](README.md#optional)\<`string`\> | The optional string value to convert. |

#### Returns

`string`

The converted string value, or an empty string if the value is undefined.

#### Defined in

[lib/utils/string-utils.ts:48](https://github.com/kacper-olszanski/only-utils/blob/ba28dfd/lib/utils/string-utils.ts#L48)
