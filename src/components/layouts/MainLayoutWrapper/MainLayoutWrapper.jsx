import React from "react"
import { MainLayoutWrapperStyle } from "./MainLayoutWrapper.style"
import { Header } from "components/UIKit"

const MainLayoutWrapper = ({ headerAddress, children }) => {
  return (
    <MainLayoutWrapperStyle>
      <Header
        walletAddress={headerAddress}
      />

      {children}

    </MainLayoutWrapperStyle>
  )
}

export default MainLayoutWrapper
