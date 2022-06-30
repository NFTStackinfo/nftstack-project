import React, { useState } from "react"
import Tag from "../Tag/Tag"
import Card from "../Card/Card"
import { Button } from "../Button/Button"
import Modal from "../Modal/Modal"
import Banner from "../Banner/Banner"
import He from "styled-components/dist/styled-components.browser.esm"
import Header from "../Header/Header"
import { addressFormat, truncate } from "../../../utils/text"
import HeaderLogo from "../Header/HeaderLogo"
import Footer from "../Footer/Footer"

function SectionFooter(props) {
  return (
    <section className="section section-footer">
      <div className="section-footer__container">
        <div className="content">
          <div className="container">
            <h2 className="section-title">Footer</h2>
          </div>

          <div className="section-footer__container_inner">
            <div className="footer-variant-container">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFooter
