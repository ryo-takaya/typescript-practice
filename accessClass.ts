export {}

class Person{
    private name:string
    private age:number

    constructor(name:string, age:number){
      this.name = name
      this.age = age
    }

    profile():string{
        return `私の名前は${this.name}です。歳は${this.age}`
    }
}

class Dancer extends Person{

    constructor(name:string,age:number){
        console.log(88)
        super(name,age)
    }

    aaa(){
        return 'p'
    }

}

const taro = new Person('aaaa', 29)
console.log(taro.profile())