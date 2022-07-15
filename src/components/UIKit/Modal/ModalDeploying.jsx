import React  from "react"
import { modalData } from "./modal-data"
import { Modal } from "./Modal"
import { A } from "../../../styles/components"
import { Button } from "../index"
import { ModalFooter } from "./Modal.style"

export const ModalDeploying = ({ isActive, toggleModal, network, link = "#" }) => {

  return (
    <Modal isActive={isActive}>
      <h3 className="modal__title">DEPLOYING TO {modalData[network].text}</h3>

      <p className="modal__text">
        Deployment is being processed and can take a while.
        You can look for the status updates on <A href={link}
                                                  target="_blank"
                                                  rel="noreferrer">Etherscan</A> or
        directly on here
      </p>

      <ModalFooter buttonFit>
        <Button
          variant="primary"
          onClick={() => toggleModal()}
        >Okay</Button>
      </ModalFooter>
    </Modal>
  )
}
