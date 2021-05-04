export {}


type test = {
    underTwenty:boolean,
    [index:string]:string | boolean | number
}
let profile:test = {underTwenty:false}

profile.name = 'name'
profile.age = 39