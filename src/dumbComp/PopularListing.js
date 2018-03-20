import React from "react"
import { Link } from "react-router-dom"
import LocationImageViewer from "./LocationImageViewer"
import UserInfo from "./UserInfo"

const PopularListing = ({campaigns}) => (
  <div className="popular_listing">
    <div className="title">
      <h2>Popular Listings</h2>
    </div>
    <div className="listing">
      {Object.keys(campaigns).map(key => {
        const {
          location,
          price,
          description,
          startDate,
          endDate,
          travellers,
          user,
        } = campaigns[key]
        return (
          <div className="item mdl_shadow">
            <div className="img_wrap">
              <LocationImageViewer location={location} />
            </div>
            <div className="desc_wrap">
              <h4>{location.value}</h4>
              <span className="join_wrap">
                <span>2</span> /<span>10</span>
              </span>
              <p><i>Fri, 1 March - Mon, 4 Sun</i> </p>
              <p>~₹ {campaigns[key].price}/-</p>

              <UserInfo {...user}/>

              <Link to="/campaign/23232/adadaddasd">
                <button>Join</button>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)

export default PopularListing
