import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as Actions from "./actions"

function mapStateToProps(state){
  const { user } = state.firebase
  return{
    user,
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      ...Actions,
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
