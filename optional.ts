export {}

let bmi:(height:number, weight:number,printable?:boolean) => number|void = (
    height:number, 
    weight:number,printable?:boolean):number|void => {
        if(printable){
          console.log(weight / (height * height))
          return
        }
        return weight / (height * height)
    }

bmi(1.68,33,true)
