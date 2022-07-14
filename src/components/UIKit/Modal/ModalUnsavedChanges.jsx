import React, { useEffect, useState } from "react"
import { Modal } from "./Modal"
import { Button } from "../index"
import { ModalFooter } from "./Modal.style"

export const ModalUnsavedChanges = ({ isActive, onModalToggle, callback = () => {}, setCallback }) => {
  const [isModalActive, setIsModalActive] = useState(false)

  useEffect(() => {
    setIsModalActive(isActive)
  }, [isActive])

  return (
    <Modal isActive={isModalActive} onModalToggle={onModalToggle}>
      <h3 className="modal__title left">UNSAVED CHANGES</h3>

      <p className="modal__text">
        You have unsaved changes. Do you want to discard all changes and lost
        any work completed?
      </p>

      <ModalFooter>
        <Button
          variant="secondary"
          className="modal__form__btn_close"
          type="button"
          onClick={() => {
            setIsModalActive(false)
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
