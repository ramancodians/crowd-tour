import React from "react"

const NewListing = () => (
  <div className="popular_listing">
    <div className="title">
      <h2>New Listings</h2>
    </div>
    <div className="listing">
      {[1,23,4,5].map(i => (
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
      ))}
    </div>
  </div>
)

export default NewListing
