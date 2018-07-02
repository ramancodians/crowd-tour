import { fork } from "redux-saga/effects"
// Sagas
import DashboardSaga from "./../comp/Dashboard/saga"

export default function* main() {
  yield fork(DashboardSaga)
}
