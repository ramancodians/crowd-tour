import React from "react"
import { Link } from "react-router-dom"

const Footer = () => (
  <footer className="app_footer">
    <div className="wrapper">
      <div className="root">
        <div className="logo-wrap">
          <div className="logo_wrap">
            <Link to="/">
              <span className="logo_text">
                <span>Profile</span><span>Me</span>
              </span>
            </Link>
          </div>
          <p>© 2018 ProfileMe. All rights reserved.</p>
        </div>
        <div className="link_list">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Privat Policy</a>
            </li>
            <li>
              <a href="">Refund</a>
            </li>
          </ul>
        </div>
        <div className="link_list">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Privat Policy</a>
            </li>
            <li>
              <a href="">Refund</a>
            </li>
          </ul>
        </div>
        <div className="social_media">
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
