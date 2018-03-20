import React from "react"

const UserInfo = ({
  photoURL,
  displayName,
}) => (
  <div className="user_info_wrap">
    <img src={photoURL} alt={displayName}/>
    <span>{displayName}</span>
  </div>
)

export default UserInfo
