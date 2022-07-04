import React from "react"
import {Checkbox} from 'components/UIKit';

const SectionCheckbox = (props) => {
  return (
    <section className="section ">
      <div className="container">


        <div className="content">
          <h2>Checkbox</h2>

          <div className="section-btn__container">
            <div className="section-btn__primary">

              <div className="section-btn__container__inner">
                <div className="section-btn_v">
                  <Checkbox
                    label='hello from Checkbox'
                    name='checkbox1'
                    onChange={() => console.log('asd')}
                  />
                  <Checkbox
                    label='hello from Checkbox'
                    name='checkbox2'
                    onChange={() => console.log('asd')}
                    checked
                  />
                  <Checkbox
                    label='hello from Checkbox'
                    name='checkbox3'
                    onChange={() => console.log('asd')}
                    size={18}
                    disabled
                  />
                  <Checkbox
                    label='hello from indeterminate'
                    name='checkbox2'
                    onChange={() => console.log('asd')}
                    indeterminate
                  />
                  <Checkbox
                    label='hello from indeterminate'
                    name='checkbox3'
                    onChange={() => console.log('asd')}
                    size={18}
                    indeterminate
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

export default SectionCheckbox
