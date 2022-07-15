import React from "react"
import { changeNetwork, modalData } from "./modal-data"
import { Modal } from "./Modal"
import { A } from "../../../styles/components"
import { Button } from "../index"
import { ModalFooter, ModalText, ModalTitle } from "./Modal.style"

export const ModalChangeNetwork = ({
                                     isActive,
                                     toggleModal,
                                     network,
                                   }) => {

  return (
    <Modal isActive={isActive}>
      <ModalTitle>CHANGE NETWORK
                  TO {changeNetwork[network].toNetwork}</ModalTitle>

      <ModalText>
        To deploy the contract on {changeNetwork[network].deployNetwork}, please
        change your Metamask network
        from {changeNetwork[network].fromNetwork} to {changeNetwork[network].toNetwork}.
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
