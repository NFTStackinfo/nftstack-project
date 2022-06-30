import * as React from "react"
import IcomoonReact from "icomoon-react"
import iconSet from "./selection.json"

const Icon = ({ name, className = "", onClick }) => {
  return (
    <IcomoonReact
      onClick={onClick}
      className={["icon", className].join(" ")}
      iconSet={iconSet}
      icon={name}
    />
  )
}

export { Icon }
