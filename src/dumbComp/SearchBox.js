import React from "react"
import GooglePlaces from "google-places"
import classnames from "classnames"
import Autosuggest from 'react-autosuggest';
import {
  GOOGLE_PLACE_KEY
} from "./../consts"

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

const getSuggestions = value => {
  console.log("getSuggestions", value);
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => {
  console.log("getSuggestionValue", suggestion);
  return suggestion.value
}

const renderSuggestion = suggestion => (
  <div>
    {suggestion.value}
  </div>
);

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
        this.getSuggestionsFromGoogle(searchText)
      }
    })
  }


  getSuggestionsFromGoogle = (searchText) => {
    this.places.autocomplete({input: searchText, types: "(cities)"}, (err, response) => {
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

  getSearchText = () => {
    const { searchText } = this.state
    return searchText
  }

  render(){
    const { handleSearchSubmit, simpleInput, shadow } = this.props
    const { searchText, suggestions } = this.state


    const inputProps = {
      placeholder: 'Where your heart want to go?',
      value: searchText,
      onChange: this.handleSearchType
    };

    console.log("asd-->", suggestions);
    return(
      <div className={classnames("search_wrap", {
        simple_input: simpleInput,
         mdl_shadow: shadow,
      })} >
        <Autosuggest
           suggestions={suggestions}
           onSuggestionsFetchRequested={() => {}}
           onSuggestionsClearRequested={() => {}}
           getSuggestionValue={getSuggestionValue}
           renderSuggestion={renderSuggestion}
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
