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

function SectionHeader(props) {
  return (
    <section className="section section-header">
      <div className="container">
        <div className="content">
          <h2>Header</h2>

          <div className="section-header__container">
            <div className="header-variant-container">
              <Header
                address={addressFormat('0x0E086Bfb73Dd4F52a42753C0848f426FA079A76e')}
              />
            </div>

            <div className="header-variant-container">
              <HeaderLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHeader
