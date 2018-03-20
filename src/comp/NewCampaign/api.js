import firebase from "firebase"


export function createCampaignApi(param){
  const { data, user } = param
  const db = firebase.database();
  const campaignRef = db.ref("/campaign")
  const newCampaignKey = campaignRef.push().key
  console.log(newCampaignKey);

  var updates = {}
  updates["/campaigns/" + newCampaignKey] = {...data, user }
  updates[`/users/${user.uid}/campaigns/${newCampaignKey}`] = data
  return firebase.database().ref().update(updates)
}
