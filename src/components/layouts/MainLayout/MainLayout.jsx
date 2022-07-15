import React, { useEffect, useState } from "react"
import {
  MainLayoutBack,
  MainLayoutContainer, MainLayoutContent,
  MainLayoutStyle, MainLayoutWrapper
} from "./MainLayout.style"
import { Button, Header } from "components/UIKit"
import { ModalUnsavedChanges } from "../../UIKit/Modal/ModalUnsavedChanges"
import { useNavigate, useLocation } from "react-router-dom"

export const MainLayout = ({
                             children,
                             container,
                             back,
                             backPosition = "left",
                             discardModal
                           }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [modalCallback, setModalCallback] = useState(() => {
  })
  const setPageLeaveCallback = callback => setModalCallback(() => callback)

  const [isModalUnsavedChangesActive, setIsModalUnsavedChangesActive] = useState(false)
  const toggleModalUnsavedChanges = () => setIsModalUnsavedChangesActive(() => !isModalUnsavedChangesActive)

  const onBackClick = () => setPageLeaveCallback(() => navigate(back))

  useEffect(() => {
    if (modalCallback) {
      if (discardModal) {
        setIsModalUnsavedChangesActive(true)
      } else {
        modalCallback()
      }
    }
  }, [modalCallback])

  return (
    <MainLayoutStyle className="main-layout">

      <Header setPageLeaveCallback={setPageLeaveCallback} />

      <MainLayoutWrapper backPosition={backPosition}
                         back={back}>
        <MainLayoutContainer
          className={[
            "container" + (container ? `-${container}` : "")
          ].join(" ")}
        >
          {back && (
            <MainLayoutBack backPosition={backPosition}>
              <Button
                variant="black"
                prefixIcon="arrow-back"
                onClick={() => onBackClick()}
              >
                Back
              </Button>
            </MainLayoutBack>
          )}

          <MainLayoutContent>
            {children}
          </MainLayoutContent>
        </MainLayoutContainer>
      </MainLayoutWrapper>

      <ModalUnsavedChanges
        isActive={isModalUnsavedChangesActive}
        toggleModal={toggleModalUnsavedChanges}
        callback={modalCallback}
        setCallback={setModalCallback}
      />
    </MainLayoutStyle>
  )
}

