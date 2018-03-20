import { put, call, take, takeEvery, throttle } from "redux-saga/effects"
import { delay } from "redux-saga"
import {
  GET_CAMPAIGNS_REQUEST,
  GET_CAMPAIGNS_FAILED,
  GET_CAMPAIGNS_SUCCESS,
} from "./consts"
import {
  getCampaignsApi,
} from "./api"
import {
  getCampaigns,
  getCampaignsFailed,
  getCampaignsSuccess,
} from "./actions"

export function* getCampaignSaga(action){
  try {
    console.log("2323232", action);
    const res = yield call(getCampaignsApi)
    yield put(getCampaignsSuccess(res.val()))
  } catch (e) {
    put(getCampaignsFailed(e))
  }
}

export default function* main(){
  yield takeEvery("CONNECTED_TO_FIREBASE", getCampaignSaga)
}
