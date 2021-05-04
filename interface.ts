export {}

interface test {
    answer(name:string):string
}

interface kenja{
  ionazun():string
}

interface kenshi{
  punch():string
}

class Jiro implements kenja,kenshi{
  ionazun(){
      return ''
  }

  punch(){
      return 'kjkj'
  }
}