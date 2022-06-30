import React, { useState } from "react"
import Tag from "../Tag/Tag"
import Card from "../Card/Card"
import { Button } from "../Button/Button"
import Modal from "../Modal/Modal"
import Banner from "../Banner/Banner"

function SectionBanner(props) {
  return (
    <section className="section section-banner">
      <div className="container">
        <div className="content">
          <h2>Banner</h2>

          <div className="section-banner__container">
            <div className="banner-container">
              <Banner
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                link="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionBanner
