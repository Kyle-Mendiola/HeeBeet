import { isOneCharString } from "./utils.js"

export function scrambleInputIsValid(input){
    if(input.length === 0){
        return false
    }
    if(isOneCharString(input)){
        return false
    }
    return true
}