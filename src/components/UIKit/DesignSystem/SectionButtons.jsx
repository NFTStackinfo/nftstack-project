import React from "react"
import { Button } from "../index"


function SectionButtons(props) {
  return (
    <section className="section section-btn">
      <div className="container">


        <div className="content">
          <h2>Buttons</h2>

          <div className="section-btn__container">
            <div className="section-btn__primary">
              <h3 className="text-b2 title">Primary</h3>

              <div className="section-btn__container__inner">
                <div className="section-btn_v">
                  <Button
                    suffixIcon="info"
                    prefixIcon="carret-down"
                    variant="primary"
                  >
                    PRIME
                  </Button>

                  <Button
                    prefixIcon="arrow-back"
                    variant="primary"
                  >
                    PRIME
                  </Button>

                  <Button
                    suffixIcon="arrow-forward"
                    variant="primary"
                  >
                    PRIME
                  </Button>

                  <Button suffixIcon="arrow-forward" variant="primary"/>

                  <Button
                    suffixIcon="info"
                    prefixIcon="carret-down"
                    disabled
                    variant="primary"
                  >
                    PRIME
                  </Button>

                  <Button
                    prefixIcon="arrow-back"
                    disabled
                    variant="primary"
                  >
                    PRIME
                  </Button>

                  <Button
                    suffixIcon="arrow-forward"
                    disabled
                    variant="primary"
                  >
                    PRIME
                  </Button>

                  <Button suffixIcon="arrow-forward" disabled variant="primary"/>
                </div>
              </div>
            </div>

            <div className="section-btn__secondary">
              <h3 className="text-b2 title">Secondary</h3>

              <div className="section-btn__container__inner">
                <div className="section-btn_v">
                  <Button
                    suffixIcon="info"
                    prefixIcon="carret-down"
                    variant="secondary"
                  >
                    PRIME
                  </Button>

                  <Button
                    prefixIcon="arrow-back"
                    variant="secondary"
                  >
                    PRIME
                  </Button>

                  <Button
                    suffixIcon="arrow-forward"
                    variant="secondary"
                  >
                    PRIME
                  </Button>

                  <Button suffixIcon="arrow-forward" variant="secondary"/>

                  <Button
                    suffixIcon="info"
                    prefixIcon="carret-down"
                    disabled
                    variant="secondary"
                  >
                    PRIME
                  </Button>

                  <Button
                    prefixIcon="arrow-back"
                    disabled
                    variant="secondary"
                  >
                    PRIME
                  </Button>

                  <Button
                    suffixIcon="arrow-forward"
                    disabled
                    variant="secondary"
                  >
                    PRIME
                  </Button>

                  <Button suffixIcon="arrow-forward" disabled variant="secondary"/>
                </div>
              </div>
            </div>

            <div className="section-btn__thertiary">
              <h3 className="text-b2 title">Thertiary</h3>

              <div className="section-btn__container__inner">
                <div className="section-btn_v section-btn_v_tertiary_1">
                  <Button
                    suffixIcon="info"
                    prefixIcon="carret-down"
                  >
                    PRIME
                  </Button>

                  <Button
                    prefixIcon="arrow-back"
                  >
                    PRIME
                  </Button>

                  <Button
                    suffixIcon="arrow-forward"
                  >
                    PRIME
                  </Button>

                  <Button suffixIcon="arrow-forward"/>

                  <Button
                    suffixIcon="info"
                    prefixIcon="carret-down"
                    disabled
                  >
                    PRIME
                  </Button>

                  <Button
                    prefixIcon="arrow-back"
                    disabled
                  >
                    PRIME
                  </Button>

                  <Button
                    suffixIcon="arrow-forward"
                    disabled
                  >
                    PRIME
                  </Button>

                  <Button suffixIcon="arrow-forward" disabled/>
                </div>

                <div className="section-btn_v section-btn_v_tertiary_2">
                  <Button
                    suffixIcon="info"
                    prefixIcon="carret-down"
                    variant="blue"
                  >
                    PRIME
                  </Button>

                  <Button
                    prefixIcon="arrow-back"
                    variant="blue"
                  >
                    PRIME
                  </Button>

                  <Button
                    suffixIcon="arrow-forward"
                    variant="blue"
                  >
                    PRIME
                  </Button>

                  <Button suffixIcon="arrow-forward" variant="blue"/>

                  <Button
                    suffixIcon="info"
                    prefixIcon="carret-down"
                    disabled
                    variant="blue"
                  >
                    PRIME
                  </Button>

                  <Button
                    prefixIcon="arrow-back"
                    disabled
                    variant="blue"
                  >
                    PRIME
                  </Button>

                  <Button
                    suffixIcon="arrow-forward"
                    disabled
                    variant="blue"
                  >
                    PRIME
                  </Button>

                  <Button suffixIcon="arrow-forward" disabled variant="blue"/>
                </div>

                <div className="section-btn_v section-btn_v_tertiary_3">
                  <Button
                    suffixIcon="info"
                    prefixIcon="carret-down"
                    variant="black"
                  >
                    PRIME
                  </Button>

                  <Button
                    prefixIcon="arrow-back"
                    variant="black"
                  >
                    PRIME
                  </Button>

                  <Button
                    suffixIcon="arrow-forward"
                    variant="black"
                  >
                    PRIME
                  </Button>

                  <Button suffixIcon="arrow-forward" variant="black"/>

                  <Button
                    suffixIcon="info"
                    prefixIcon="carret-down"
                    disabled
                    variant="black"
                  >
                    PRIME
                  </Button>

                  <Button
                    prefixIcon="arrow-back"
                    disabled
                    variant="black"
                  >
                    PRIME
                  </Button>

                  <Button
                    suffixIcon="arrow-forward"
                    disabled
                    variant="black"
                  >
                    PRIME
                  </Button>

                  <Button suffixIcon="arrow-forward" disabled variant="black"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionButtons
