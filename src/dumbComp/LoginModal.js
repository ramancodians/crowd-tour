import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import firebase from "firebase"

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
    const provider = new firebase.auth.GoogleAuthProvider();
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
        <button onClick={this.loginWithFB}>Login with FB</button>
        <button onClick={this.loginWithGoogle}>Login with Googlee</button>
      </div>
      </Modal>
    );
  }
}
