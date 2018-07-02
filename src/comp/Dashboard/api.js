import firebase from "firebase"
const BASE_URL = true ? "http://localhost:4000" : ""

export const getUserProfileAPI = (uid) => {
  const db = firebase.database();
  return db.ref(`users/${uid}`)
  .once("value")
  .then( snap => snap.val())
}

export const getUserDashboardAPI = (uid) => {
  const db = firebase.database();
  return db.ref(`dashboards/${uid}`)
  .once("value")
  .then( snap => snap.val())
}

export const storeGoogleAuthOjectAPI = (obj) => {
  return fetch(`${BASE_URL}/google-auth`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
}
