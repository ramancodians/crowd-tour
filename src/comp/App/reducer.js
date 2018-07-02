import {
  TOGGLE_LOGIN_MODAL,
} from "./consts"

const initState = {
  connectedToFirebase: false,
  isLoginModalOpen: false,
}

export default function appReucer(state = initState, action){
  switch (action.type) {
    case TOGGLE_LOGIN_MODAL: {
      const { isLoginModalOpen } = state
      const { visible } = action
      return {
        ...state,
        isLoginModalOpen: visible || !isLoginModalOpen,
      }
    }
    default:
      return state
  }
}
