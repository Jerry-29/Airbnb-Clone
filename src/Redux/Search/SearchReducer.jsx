import { SEARCH_LOCATION,SET_SEARCH } from "./actionType"

const init={
    search:''
}

export const SearchReducer=(store=init,{type,payload})=>{

    switch(type){
      case SEARCH_LOCATION:
          return {...store,search:payload}
        case SET_SEARCH:
            return {...store,search:payload}
      default: return {store}
    }
}