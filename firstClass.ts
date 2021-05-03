export {}

class Age{
    age:number

    constructor(age:number){
      if(age < 0 || 120 < age){
        throw '年齢が不正です'
      }
      this.age = age
    }
}

class Person{
    name:string
    age:Age

    constructor(name:string, age:number){
      this.name = name
      this.age = new Age(age)
    }

    profile():string{
        return `私の名前は${this.name}です。歳は${this.age.age}`
    }
}

const taro:Person = new Person('aaaa', 29)
console.log(taro.profile())