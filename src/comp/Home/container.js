import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { toggleLoginModal } from "./../App/actions"

function mapStateToProps(state){
  return {
    ...state,
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      toggleLoginModal,
    },dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
