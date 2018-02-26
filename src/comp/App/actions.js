import {
  CONNECT_TO_FIREBASE,
  CONNECT_TO_FIREBASE_FAILED,
  CONNECT_TO_FIREBASE_SUCCESS
} from "./consts"

export const connectToFirebase = () => ({
  type: CONNECT_TO_FIREBASE
})

export const connecToFirebaseFailed = () => ({
  type: CONNECT_TO_FIREBASE_FAILED
})

export const connecToFirebaseSuccess = () => ({
  type: CONNECT_TO_FIREBASE_SUCCESS
})
