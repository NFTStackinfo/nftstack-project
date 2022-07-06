import React, { useEffect, useState } from "react"
import { modalData } from "./modal-data"
import { Modal } from "./Modal"
import { A } from "../../../styles/components"
import { Button } from "../index"

export const ModalDeploying = ({ isActive, onModalToggle, network, link = "#" }) => {
  const [isModalActive, setIsModalActive] = useState(false)

  useEffect(() => {
    setIsModalActive(isActive)
  }, [isActive])

  return (
    <Modal isActive={isModalActive} onModalToggle={onModalToggle}>
      <h3 className="modal__title">DEPLOYING TO {modalData[network].text}</h3>

      <p className="modal__text">
        Deployment is being processed and can take a while.
        You can look for the status updates on <A href={link}
                                                  target="_blank"
                                                  rel="noreferrer">Etherscan</A> or
        directly on here
      </p>

      <Button
        className="modal__content__btn mt-8"
        variant="primary"
        onClick={() => setIsModalActive(() => !isModalActive)}
        width="100%"
      >Okay</Button>
    </Modal>
  )
}
