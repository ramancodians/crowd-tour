import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as NewCampaignActions from "./actions"
import { getUserData } from "./../utils/user"

function mapStateToProps(state){

  const { creatingCampaign, campaignCreated } = state.newCampaign
  return {
    user: getUserData(state),
    creatingCampaign,
    campaignCreated,
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
