import React from "react"
import { changeNetwork, modalData } from "./modal-data"
import { Modal } from "./Modal"
import { A } from "../../../styles/components"
import { Button } from "../index"
import { ModalFooter } from "./Modal.style"

export const ModalChangeNetwork = ({
                                     isActive,
                                     toggleModal,
                                     network,
                                   }) => {

  return (
    <Modal isActive={isActive}>
      <h3 className="modal__title">CHANGE NETWORK
                                   TO {changeNetwork[network].toNetwork}</h3>

      <p className="modal__text">
        To deploy the contract on {changeNetwork[network].deployNetwork}, please
        change your Metamask network
        from {changeNetwork[network].fromNetwork} to {changeNetwork[network].toNetwork}.
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
