import React from "react"
import { Link } from "react-router-dom"
import FA from "react-fontawesome"
import firebase from "firebase"
import LoginModal from "./LoginModal"
import FirebaseAuthContainder from "./../comp/Firebase/container"
import Dropdown, { DropdownTrigger, DropdownContent } from "react-simple-dropdown";
class Header extends React.Component{

  handleLinkClick = () => {
    this.refs.dropdown.hide();
  }

  handleLogout = () => {
    const { userLoggedOut } = this.props
    firebase.auth().signOut().then(function() {
      userLoggedOut();
    }).catch(function(error) {
      // An error happened.
    });
  }

  render(){
    const {
      userLogged,
      userLoggedOut,
      user,
      isLoginModalOpen,
      toggleLoginModal,
      storeGoogleAuthOject,
    } = this.props
    return(
      <header className="app_header">
        <LoginModal
          visible={isLoginModalOpen}
          closeModal={() => { toggleLoginModal(false)}}
          userLoggedOut={userLoggedOut}
          userLogged={userLogged}
          storeGoogleAuthOject={storeGoogleAuthOject}
        />
        <div className="wrapper">
          <div className="root">
            <div className="logo_wrap">
              <Link to="/">
                <span className="logo_text">
                  <span>Profile</span><span>Me</span>
                </span>
              </Link>
            </div>
            <nav>
              { !user && <Link to="/success">Success Stories</Link> }
              { !user && <Link to="/about">About</Link> }

              { user && <Link to="/dashboard">Dashboard</Link> }

              {!user &&
                <button
                  className="btn_join main"
                  onClick={() => { toggleLoginModal(true) }}
                >
                  Sign In
                </button>
              }

              {user &&
                <Dropdown className="account-dropdown" ref="dropdown">
                  <DropdownTrigger>
                    <div className="logged_user">
                      <div className="img_wrap">
                        <img src={user.photoURL} alt=""/>
                      </div>
                      <div>
                        <p>{user.displayName}</p> <FA name="calendar" />
                      </div>
                    </div>
                  </DropdownTrigger>
                  <DropdownContent>
                    <ul className="account-dropdown__quick-links account-dropdown__segment">
                      <li className="account-dropdown__link">
                        <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                          Your profile
                        </a>
                      </li>
                      <li className="account-dropdown__link">
                        <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                          Explore
                        </a>
                      </li>
                      <li className="account-dropdown__link">
                        <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                          Help
                        </a>
                      </li>
                    </ul>
                    <ul className="account-dropdown__management-links account-dropdown__segment">
                      <li className="account-dropdown__link">
                        <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                          Settings
                        </a>
                      </li>
                      <li className="account-dropdown__link">
                        <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLogout}>
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </DropdownContent>
                </Dropdown>
              }
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default FirebaseAuthContainder(Header)
