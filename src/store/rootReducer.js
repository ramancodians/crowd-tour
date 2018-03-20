import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'
import { routerReducer as routing } from "react-router-redux"
import home from "./../comp/Home/reducer"
import firebase from "./../comp/Firebase/reducer"
import newCampaign from "./../comp/NewCampaign/reducer"
import app from "./../comp/App/reducer"

const rootReducer = combineReducers({
  formReducer,
  newCampaign,
  routing,
  home,
  firebase,
  app,
})

export default rootReducer
