import React, { Component } from "react"
import classnames from "classnames"

class Text extends Component {
  state = {
    focused: false,
  }

  onFocus = (e) => {
    this.setState({
      focused: true,
    })
  }

  onBlur = () => {
    this.setState({
      focused: false,
    })
  }

  render() {
    const {
      props,
      state,
    } = this
    const {
      focused
    } = state
    const {
      containerClass,
      name,
      label,
      error,
      errorMessage,
      value,
    } = props


    return(
      <div
        className={classnames("form_controls_wrap ${containerClass}", {
          error: error,
          focused: focused,
          filled: value && value.length !== 0
        })}
      >
        <label htmlFor={`label_${name}`}>{label}</label>
        <input {...props} onFocus={this.onFocus} onBlur={this.onBlur} placeholder=""/>
        { error && <h6>{errorMessage}</h6> }
        <div className="bar"></div>
      </div>
    )
  }
}

export default Text
