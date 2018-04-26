import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import configureStore from "./store/store"
import Header from "./dumbComp/Header"
import Footer from "./dumbComp/Footer"
import HomePage from "./comp/Home"
import CampaignPage from "./comp/Campaign"
import SuccessPage from "./comp/Success"
import NewCampaignPage from "./comp/NewCampaign"
import ProfilePage from "./comp/Profile"
import Firebase from "./comp/Firebase"
import { Provider } from "react-redux"
import "./styles/css/main.css"

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Firebase />
        <Header />
          <Route exact path="/" component={HomePage} />
          <Redirect exact from="/campaign" to="/" />
          <Route path="/campaign/:id/:desc" component={CampaignPage} />
          <Route exact path="/campaign/new" component={NewCampaignPage} />
          <Route path="/success" component={SuccessPage} />
          <Route path="/profile" component={ProfilePage} />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
)

export default App;
