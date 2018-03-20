export function getUserData(state) {
  const { user } = state.firebase || {}
  const {
    displayName,
    email,
    photoURL,
    uid,
  } = user || {}
  return {
    displayName,
    email,
    photoURL,
    uid,
  }
}
