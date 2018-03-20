import firebase from "firebase"

export function getCampaignsApi(){
  console.log("API called");
  return firebase.database()
  .ref("/campaigns")
  .once("value")
}
