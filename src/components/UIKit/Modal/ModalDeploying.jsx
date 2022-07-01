import React, { useEffect, useState } from "react"
import { modalData } from "./modal-data"
import { Button } from "../Button/Button"
import { Modal } from "./Modal"

function ModalDeploying({ isActive, onModalToggle, network, link = "#" }) {
  const [isModalActive, setIsModalActive] = useState(false)

  useEffect(() => {
    setIsModalActive(isActive)
  }, [isActive])

  return (
    <Modal isActive={isModalActive} onModalToggle={onModalToggle}>
      <h3 className="modal__title">DEPLOYING TO {modalData[network].text}</h3>

      <p className="modal__text">
        Deployment is being processed and can take a while.
        You can look for the status updates on <a href={link}
                                                  target="_blank"
                                                  rel="noreferrer">Etherscan</a> or
        directly on here
      </p>

      <Button
        className="modal__content__btn"
        variant="primary"
        onClick={() => setIsModalActive(() => !isModalActive)}
      >Okay</Button>
    </Modal>
  )
}

export { ModalDeploying }