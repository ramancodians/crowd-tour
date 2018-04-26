import React, { Component } from "react"
//import { browserHistory } from "react-router"
import Container from "./container"

class HomePage extends Component{

  state = {}

  componentWillMount(){
    this.props.getCampaigns();
  }

  componentWillReceiveProps(newProps) {
    const { history, firebase } = newProps
    const { user } = firebase
    if(user) {
      history.push("/profile")
    }
  }

  handleLocationPhoto = (dataURL) => {
    this.setState({
      locationImage: dataURL
    })
  }

  render(){
    const { searchLocations, home } = this.props
    const { locationImage } = this.state
    return(
      <div className="page home">
        <div className="main_bg">
          <div className="wrapper">
            <div className="root">
              <div>
                <h1 className="hero_text">
                  Be found on the internet
                </h1>
                <p>
                  ProfileMe helps you connect you with your site vistiors.
                  Our simple interface increase the user engagement which
                  allows better convertion rate and happy customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="wrapper">
            <h2>Features</h2>
            <div className="features_wrap">
              <div className="feature">
                <h2>Simple Integration</h2>
                <p>
                You don’t have to be a developer to use ProfileMe.
                Our Simple Setup process gets Profile me on your site in minutes.
                Yes! With zero programming skills.
                </p>
              </div>
              <div className="feature">
                <h2>Messaging</h2>
                <p>
              ProfileMe makes customer feel home. Its all starts with a simple
              greeting from our friendly bot. We makes it easier for the
              customer to ask bot or yor for the content they’re looking.
                </p>
              </div>
              <div className="feature">
                <h2>Social Media</h2>
                <p>
                In the age of Social Media, ProfileMe makes it easier for
                it easier to customers to share their experience on Social Media.
                </p>
              </div>
              <div className="feature">
                <h2>Simple Integration</h2>
                <p>
                You don’t have to be a developer to use ProfileMe.
                Our Simple Setup process gets Profile me on your site in minutes.
                Yes! With zero programming skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Container(HomePage)
