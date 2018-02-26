import React from "react"
import Container from "./container"

class Campaign extends React.Component {

  componentDidMount(){
    console.log("mounted", this.props);

  }

  render(){
    return(
      <div className="page campaign">
        <main>
          <div className="wrapper">
            <div className="root intro">
              <div className="img_wrap">
                <img src="" alt=""/>
              </div>
              <div className="desc_wrap">
                <h2>Kodaikanal</h2>
                <span className="join_wrap">
                  <span>2</span> /<span>10</span>
                </span>
                <p><i>Fri, 1 March - Mon, 4 Sun</i> </p>
                <p>~₹ 3,500/-</p>
                <p>Organiser <strong>Raman Choudahry</strong></p>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Container(Campaign)
