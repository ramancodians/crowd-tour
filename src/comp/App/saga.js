import { put, call, takeEvery } from "redux-saga/effects"
import * as Actions from "./actions"
import {
  CONNECT_TO_FIREBASE
} from "./consts"

export function* connecToFirebase(action) {
  try{

  }catch(e){
    console.log(e);
  }
}

export default function* main() {
  yield takeEvery(CONNECT_TO_FIREBASE, connecToFirebase)
}
