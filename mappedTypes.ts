export {}

type Profile = {
    name:string
    age:number
}

type PartialProfile = Partial<Profile>
type RequireProfile = Required<PartialProfile>

const obj:PartialProfile = {
    name:'kjkj'
}

type map = {
    [P in keyof Profile]:Profile[P]
}

type ind = {
    [index:string]:number
}

const k:ind = {}
k[0] = 3

type Optional<T> = {
    [P in keyof T]?: T[P] | null
}