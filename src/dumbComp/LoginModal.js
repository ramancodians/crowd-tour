import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import firebase from "firebase"
import LoginWithGoogleImg from "./../imgs/sign-in-with-google.png"

export default class Examples extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const { userLogged, userLoggedOut } = this.props
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        userLogged(user)
      } else {
        userLoggedOut()
      }
    });
  }

  loginWithFB = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log("success",result);
        this.props.closeModal()
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  loginWithGoogle = () => {
    const { storeGoogleAuthOject } = this.props
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log("success",result)
        storeGoogleAuthOject(result)
        this.props.closeModal()
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    if(!this.props.visible) return null
    return (
      <Modal
        visible={this.props.visible}
        effect="fadeInUp"
        onClickAway={() => this.props.closeModal()}
        className="login_modal"
        style={{
          background: "red",
        }}
      >
      <div className="login_modal">
        <div className="text_wrap">
          <h3>Just one</h3>
          <h1>Step away.</h1>
        </div>
        <div className="login_wrap">
          <img src={LoginWithGoogleImg} alt="Login with Google" onClick={this.loginWithGoogle}/>
        </div>
      </div>
      </Modal>
    );
  }
}
