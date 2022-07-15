import React  from "react"
import { modalData } from "./modal-data"
import { Modal } from "./Modal"
import { A } from "../../../styles/components"
import { Button } from "../index"
import { ModalFooter, ModalText, ModalTitle } from "./Modal.style"

export const ModalDeploying = ({ isActive, toggleModal, network, link = "#" }) => {

  return (
    <Modal isActive={isActive}>
      <ModalTitle>DEPLOYING TO {modalData[network].text}</ModalTitle>

      <ModalText>
        Deployment is being processed and can take a while.
        You can look for the status updates on <A href={link}
                                                  target="_blank"
                                                  rel="noreferrer">Etherscan</A> or
        directly on here
      </ModalText>

      <ModalFooter buttonFit>
        <Button
          variant="primary"
          onClick={() => toggleModal()}
        >Close</Button>
      </ModalFooter>
    </Modal>
  )
}
