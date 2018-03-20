import {
  SEARCH_LOCATIONS,
  GET_CAMPAIGNS_SUCCESS,
} from "./consts"

const initState = {

}

export default function homeReducer(state = initState, action){
  switch (action.type) {
    case SEARCH_LOCATIONS:
      return {
        ...state,
      }
    case GET_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        campaigns: action.res
      }
    default:
      return state
  }
}
