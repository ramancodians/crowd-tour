import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { toggleLoginModal } from "./../App/actions"

function mapStateToProps(state, ownProps){
  return {
    ...ownProps,
    ...state,
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
    },dispatch)
  }
}

class Auth extends React.Component {
  componentWillMount(){
    const { history, firebase } = this.props
    const { user } = firebase
  }

  componentWillUpdate(newProps) {
    const { connectedToFirebase, user } = newProps.firebase
    if (connectedToFirebase && !user) {
      const { history } = this.props
      history.push("/")
    }
  }

  render(){
    return this.props.children
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
