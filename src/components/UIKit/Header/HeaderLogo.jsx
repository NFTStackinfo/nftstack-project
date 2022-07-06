import React from "react"
import { HeaderLogoStyle } from "./Header.style"

export const HeaderLogo = ({ address, className = "" }) => {
  return (
    <HeaderLogoStyle className={["header-logo", className].join(" ")}>
      <div className="container">
        <div className="content">
          <div className="header__logo">
            <a href="#">
              <img src="/assets/watermark.svg" alt="Webly" />
            </a>
          </div>
        </div>
      </div>
    </HeaderLogoStyle>
  )
}

export default HeaderLogo
