import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as NewCampaignActions from "./actions"

function mapStateToProps(state){
  return {
    newCampaign: "asdadad adasd",
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      ...NewCampaignActions,
    },dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
