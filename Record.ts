export {}

type Pre = 'tokyo' | 'kanagawa'

type CovidInfo = {
    kanji_name:string
    confirmed_cases:number
}

type CovidJapan = {
    [index:string]:CovidInfo
}

const test:Record<Pre, CovidInfo> = {
    'tokyo':{kanji_name:'神奈川',confirmed_cases:20},
    kanagawa:{kanji_name:'神奈川',confirmed_cases:20}
}

type re = Readonly<CovidInfo>

const l:re = {
    kanji_name:'kan',
    confirmed_cases:8
}

type CovidJapanInfo = Record<Pre, CovidInfo>

type Re<T extends keyof any,P> = {
  [I in T]:P
}

type Ori = Re<Pre, CovidInfo>