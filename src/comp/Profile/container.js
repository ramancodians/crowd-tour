import { bindActionCreators } from "redux"
import { connect } from "react-redux"

function mapStateToProps(state){
  return {
    ...state,
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
    },dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
