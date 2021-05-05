export {}

type Debug = () => void
type someTypes =  number | Debug | 'kjkjk' | (() => number)
type FunctionTypes = Exclude<someTypes, string | number>
type ExcludeFunction = Exclude<someTypes, Function>

type FunctionExtract = Extract<someTypes,string>
type SomeExtract = Extract<someTypes, Function | number>