import {
  CONNECT_TO_FIREBASE,
  CONNECT_TO_FIREBASE_FAILED,
  CONNECT_TO_FIREBASE_SUCCESS,
} from "./consts"

const initState = {
  connectedToFirebase: false,
}

export default function appReucer(state = initState, action){
  switch (action.type) {
    case CONNECT_TO_FIREBASE:
      return {
        ...state,
        connectToFirebase: true,
      }

    case CONNECT_TO_FIREBASE_FAILED:
    return {
      ...state,
      connectToFirebase: false,
    }
    default:
      return state
  }
}
