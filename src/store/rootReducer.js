import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'
import { routerReducer as routing } from "react-router-redux"
import home from "./../comp/Home/reducer"
import firebase from "./../comp/Firebase/reducer"

const rootReducer = combineReducers({
  formReducer,
  routing,
  home,
  firebase
})

export default rootReducer
