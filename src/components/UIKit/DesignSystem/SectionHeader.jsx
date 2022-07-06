import React  from "react"
import { addressFormat } from "../../../utils/text"
import { HeaderLogo, Header } from "../index"

function SectionHeader(props) {
  return (
    <section className="section section-header">
      <div className="section-header__container">
        <div className="content">
          <div className="container">
            <h2 className="section-title">Header</h2>
          </div>

          <div className="section-header__container_inner">
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
