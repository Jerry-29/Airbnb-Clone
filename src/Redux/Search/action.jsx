import { SEARCH_LOCATION, SET_SEARCH } from "./actionType"


export const setsearchtext=(payload)=>{
    return {type:SET_SEARCH,payload}
}
export const searchlocationinMap=(payload)=>{

    return {type:SEARCH_LOCATION,payload}

}