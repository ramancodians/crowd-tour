import { createDeltaAction } from "./../../shared/helpers"
import {
  GET_USER_PROFILE,
  NO_PROFILE_FOUND,
  GET_USER_PROFILE_SUCCESS,
} from "./consts"

export const getUserProfile = (uid) => ({
  type: GET_USER_PROFILE,
  uid,
})

export const noProfileFound = () => ({
  type: NO_PROFILE_FOUND,
})

export const getProfileSuccess = (profile) => ({
  type: GET_USER_PROFILE_SUCCESS,
  profile,
})

export const getDashboard = createDeltaAction("USER", "DASHBOARD")
