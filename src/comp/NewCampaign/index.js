import React from "react"
import DatePicker from 'react-date-picker';
import Container from "./container"
import SearchBox from "./../../dumbComp/SearchBox"
import LocationImageViewer from "./../../dumbComp/LocationImageViewer"
import { Link } from "react-router-dom"

class NewCampaign extends React.Component{

  state = {
    startDate: new Date(),
    endDate: null
  }

  handleStartDate = (date) => { this.setState({ startDate: date })}

  handleEndDate = (date) => { this.setState({ endDate: date })}

  handleInput = (e) => { this.setState({ [e.target.name]: e.target.value }) }

  handleCreateEvent = (e) => {
    e.preventDefault();
    const { createCampaign, user } = this.props
    const { startDate, endDate, price, description, travellers } = this.state
    const data = {
      location: this.SearchBox.getSelectedLocation(),
      startDate,
      endDate,
      description,
      createdAt: new Date(),
      price,
      travellers,
    }
    createCampaign({data, user})
  }

  handleLocationPhoto = (data) => {
    this.setState({
      locationImage: data
    })
  }

  handleLocationsDetails = (data) => {
    this.setState({
      locationInfo: data
    })
  }

  render(){
    const { startDate, endDate, price, travellers, description, locationImage, locationInfo } = this.state
    const { createCompaign, creatingCampaign, campaignCreated } = this.props
    return(
      <div className="page new_campaign">
        <div className="wrapper">
          { !campaignCreated && !creatingCampaign &&
          <div className="root">
            <h1>Create a new Campaign</h1>
            <form action="" onSubmit={this.handleCreateEvent}>
              <div className="main_wrap">
                <div className="row">
                  <SearchBox
                    handleLocationPhoto={this.handleLocationPhoto}
                    simpleInput ref={(ref) => { this.SearchBox = ref }}/>
                </div>
                <div className="main_form">
                  <div className="row half">
                    <div>
                      <label htmlFor="startDate">Start Date</label>
                      <DatePicker
                        onChange={this.handleStartDate}
                        value={startDate}
                      />
                    </div>
                    <div>
                      <label htmlFor="startDate">End Date</label>
                      <DatePicker
                        onChange={this.handleEndDate}
                        value={endDate}
                      />
                    </div>
                  </div>
                  <div className="row column">
                    <label htmlFor="price">Price per person (approx.)</label>
                    <input type="number" placeholder="₹ 3,000/-" value={price} name="price" onChange={this.handleInput}/>
                  </div>
                  <div className="row column">
                    <label htmlFor="price">Minimum number of travells to confirm the trip?</label>
                    <input type="number" placeholder="5" value={travellers} name="travellers" onChange={this.handleInput}/>
                  </div>
                  <div className="row column">
                    <label htmlFor="price">Tell us about the trip</label>
                    <textarea name="" id="" cols="30" rows="10" name="description" onChange={this.handleInput} value={description} ></textarea>
                  </div>
                  <div className="row column">
                    <button className="btn btn_create_campaign" onClick={this.handleCreateEvent}>Create Campaign</button>
                  </div>
                </div>
              </div>
              <div className="sidebar">
                { locationInfo &&
                    <LocationImageViewer location={locationInfo} />
                }
              </div>
            </form>
          </div>
        }

        { !creatingCampaign && campaignCreated &&
          <div className="root">
            <h1>Campaign Created</h1>
            <div>Go to <Link to="/">Home</Link></div>
          </div>
        }

        { creatingCampaign && !campaignCreated &&
          <div className="root">
            <h1>Creating Campaign</h1>
          </div>
        }
        </div>
      </div>
    )
  }
}

export default Container(NewCampaign)
