import React from "react"
import {
  MainLayoutBack,
  MainLayoutContainer, MainLayoutContent,
  MainLayoutStyle, MainLayoutWrapper
} from "./MainLayout.style"
import { Button, Header } from "components/UIKit"

export const MainLayout = ({
                             children,
                             container,
                             back,
                             backPosition = "left"
                           }) => {
  return (
    <MainLayoutStyle className="main-layout">

      <Header />

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
                to={back}
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
    </MainLayoutStyle>
  )
}

