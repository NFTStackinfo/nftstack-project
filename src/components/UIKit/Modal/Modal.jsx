import React, { useEffect, useState } from "react"
import { useLockedBody } from "../../../hooks/useLockedBody"
import { ModalStyle } from "./Modal.style"
import { modalData } from "./modal-data"
import { Button } from "../Button/Button"

function Modal({ isActive, onModalToggle, network, link='#' }) {
  const [locked, setLocked] = useLockedBody()
  const [isModalActive, setIsModalActive] = useState(false)

  const toggleModal = () => {
    onModalToggle(!isModalActive)
    setLocked(() => !locked)
    setIsModalActive(() => !isModalActive)
  }

  const handleClose = e => {
    e.stopPropagation()
    if (e.target.dataset.overlay) {
      toggleModal()
    }
  }

  useEffect(() => {
    setLocked(() => isActive)
    setIsModalActive(() => isActive)
  }, [isActive])


  return (

    <ModalStyle
      className={["modal", isModalActive ? "active" : ""].join(" ")}
      data-overlay onClick={handleClose}>
      <div className="modal__container">
        <div className="modal__content">
          <h3 className="text-h3 font-semibold">DEPLOYING
                                                TO {modalData[network].text}</h3>

          <p className="text-b3">
            Deployment is being processed and can take a while.
            You can look for the status updates on <a href={link}
                                                      target="_blank"
                                                      rel="noreferrer">Etherscan</a> or
            directly on here
          </p>

          <Button
            className="modal__content__btn"
            variant="primary"
            onClick={toggleModal}
          >Okay</Button>
        </div>
      </div>
    </ModalStyle>
  )
}

export default Modal
