import React from "react"
import GooglePlaces from "google-places"
import classnames from "classnames"
import Autosuggest from 'react-autosuggest';
import blobUtils from "blob-util"
import {
  GOOGLE_PLACE_KEY
} from "./../consts"
import {
  getAutoCompleteValue
} from "./../shared/helpers"

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
];


class SearchBox extends React.Component {

  constructor(){
    super();
    this.state = {
      suggestions:[{
        value: "Manar",
      }],
      searchText: ""
    }
    this.places = new GooglePlaces(GOOGLE_PLACE_KEY);
  }

  getSelectedLocation = () => {
    const { selectedLocation } = this.state
    return selectedLocation
  }

  getPhoto = (ref) => {
    fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${GOOGLE_PLACE_KEY}`)
    .then(res => {
      return res.blob()
    })
    .then(res => {
      blobUtils.blobToDataURL(res)
      .then((dataURL) => {
        this.props.handleLocationPhoto && this.props.handleLocationPhoto(dataURL)
      }).catch(function (err) {
        // error
      });
    })
  }

  getSuggestionValue = suggestion => {
    this.setState({
      selectedLocation: suggestion,
    })
    this.places.details({reference: suggestion.ref },
      (err, response) => {
      if(response.result.photos && response.result.photos.length > 0){
        this.getPhoto(response.result.photos[0].photo_reference)
      }
      if( !err && this.props.handleLocationsDetails){
        this.props.handleLocationsDetails(response.result)
      }
    });
    return suggestion.value
  }

  renderSuggestion = suggestion => (
    <div>
      {suggestion.value}
    </div>
  )

  handleSearchType = (e) => {
    let searchText = e.target.value
    let isClicked = false
    if(e.target.nodeName === "DIV" || e.target.nodeName === "LI"){
      searchText = e.target.innerText
      isClicked = true
    }
    this.setState({
      searchText,
    },() => {
      if(!isClicked){
        //this.getSuggestionsFromGoogle(searchText)
        getAutoCompleteValue(searchText)
      }
    })
  }


  getSuggestionsFromGoogle = (searchText) => {
    this.places.autocomplete({input: searchText}, (err, response) => {
      if(err){
        console.error(err);
      }else if(response){
        if(response.status === "OK" && response.predictions){
          const modifiedList = response.predictions.map(x => ({
            value: x.description,
            id: x.id,
            placeId: x.place_id,
            ref: x.reference,
          }))
          console.log("asasas", modifiedList);
          this.setState({
            suggestions: modifiedList,
          })
        }
      }
    })
  }

  render(){
    const { handleSearchSubmit, simpleInput, shadow } = this.props
    const { searchText, suggestions } = this.state
    const inputProps = {
      placeholder: 'Where your heart want to go?',
      value: searchText,
      onChange: this.handleSearchType
    };

    return(
      <div className={classnames("search_wrap", {
        simple_input: simpleInput,
        mdl_shadow: shadow,
      })} >
        <Autosuggest
           suggestions={suggestions}
           onSuggestionsFetchRequested={() => {}}
           onSuggestionsClearRequested={() => {}}
           getSuggestionValue={this.getSuggestionValue}
           renderSuggestion={this.renderSuggestion}
           inputProps={inputProps}
        />
        { !simpleInput &&
          <button onClick={() => { handleSearchSubmit("asdasdadasd")}}>
            Search
          </button>
        }
      </div>
    )
  }
}

export default SearchBox
