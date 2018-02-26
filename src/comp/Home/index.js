import React, { Component } from "react"
import Container from "./container"
import SearchBox from "./../../dumbComp/SearchBox"
import PopularListing from "./../../dumbComp/PopularListing"
import NewListing from "./../../dumbComp/NewListing"


class HomePage extends Component{

  state = {}

  render(){
    console.log(this.props);
    const { searchLocations } = this.props
    return(
      <div className="page home">
        <div className="main_bg">
          <div className="wrapper">
            <div className="root">
              <div>
                <h1 className="hero_text">Where travellers make travel plan not agency</h1>
                <SearchBox
                  handleSearchSubmit={searchLocations}
                  shadow
                  placeholder="Where your heart wants to go?"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="popular_listing_wrap">
          <div className="wrapper">
            <PopularListing />
          </div>
        </div>
        <div className="new_listing_wrap">
          <div className="wrapper">
            <NewListing />
          </div>
        </div>
      </div>
    )
  }
}

export default Container(HomePage)
