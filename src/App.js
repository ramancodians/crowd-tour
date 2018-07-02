import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import configureStore from "./store/store"
import Container from "./comp/App/HeaderContainer"
import Header from "./dumbComp/Header"
import Footer from "./dumbComp/Footer"
import HomePage from "./comp/Home"
import SuccessPage from "./comp/Success"
import ProfilePage from "./comp/Profile"
import DashboardPage from "./comp/Dashboard"
import Firebase from "./comp/Firebase"
import { Provider } from "react-redux"
import "./styles/css/main.css"

const store = configureStore();
const ConnectedHeader = Container(Header)

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Firebase />
        <ConnectedHeader />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route path="/success" component={SuccessPage} />
          <Route path="/profile" component={ProfilePage} />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
)

export default App;
