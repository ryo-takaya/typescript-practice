export {}

type pitch = {
    speed:number
}

type batt = {
    swingSpeed:number
}

const ochiai:batt & pitch = {
    speed:9,
    swingSpeed:0
} 