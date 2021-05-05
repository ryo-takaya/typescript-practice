export {}

function add (a:number, b:number){
    return a + b
  }
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type MyReturnType<T extends (...args: any) => any > = T extends (...args: any) => infer R? R: any;