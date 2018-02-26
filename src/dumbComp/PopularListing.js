import React from "react"
import { Link } from "react-router-dom"

const PopularListing = () => (
  <div className="popular_listing">
    <div className="title">
      <h2>Popular Listings</h2>
    </div>
    <div className="listing">
      {[1,23,4,5].map(i => (
        <Link to="/campaign/3223/this-is-some-page">
          <div className="item mdl_shadow" key={i}>
            <div className="img_wrap">
              <img src={require("./../imgs/mock/kodai.jpeg")} alt=""/>
            </div>
            <div className="desc_wrap">
              <h4>Kodaikanal</h4>
              <span className="join_wrap">
                <span>2</span> /<span>10</span>
              </span>
              <p><i>Fri, 1 March - Mon, 4 Sun</i> </p>
              <p>~₹ 3,500/-</p>
              <p>Organiser <strong>Raman Choudahry</strong></p>
              <button>Join</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

export default PopularListing
