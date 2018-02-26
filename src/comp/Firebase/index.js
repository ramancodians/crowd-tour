import React from "react"
import firebase from "firebase"
import {
  FIREBASE_CONFIG
} from "./consts"
import Container from "./container"

class Firebase extends React.Component{

  componentDidMount(){
    const { connectedToFirebase, connectionToFirebaseFailed } = this.props
   const app = firebase.initializeApp(FIREBASE_CONFIG);
   if(app){
    connectedToFirebase(app)
   }else{
    connectionToFirebaseFailed("some error")
   }
 }

  render(){
    return (
      <div></div>
    )
  }
}

export default Container(Firebase)
