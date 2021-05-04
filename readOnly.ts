export {}


class Person{
    private readonly name:string

    constructor(name:string){
      this.name = name
    }

    test(){
        this.name = 'kkkk'
    }
}

const test:Person = new Person('aaaa')