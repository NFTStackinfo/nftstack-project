import React, { useEffect } from "react"
import { TagStyle } from "./Tag.style"
import { tagData } from "./tag-data"
import { Icon } from "../Icon/Icon"

function Tag({type, className, label}) {
  const data = tagData[type]

  return (
    <TagStyle className={['tag', data.variant, className].join(' ')}>
      <Icon name={data.icon}/>

      <span className="label text-c">{label || data.label}</span>
    </TagStyle>
  )
}

export default Tag
