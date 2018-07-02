import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'
import { routerReducer as routing } from "react-router-redux"
import home from "./../comp/Home/reducer"
import firebase from "./../comp/Firebase/reducer"
import app from "./../comp/App/reducer"
import dashboard from "./../comp/Dashboard/reducer"

const rootReducer = combineReducers({
  formReducer,
  routing,
  home,
  firebase,
  app,
  dashboard,
})

export default rootReducer
