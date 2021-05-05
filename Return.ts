export {}

function add (a:number, b:number){
  return a + b
}

type retur = ReturnType<typeof add>
