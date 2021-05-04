export {}

let foo:any
let bar:string = 'kjk'

bar = foo

let imcompaFoo
let imcompaVar

interface Animal{
    age:number
    name:string
}

class Person{
    constructor(public age:number, public name:string){}
}

const me:Animal = new Person(899, 'kjk')