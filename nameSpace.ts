export {}

namespace Japanese {
    export  namespace Tokyo{
        export  class Person{
            constructor(public name:string){}
        }
    }
}

namespace English {
    class Person{
        constructor(public firstName:string, public middleName:string ,public lastName:string){}
    }
}

const me = new Japanese.Tokyo.Person('ryo')
console.log(me.name)