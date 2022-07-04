import React from "react"
import { FooterStyle } from "./Footer.style"
import { socialList } from "./footer-data"
import { Icon } from "../Icon/Icon"
import { Button } from "../Button/Button"

function Footer({ className }) {
  return (
    <FooterStyle className={["footer", className].join(" ")}>
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <img src="/assets/watermark.svg" alt="Webly" />
          </div>

          <div className="footer__arr">
            <span className="text-c text-semibold">©All rights reserved. {new Date().getFullYear()}</span>
          </div>

          <div className="footer__socials">
            <ul className="footer__socials__list">
              {socialList.map(({ icon, link }, idx) => (
                <li className="footer__socials__item" key={`social_${idx}`}>
                  <Button href={link} target="_black" rel="noreferrer" suffixIcon={icon}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FooterStyle>
  )
}

export default Footer
