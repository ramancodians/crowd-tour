import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import {createLogger} from "redux-logger"
//import { browserHistory } from "react-router"
import { routerMiddleware } from "react-router-redux"
import sagas from "./saga"
import rootReducer from "./rootReducer"

const initGlobalState = {}

let reduxDevTools = false;
const router = routerMiddleware()
const sagaMiddleware = createSagaMiddleware()

const middlewares = [router, sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ //eslint-disable-line no-underscore-dangle
  middlewares.push(createLogger({
    level: "info",
    collapsed: true,
  }))
}

const composeEnhancers = reduxDevTools || compose
const enhancer = applyMiddleware(...middlewares)

export default function configureStore(){
  const store = createStore(rootReducer, initGlobalState, composeEnhancers(enhancer))
  sagaMiddleware.run(sagas)
  return store
}
