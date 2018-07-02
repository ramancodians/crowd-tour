import React from "react"
import Container from "./Container"
import Auth from "./../utils/Auth"
import { Link } from "react-router-dom"
import NoDashboardSetup from "./../../dumbComp/NoDashboardSetup"
import DashboardAnalytics from "./../../dumbComp/DashboardAnalytics"

class Dashboard extends React.Component {

  render() {
    const {
      profile,
      getDashboard,
      isProfileLoading,
      dashboard,
      isDashboardLoading,
      user,
    } = this.props
    const { uid } = user || {}
    return (
      <Auth history={this.props.history}>
        <div className="page dashboard">
          <div className="wrapper">
            <header>
              <span>Dashboard</span>
            </header>
            <div className="section_wrap">
              <aside>
                <h1>Aside</h1>
              </aside>
              <main>
                { isProfileLoading
                  ? (
                    <h3>Loading...</h3>
                  )
                  :(
                    <div>
                      { !profile &&
                        <div className="no_profile">
                            <h4>Seems like you have not created a Profile with us</h4>
                            <p>A profile is the information you want to share on your website or app</p>
                            <Link to="/profile">
                              Create Profile
                            </Link>
                        </div>
                      }

                      { !dashboard && profile &&
                        <NoDashboardSetup uid={uid} firstSetup/>
                      }

                      { dashboard && profile &&
                        <DashboardAnalytics />
                      }
                    </div>
                  )
                }
              </main>
            </div>
          </div>
        </div>
      </Auth>
    )
  }
}

export default Container(Dashboard)
