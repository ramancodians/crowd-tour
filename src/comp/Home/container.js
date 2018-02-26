import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as HomeActions from "./actions"

function mapStateToProps(state){
  return {
    homeState: "asdadad adasd",
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      ...HomeActions,
    },dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
