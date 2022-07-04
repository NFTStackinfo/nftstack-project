import React, { useEffect, useState } from "react"
import { useLockedBody } from "../../../hooks/useLockedBody"
import { ModalStyle } from "./Modal.style"
import { Portal } from "react-portal"
import { Transition } from "react-transition-group"

function Modal({ isActive, onModalToggle, children }) {
  const [, setLocked] = useLockedBody()
  const [isModalActive, setIsModalActive] = useState(false)

  useEffect(() => {
    onModalToggle(isActive)
    setLocked(() => isActive)
    setIsModalActive(() => isActive)
  }, [isActive])

  return (
    <Portal>
      <Transition in={isModalActive} timeout={300} mountOnEnter unmountOnExit>
        {state => (
          <ModalStyle
            className={["modal", isModalActive ? "active" : "", state].join(" ")}
            data-overlay>
            <div className="modal__wrapper">
              <div className="modal__container">
                <div className="modal__content">
                  {children}
                </div>
              </div>
            </div>
          </ModalStyle>
        )}
      </Transition>
    </Portal>
  )
}

export { Modal }
