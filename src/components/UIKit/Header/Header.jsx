// import React from "react"
// import { HeaderStyle } from "./Header.style"
//
// function Header({ address, className = "" }) {
//   return (
//     <HeaderStyle className={["header", className].join(" ")}>
//       <div className="container">
//         <div className="content">
//           <div className="header__logo">
//             <a href="#">
//               <img src="/assets/watermark-dark.svg" alt="Webly" />
//             </a>
//           </div>
//
//           <div>
//             <span className="header__address text-b2">{address}</span>
//           </div>
//         </div>
//       </div>
//     </HeaderStyle>
//   )
// }

// export default Header

import { useEffect, useState } from "react"
import { HeaderStyle } from "./Header.style"
import { useLockedBody } from "../../../hooks/useLockedBody"
import { Button } from "../Button/Button"

const Header = ({ onLinkClick }) => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [locked, setLocked] = useLockedBody()

  useEffect(() => {
    if (drawerOpened) {
      document.body.classList.add("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [drawerOpened])

  const handleDrawerToggle = () => {
    setDrawerOpened(!drawerOpened)
    setLocked(!locked)
  }

  const handleMenuLinkClick = to => {
    if (drawerOpened) {
      setDrawerOpened(false)
      setLocked(false)
    }
    onLinkClick(to)
  }
  return (
    <HeaderStyle
      className={["header", drawerOpened && "open", "wrapper"].join(" ")}>
      <div className="header__container">
        <div className="header__content">
          <div className="header__logo">
            <a href="#">
              <img src="/assets/watermark-dark.svg" alt="Webly" />
            </a>
          </div>

          <nav className="header__nav">
            <div className="header__nav__inner">
              <ul className="header__nav__list">
                {/*{navList.map(({ to, title }) => {*/}
                {/*  return (*/}
                {/*    <li key={to} onClick={() => handleMenuLinkClick(to)}>*/}
                {/*      {title}*/}
                {/*    </li>*/}
                {/*  )*/}
                {/*})}*/}
                <li onClick={() => {
                }}>
                  <Button variant="primary" className="header__nav__feature-btn">
                    Custom feature
                  </Button>
                </li>
              </ul>
            </div>
          </nav>

          <Button
            onClick={handleDrawerToggle}
            className="header__hamburger"
            variant="black"
            suffixIcon={drawerOpened ? "close" : "menu"}
          />
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header

