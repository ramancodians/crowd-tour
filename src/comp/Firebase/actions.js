import {
  CONNECTED_TO_FIREBASE,
  CONNECTION_TO_FIREBASE_FAILED,
  USER_LOGGED,
  USER_LOGGEDOUT
} from "./consts"


export const connectedToFirebase = (app) => ({
  type: CONNECTED_TO_FIREBASE,
  app,
})

export const connectionToFirebaseFailed = (error) => ({
  type: CONNECTION_TO_FIREBASE_FAILED,
  error,
})

export const userLogged = (user) => ({
  type: USER_LOGGED,
  user,
})

export const userLoggedOut = () => ({
  type: USER_LOGGEDOUT,
})
