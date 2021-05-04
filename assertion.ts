export {}

let name:string = 'ryo'

let length = (name).length

class Test{

    constructor(public foo:string,public bar:number){}
}

interface aaa {
    bar:number
    foo:string
    f:string
}

type kkk = {
    bar:number
    foo:string
}

const j:aaa = new Test('kjkj', 9)
j.f