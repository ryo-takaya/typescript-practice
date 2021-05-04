export {}

const name = 'ryo'

let nickname = 'ryo' as const

let profile = {
    name:'ryo',
    height:198 as const,
    obj:{
        lklk:{
            number:0
        }
    }
} as const

profile.name = 'kk'