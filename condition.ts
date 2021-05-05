export {}

type some = number | string | boolean 
type ex = Exclude<some, 4 | boolean>
type MyExclude<T> = T extends string | number ? never : T;
type test = MyExclude<some>
type kj = NonNullable<'kj' | null>