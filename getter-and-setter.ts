export {}


class MyNumberCurd{
    private _owner:string
    private _secretNumber:number

    constructor(owner:string, secretNumber:number){
      this._owner = owner
      this._secretNumber = secretNumber
    }

    get test(){
        return 'test君'
    }

    set secretNumber(number){
        this._secretNumber = number
    }

    get owner(){
      return this._owner
    }
}

const test:MyNumberCurd = new MyNumberCurd('太郎くん', 20)
console.log(test.test)