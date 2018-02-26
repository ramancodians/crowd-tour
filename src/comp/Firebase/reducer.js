import * as FirebaseActions from "./consts"

const initState = {}

export default function firebaseReducer(state = initState, action){
  switch (action.type) {
    case FirebaseActions.USER_LOGGED: {
      return {
        ...state,
        user: action.user
      }
    }

    case FirebaseActions.USER_LOGGEDOUT: {
      return {
        ...state,
        user: null
      }
    }
    default:
      return state
  }
}
