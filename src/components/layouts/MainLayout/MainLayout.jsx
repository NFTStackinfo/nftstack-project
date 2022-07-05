import React from "react"
import { MainLayoutStyle } from "./MainLayout.style"
import Header from "../../UIKit/Header/Header"
import { addressFormat } from "../../../utils/text"
import { Button } from "../../UIKit"

const MainLayout = ({
                      headerAddress,
                      children,
                      container,
                      back,
                      backPosition = "left"
                    }) => {
  return (
    <MainLayoutStyle className="main-layout" backPosition={backPosition}>
      <Header
        address={addressFormat(headerAddress)}
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

export default MainLayout
