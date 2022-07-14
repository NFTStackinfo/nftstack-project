import React from "react"
import { PreloaderStyle } from "./Preloader.style"
import { Portal } from "react-portal"

const Preloader = () => {
  return (
    <Portal>
      <PreloaderStyle>
        <div>
          <img src="/assets/preloader.png" alt="preloader" />
        </div>
      </PreloaderStyle>
    </Portal>
  )
}

export default Preloader
