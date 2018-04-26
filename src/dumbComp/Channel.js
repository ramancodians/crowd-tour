import React from "react"

const Channel = ({ name, children, enabled}) => (
  <div className="channel">
    <header>
      <h5>{name}</h5>
      <input type="checkbox" checkbox={enabled}/>
    </header>

    {children}
  </div>
)

export default Channel
