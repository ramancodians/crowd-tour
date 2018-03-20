import React, { Component } from "react"
import Container from "./container"
import SearchBox from "./../../dumbComp/SearchBox"
import PopularListing from "./../../dumbComp/PopularListing"
import NewListing from "./../../dumbComp/NewListing"


class HomePage extends Component{

  state = {}

  componentWillMount(){
    this.props.getCampaigns()
  }

  handleLocationPhoto = (dataURL) => {
    this.setState({
      locationImage: dataURL
    })
  }

  render(){
    console.log(this.props);
    const { searchLocations, home } = this.props
    const { locationImage } = this.state
    return(
      <div className="page home">
        <div className="main_bg">
          <div className="wrapper">
            <div className="root">
              <div>
                <h1 className="hero_text">Where travellers make travel plan not agency</h1>
                <SearchBox
                  handleLocationPhoto={this.handleLocationPhoto}
                  handleSearchSubmit={searchLocations}
                  shadow
                  placeholder="Where your heart wants to go?"
                />
                { locationImage && <img src={locationImage} alt=""/> }
              </div>
            </div>
          </div>
        </div>
        <div className="popular_listing_wrap">
          <div className="wrapper">
            <PopularListing campaigns={home.campaigns || []}/>
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
