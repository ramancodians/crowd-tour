import { put, call, takeEvery } from "redux-saga/effects"
import {
  createCampaignApi
} from "./api"
import {
  CREATE_CAMPAIGN_REQUEST,
  CREATE_CAMPAIGN_SUCCESS,
  CREATE_CAMPAIGN_FAILED,
} from "./consts"

export function* createCampaignSaga(action){
  try {
    const res = yield call(createCampaignApi, action.data)
    console.log("res --> ", res);
  } catch (e) {
    console.error(e);
  }
}

export default function* main(){
  yield takeEvery(CREATE_CAMPAIGN_REQUEST, createCampaignSaga)
}
