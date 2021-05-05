export {}

type DetaileProfile = {
    name:string
    height:number
    weight:number
}
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type Uni = 'one' | 'two' | 'three'

type simpleProfile = Pick<DetaileProfile, 'name' | 'height'>
type SmallProfile = Omit<DetaileProfile,'height'>
type k = keyof DetaileProfile