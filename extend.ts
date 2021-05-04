export {}

class Animal{

    constructor(public name:string){}

    run(){
        console.log('kjkjkjk')
         "I can run"
    }
}

class Lion extends Animal{

    speed:number

    constructor(public name:string, speed:number){
        super(name)
        this.speed = speed
    }

    run(){
        const parent = super.run()
        console.log(parent)
        return "I can run 80km"
    }
}

// const animal = new Animal()
// console.log(animal.run())

const lion = new Lion('gaon', 80)
 lion.run()