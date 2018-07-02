import { put, call, takeEvery, select } from "redux-saga/effects"
import { GET_USER_PROFILE } from "./consts"
import { getUserProfileAPI, getUserDashboardAPI, storeGoogleAuthOjectAPI } from "./api"
import { noProfileFound, getProfileSuccess, getDashboard } from "./actions"
import { storeGoogleAuthOject } from "./../App/actions"
import { getUID } from "./selectors"

export function* getUserProfileSaga(action){
  try {
    const uid = yield select(getUID)
    const res = yield call(getUserProfileAPI, uid)
    if (!res) {
      yield put(noProfileFound())
    }else {
      yield put(getProfileSuccess(res))
    }
  } catch (e) {
    console.warn(e);
  }
}

export function* getDashboardSaga(action){
  try {
    const uid = yield select(getUID)
    const res = yield call(getUserDashboardAPI, uid)
    if (!res) {
      yield put(getDashboard.failed())
    }else {
      yield put(getDashboard.success(res))
    }
  } catch (e) {
    console.warn(e);
  }
}

export function* storeGoogleAuthOjectSaga(action) {
  try {
    const res = yield call(storeGoogleAuthOjectAPI, action.data)
    if (res.success) {
      yield put(storeGoogleAuthOject.success(res.data))
    }
  } catch (e) {
    yield put(storeGoogleAuthOject.failed(e))
  }
}

export default function* main(){
  yield takeEvery("USER_LOGGED", getUserProfileSaga)
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga)
  yield takeEvery(getDashboard.REQUEST, getDashboardSaga)
  yield takeEvery("USER_LOGGED", getDashboardSaga)
  yield takeEvery(storeGoogleAuthOject.REQUEST, storeGoogleAuthOjectSaga)
}
