import React, { useState } from "react"
import { Footer } from "../index"


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
