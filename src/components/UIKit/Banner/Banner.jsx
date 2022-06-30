import React from "react"
import { BannerStyle } from "./Banner.style"
import { Button } from "../Button/Button"

function Banner({ text, link, linkLabel = "Learn more", className = "" }) {
  return (
    <BannerStyle className={["banner", className].join(" ")}>
      <p className="banner__text text-b3">{text}</p>

      <Button
        className="banner__link"
        variant="blue"
        suffixIcon="arrow-forward"
        href={link}
      >{linkLabel}</Button>
    </BannerStyle>
  )
}

export default Banner
