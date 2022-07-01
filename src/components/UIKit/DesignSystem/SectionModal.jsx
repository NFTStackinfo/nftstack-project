import React, { useState } from "react"
import { Button } from "../Button/Button"
import { ModalDeploying, ModalFeature } from "../Modal"

function SectionModal(props) {
  const [isModalDeployingActive, setIsModalDeployingActive] = useState(false)
  const modalDeployingHandler = (state) => setIsModalDeployingActive(state)

  const [isModalFeatureActive, setIsModalFeatureActive] = useState(false)
  const modalFeatureHandler = (state) => setIsModalFeatureActive(state)
  const onFeatureSubmit = data => {
    console.log('data : ', data)
  }

  return (
    <section className="section section-modal">
      <div className="container">
        <div className="content">
          <h2>Modal</h2>

          <div className="section-modal__container">
            <div className="section-modal__container_inner">
              <div className="modal-variant">
                <Button variant="primary" onClick={() => modalDeployingHandler(true)}>
                  Open modal deploying</Button>

                <ModalDeploying
                  isActive={isModalDeployingActive}
                  onModalToggle={modalDeployingHandler}
                  network="rinkeby"
                />
              </div>


              <div className="modal-variant">
                <Button variant="primary" onClick={() => modalFeatureHandler(true)}>
                  Open modal feature
                </Button>

                <ModalFeature
                  isActive={isModalFeatureActive}
                  onModalToggle={modalFeatureHandler}
                  network="rinkeby"
                  onSubmit={onFeatureSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionModal
