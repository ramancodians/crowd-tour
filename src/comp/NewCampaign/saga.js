import { put, call, takeEvery } from "redux-saga/effects"
import {
  createCampaignApi
} from "./api"
import {
  CREATE_CAMPAIGN_REQUEST,
  CREATE_CAMPAIGN_SUCCESS,
  CREATE_CAMPAIGN_FAILED,
} from "./consts"
import * as Actions from "./actions"

export function* createCampaignSaga(action){
  try {
    const res = yield call(createCampaignApi, action.data)
    yield put(Actions.createCampaignSuccess("success"))
  } catch (e) {
    console.error(e);
    yield put(Actions.createCampaignFailed(e))
  }
}

export default function* main(){
  yield takeEvery(CREATE_CAMPAIGN_REQUEST, createCampaignSaga)
}
