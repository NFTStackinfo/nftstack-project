import React from "react"
import { Radio } from "../index"


const SectionRadio = (props) => {
  return (
    <section className="section ">
      <div className="container">


        <div className="content">
          <h2>Radio</h2>

          <div className="section-btn__container">
            <div className="section-btn__primary">

              <div className="section-btn__container__inner">
                <div className="section-btn_v">
                  <Radio
                    label='hello from Radio'
                    name='radio1'
                    onChange={() => console.log('asd')}
                  />
                  <Radio
                    label='hello from Radio'
                    name='radio2'
                    onChange={() => console.log('asd')}
                    checked
                  />
                  <Radio
                    label='hello from Radio'
                    name='radio3'
                    onChange={() => console.log('asd')}
                    size={18}
                    disabled
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionRadio
