import { fork } from "redux-saga/effects"

// Sagas
import AppSaga from "./../comp/App/saga"
import NewCampaignSaga from "./../comp/NewCampaign/saga"


export default function* main() {
  yield fork(AppSaga)
  yield fork(NewCampaignSaga)
}
