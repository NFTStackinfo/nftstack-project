import React from "react"
import { TagStyle } from "./Tag.style"
import { tagData } from "./tag-data"
import { Icon } from "../Icon/Icon"

function Tag({type, className}) {
  const data = tagData[type]

  return (
    <TagStyle className={['tag', data.variant, className].join(' ')}>
      <Icon name={data.icon}/>

      <span className="label text-c">{data.label}</span>
    </TagStyle>
  )
}

export default Tag
