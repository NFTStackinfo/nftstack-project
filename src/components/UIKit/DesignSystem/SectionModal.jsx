import React, { useState } from "react"
import { ModalDeploying, ModalFeature, Button } from "../index"
import { ModalUnsavedChanges } from "../Modal/ModalUnsavedChanges"
import { ModalChangeNetwork } from "../Modal/ModalChangeNetwork"


function SectionModal(props) {
  const [isModalDeployingActive, setIsModalDeployingActive] = useState(false)
  const toggleModalDeploying = () => setIsModalDeployingActive(() => !isModalDeployingActive)

  const [isModalChangeNetworkActive, setIsModalChangeNetworkActive] = useState(false)
  const toggleModalChangeNetwork = () => setIsModalChangeNetworkActive(() => !isModalChangeNetworkActive)

  const [isModalUnsavedChangesActive, setIsModalUnsavedChangesActive] = useState(false)
  const toggleModalUnsavedChanges = () => setIsModalUnsavedChangesActive(() => !isModalUnsavedChangesActive)
  const [modalCallback, setModalCallback] = useState(() => {
  })
  const setPageLeaveCallback = callback => setModalCallback(() => callback)


  const [isModalFeatureActive, setIsModalFeatureActive] = useState(false)
  const toggleModalFeature = () => setIsModalFeatureActive(() => !isModalFeatureActive)
  const onFeatureSubmit = data => {
    console.log("data : ", data)
  }

  return (
    <section className="section section-modal">
      <div className="container">
        <div className="content">
          <h2>Modal</h2>

          <div className="section-modal__container">
            <div className="section-modal__container_inner">
              <div className="modal-variant">
                <Button variant="primary"
                        onClick={() => toggleModalDeploying()}>
                  Open modal deploying</Button>

                <ModalDeploying
                  isActive={isModalDeployingActive}
                  toggleModal={toggleModalDeploying}
                  network="rinkeby"
                />
              </div>

              <div className="modal-variant">
                <Button variant="primary"
                        onClick={() => toggleModalChangeNetwork()}>
                  Open modal change network</Button>

                <ModalChangeNetwork
                  isActive={isModalChangeNetworkActive}
                  toggleModal={toggleModalChangeNetwork}
                  network="4"
                />
              </div>

              <div className="modal-variant">
                <Button variant="primary"
                        onClick={() => toggleModalFeature()}>
                  Open modal feature
                </Button>

                <ModalFeature
                  isActive={isModalFeatureActive}
                  toggleModal={toggleModalFeature}
                  onSubmit={onFeatureSubmit}
                />
              </div>

              <div className="modal-variant">
                <Button variant="primary"
                        onClick={() => toggleModalUnsavedChanges()}>
                  Open modal unsaved changes
                </Button>

                <ModalUnsavedChanges
                  isActive={isModalUnsavedChangesActive}
                  toggleModal={toggleModalUnsavedChanges}
                  callback={modalCallback}
                  setCallback={setPageLeaveCallback}
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
