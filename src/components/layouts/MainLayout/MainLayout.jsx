import React from "react"
import { MainLayoutStyle } from "./MainLayout.style"
import { Button, Header } from "components/UIKit"

export const MainLayout = ({
                             headerAddress,
                             children,
                             container,
                             back,
                             backPosition = "left"
                           }) => {
  return (
    <MainLayoutStyle className="main-layout" backPosition={backPosition}
                     back={back || undefined}>
      <Header
        walletAddress={headerAddress}
      />

      <div className="main-layout__wrapper">
        <div
          className={[
            "main-layout__container",
            "container" + (container ? `-${container}` : "")
          ].join(" ")}
        >
          {back && (
            <div className="main-layout__back">
              <Button
                variant="black"
                prefixIcon="arrow-back"
                to={back}
              >
                Back
              </Button>
            </div>
          )}

          <div className="main-layout__content">
            {children}
          </div>
        </div>
      </div>
    </MainLayoutStyle>
  )
}

