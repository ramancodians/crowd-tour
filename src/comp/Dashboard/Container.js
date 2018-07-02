import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { getUserProfile, getDashboard } from "./actions"

function mapStateToProps(state, ownProps){
  const { firebase, dashboard } = state
  const { profile, user, isProfileLoading } = firebase
  return {
    profile,
    user,
    isProfileLoading,
    ...dashboard,
    ...ownProps,
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      getUserProfile,
      getDashboard: getDashboard.request,
    },dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
