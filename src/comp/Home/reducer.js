import {
  SEARCH_LOCATIONS
} from "./consts"

const initState = {
  
}

export default function homeReducer(state = initState, action){
  switch (action.type) {
    case SEARCH_LOCATIONS:
      return {
        ...state,
      }
    default:
      return state
  }
}
