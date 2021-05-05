export {}

type Test = {
    name:string
    age:number
    child: boolean
}

type Option<T> = {
   [I in keyof T]?: T[I]
}

type k = Option<Test>
