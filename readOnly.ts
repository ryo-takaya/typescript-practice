export {}

type Profile = {
   readonly name:string
    age:number
}

const me:Profile = {
    name:'ryo',
    age:90
}

type Onry<T> = {
   readonly [P in keyof T]: T[P]
}

type s = Onry<Profile>
const l = {name:'ryo',age:90} as const