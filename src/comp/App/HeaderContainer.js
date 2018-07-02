import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { toggleLoginModal, storeGoogleAuthOject } from "./../App/actions"


function mapStateToProps(state){
  const { isLoginModalOpen } = state.app
  return {
    isLoginModalOpen,
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      toggleLoginModal,
      storeGoogleAuthOject: storeGoogleAuthOject.request,
    },dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
