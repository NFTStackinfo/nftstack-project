import React, { useState } from "react"
import Input from "../Input/Input"
import Textarea from "../Textarea/Textarea"

function SectionTextFields(props) {
  const [value, setValue] = useState("")

  return (
    <section className="section section-text-field">
      <div className="container">
        <div className="content">
          <h2>Text fields</h2>

          <div className="section-text-field__sections">
            <div className="section-text-field__section">
              <h3 className="title">Inputs</h3>

              <div className="section-text-field__section__variants">
                <div className="section-text-field__section__variant">
                  <Input
                    placeholder="Placeholder Text" value={value}
                    onChange={e => setValue(e.target.value)}
                    label="Label*"
                  />
                </div>

                <div className="section-text-field__section__variant">
                  <Input
                    placeholder="Placeholder Text" value={value}
                    onChange={e => setValue(e.target.value)}
                    label="Label*"
                    icon="etherium"
                    isIconColored={true}
                  />
                </div>

                <div className="section-text-field__section__variant">
                  <Input
                    placeholder="Placeholder Text" value={value}
                    onChange={e => setValue(e.target.value)}
                    label="Label*"
                    icon="info"
                    helperText="Helper text"
                  />
                </div>

                <div className="section-text-field__section__variant">
                  <Input
                    placeholder="Placeholder Text" value={value}
                    onChange={e => setValue(e.target.value)}
                    label="Label*"
                    icon="metamask"
                    isIconColored={true}
                    errorMessage="Error message"
                  />
                </div>

                <div className="section-text-field__section__variant">
                  <Input
                    placeholder="Placeholder Text" value={value}
                    onChange={e => setValue(e.target.value)}
                    label="Label*"
                    icon="info"
                    disabled={true}
                  />
                </div>
              </div>
            </div>

            <div className="section-text-field__section">
              <h3 className="title">Textarea</h3>

              <div className="section-text-field__section__variants">
                <div className="section-text-field__section__variant">
                  <Textarea
                    placeholder="Placeholder Text" value={value}
                    onChange={e => setValue(e.target.value)}
                    label="Label*"
                  />
                </div>

                <div className="section-text-field__section__variant">
                  <Textarea
                    placeholder="Placeholder Text" value={value}
                    onChange={e => setValue(e.target.value)}
                    label="Label*"
                    helperText="Helper text"
                  />
                </div>

                <div className="section-text-field__section__variant">
                  <Textarea
                    placeholder="Placeholder Text" value={value}
                    onChange={e => setValue(e.target.value)}
                    label="Label*"
                    errorMessage="Error message"
                  />
                </div>

                <div className="section-text-field__section__variant">
                  <Textarea
                    placeholder="Placeholder Text" value={value}
                    onChange={e => setValue(e.target.value)}
                    label="Label*"
                    disabled={true}
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

export default SectionTextFields
