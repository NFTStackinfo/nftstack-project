import React from "react"
import { HeaderStyle } from "./Header.style"

function Header({ address, className = "" }) {
  return (
    <HeaderStyle className={["header", className].join(" ")}>
      <div className="container">
        <div className="content">
          <div className="header__logo">
            <a href="#">
              <img src="/assets/watermark-dark.svg" alt="Webly" />
            </a>
          </div>

          <div>
            <span className="header__address text-b2">{address}</span>
          </div>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header
