export {}

// const echo = (arg:number):number=>{
//     return arg
// }

// const echo = (arg:string):string =>{
//   return arg
// }

type dd<T,N> = {
    n:T
    func:N
}

const echo = <T>(arg:T):T =>{
    return arg
  }

class Mirror<T>{
    constructor(public value:T){}

    echo():T{
        return this.value
    }
}

console.log(new Mirror<Number>(123).echo())
console.log(new Mirror<string>('kjkjk').echo())