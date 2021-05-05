export {}

const debugProfile = (name:string, age:number):void => {
    console.log({name, age})
}
type returnType = ReturnType<typeof debugProfile>
type Parameter = Parameters<typeof debugProfile>
const test:Parameter = ['kk', 9]

debugProfile('ryo', 39)

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
