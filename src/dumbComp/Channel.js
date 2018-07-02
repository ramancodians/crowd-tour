import React from "react"

const Channel = ({ name, children }) => (
  <div className="channel">
    <header>
      <h5>{name}</h5>
    </header>
    {children}
  </div>
)

export default Channel
