import * as FirebaseActions from "./consts"
import { NO_PROFILE_FOUND, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE } from "./../Dashboard/consts"

const initState = {
  isProfileLoading: true,
  connectedToFirebase: false,
  profile: null,
  user: null,
}

export default function firebaseReducer(state = initState, action){
  switch (action.type) {
    case FirebaseActions.USER_LOGGED:
      return {
        ...state,
        user: action.user,
      }

    case FirebaseActions.USER_LOGGEDOUT:
      return {
        ...state,
        user: null
      }
    case FirebaseActions.CONNECTED_TO_FIREBASE: {
      return {
        ...state,
        connectedToFirebase: true,
      }
    }
    case GET_USER_PROFILE: {
      return {
        ...state,
        isProfileLoading: true,
        profile: null,
      }
    }
    case NO_PROFILE_FOUND: {
      return {
        ...state,
        isProfileLoading: false,
        profile: null,
      }
    }
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isProfileLoading: false,
        profile: action.profile,
      }
    default:
      return state
  }
}
