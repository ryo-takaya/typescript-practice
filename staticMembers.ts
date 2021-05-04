export {}


class Me{

   private static isPrograming: boolean = true;
   static firstName: string = 'ryo'
   static lastName: string = 'takaya'

   static test(){
       return this.isPrograming + 'testtest'
   }
}

let me:Me = new Me()
const func = Me.test
console.log(func.call({isPrograming:'this is callObject'}))