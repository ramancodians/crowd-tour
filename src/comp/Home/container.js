import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {
  getCampaigns
} from "./actions"

function mapStateToProps(state){
  return {
    ...state,
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      getCampaigns,
    },dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
