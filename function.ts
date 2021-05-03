export {}

const bmi:(height:number, weighdt:number)=>number = (height: number, weight: number):number => {
  return weight / (height * height)
}

console.log(bmi(1.69, 83))
