import { TOGGLE_LOGIN_MODAL } from "./consts"
import { createDeltaAction } from "./../../shared/helpers"


export const toggleLoginModal = (visible) => ({
  type: TOGGLE_LOGIN_MODAL,
  visible,
})

export const storeGoogleAuthOject = createDeltaAction("AUTH", "STORE_GOOGLE_AUTH")
