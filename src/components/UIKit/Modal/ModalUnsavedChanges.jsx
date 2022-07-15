import React  from "react"
import { Modal } from "./Modal"
import { Button } from "../index"
import { ModalFooter, ModalText, ModalTitle } from "./Modal.style"

export const ModalUnsavedChanges = ({ isActive, toggleModal, callback = () => {}, setCallback }) => {
  return (
    <Modal isActive={isActive}>
      <ModalTitle>UNSAVED CHANGES</ModalTitle>

      <ModalText>
        You have unsaved changes. Do you want to discard all changes and lost
        any work completed?
      </ModalText>

      <ModalFooter>
        <Button
          variant="secondary"
          className="modal__form__btn_close"
          type="button"
          onClick={() => {
            toggleModal()
            setCallback(null)
          }}
        >CONTINUE EDITING</Button>

        <Button
          variant="primary"
          className="modal__form__btn_send"
          type="submit"
          onClick={() => {
            callback()
            setCallback(null)
          }}
        >DISCARD CHANGES</Button>
      </ModalFooter>
    </Modal>
  )
}
