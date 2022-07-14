import React, { useEffect } from "react"
import { useLockedBody } from "../../../hooks/useLockedBody"
import { ModalStyle } from "./Modal.style"
import { Portal } from "react-portal"
import { Transition } from "react-transition-group"

export const Modal = ({ isActive, children }) => {
  const [, setLocked] = useLockedBody()

  useEffect(() => {
    setLocked(() => isActive)
  }, [isActive])

  return (
    <Portal>
      <Transition in={isActive} timeout={300} mountOnEnter unmountOnExit>
        {state => (
          <ModalStyle
            className={["modal", isActive ? "active" : "", state].join(" ")}
            data-overlay>
            <div className="modal__container">
              <div className="modal__content">
                {children}
              </div>
            </div>
          </ModalStyle>
        )}
      </Transition>
    </Portal>
  )
}
