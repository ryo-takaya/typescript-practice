export {}

function double(value:number):number;
function double(value:string):string;

function double  (value:any):any{
  return value * 2
}

// const double = (value:string):string => {
//   return value + value
// }