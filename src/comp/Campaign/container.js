import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as Actions from "./actions"

function mapStateToProps(state){
  return {
    compaign: "asdadad adasd",
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      ...Actions,
    },dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
