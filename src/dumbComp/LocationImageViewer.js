import React from "react"
import blobUtils from "blob-util"
import GooglePlaces from "google-places"
import classnames from "classnames"
import NoImg from "./../imgs/no-image.svg"
import {
  GOOGLE_PLACE_KEY
} from "./../consts"

class LocationImageViewer extends React.Component {

  constructor(){
    super();
    this.state = {
      activeIndex: 0,
      locationImage: {},
    }
    this.places = new GooglePlaces(GOOGLE_PLACE_KEY);
  }

  componentDidMount(){
    const { ref } = this.props.location
    this.fetchLocationDetails(ref)
  }

  getPhoto = (ref) => {
    const { activeIndex, locationImage } = this.state
    fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${GOOGLE_PLACE_KEY}`)
    .then(res => {
      return res.blob()
    })
    .then(res => {
      blobUtils.blobToDataURL(res)
      .then((dataURL) => {
        this.setState({
          locationImage: {
            ...locationImage,
            [activeIndex]: dataURL
          }
        })
      }).catch(function (err) {
        // error
      });
    })
  }

  fetchLocationDetails = (ref) => {
    this.places.details({reference: ref },
      (err, response) => {
      if(!err && response.result.photos && response.result.photos.length > 0){
        this.setState({
          locationInfo: response.result,
        })
        this.getPhoto(response.result.photos[0].photo_reference)
      }
    });
  }

  getPrevPhoto = () => {
    const { activeIndex, locationInfo } = this.state
    const { photos } = locationInfo
    this.setState({
      activeIndex:  activeIndex - 1,
    })
  }

  getNextPhoto = () => {
    const { activeIndex, locationInfo, locationImage } = this.state
    const { photos } = locationInfo
    this.setState({
      activeIndex:  activeIndex + 1,
    }, () => {
      if(!locationImage[activeIndex + 1]){
        this.getPhoto(photos[activeIndex + 1].photo_reference)
      }
    })
  }

  render(){
    const { activeIndex, locationImage, locationInfo } = this.state
    const { photos } = locationInfo || {}
    const photoLength = photos && photos.length || null
    console.log(this.state);
    console.log(photoLength, activeIndex, photoLength === activeIndex);
    return (
      <div className="location_img_wrap">
        <div className="img_controls">
          <div
            onClick={this.getPrevPhoto}
            className={classnames("btn_wrap", { fake_hide: activeIndex === 0 })}
          >
            L
          </div>
          <div
            onClick={this.getNextPhoto}
            className={classnames("btn_wrap", { fake_hide: photoLength === activeIndex + 1 })}
          >
            R
          </div>
        </div>

        { !locationImage[activeIndex] &&
          <img src={NoImg} alt="No Image"/>
        }
        { locationImage[activeIndex] && <img src={locationImage[activeIndex]} alt=""/>}
      </div>
    )
  }
}

export default LocationImageViewer
