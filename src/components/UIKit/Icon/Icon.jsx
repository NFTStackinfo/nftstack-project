import * as React from "react"
import IcomoonReact from "icomoon-react"
import iconSet from "./selection.json"

export const Icon = ({ name, className = "", onClick, size }) => {
  return (
    <IcomoonReact
      onClick={onClick}
      className={["icon", className].join(" ")}
      iconSet={iconSet}
      icon={name}
      size={size}
    />
  )
}
