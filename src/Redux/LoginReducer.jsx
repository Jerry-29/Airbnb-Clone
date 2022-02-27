import { LOGGEDIN, LOGOUT } from "./actiontype"

const init={
    status:false
}

export const LoginReducer=(store=init,{type,payload})=>{
    switch(type){

        case LOGGEDIN:
            return {...store,status:true}
        case LOGOUT:
            return {...store,status:false} 
        default:
            return store       
    }
}