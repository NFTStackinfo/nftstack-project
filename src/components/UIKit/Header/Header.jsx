import { useEffect, useState } from "react"
import { HeaderStyle } from "./Header.style"
import { useLockedBody } from "../../../hooks/useLockedBody"
import { Button } from "../Button/Button"
import { Transition } from "react-transition-group"
import { ModalFeature } from "../Modal"

const Header = ({ address }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [locked, setLocked] = useLockedBody()

  const [isModalFeatureActive, setIsModalFeatureActive] = useState(false)
  const modalFeatureHandler = (state) => setIsModalFeatureActive(state)
  const onFeatureSubmit = data => {
    console.log("data : ", data)
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(() => !isMenuOpen)
    setLocked(() => !locked)
  }

  const handleResize = () => {
    const windowWidth = window.innerWidth

    if (windowWidth > 575) {
      setLocked(false)
      setIsMenuOpen(false)
    }
  }

  const handleMobileFeatureBtn = () => {
    console.log('handle')
    handleMenuToggle()
    setIsModalFeatureActive(true)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <Transition in={isMenuOpen} timeout={300}>
      {state => (
        <HeaderStyle
          className={["header", isMenuOpen && "open", state, "wrapper"].join(" ")}>
          <div className="header__container">
            <div className="header__content">
              <div className="header__navbar">
                <div className="header__logo">
                  <a href="#">
                    <img src="/assets/watermark-dark.svg" alt="Webly" />
                  </a>
                </div>

                <nav className="header__nav">
                  <div className="header__nav__address">
                    <span className="text-b2">{address}</span>
                  </div>

                  <div className="header__nav__inner">
                    <Button
                      variant="primary"
                            className="header__nav__feature-btn"
                      onClick={() => setIsModalFeatureActive(true)}
                    >
                      Custom feature
                    </Button>
                  </div>
                </nav>


                <Button
                  onClick={handleMenuToggle}
                  className="header__hamburger"
                  variant="black"
                  suffixIcon={isMenuOpen ? "close" : "menu"}
                />
              </div>


              <div className="header__nav-mobile">
                <div className="header__nav-mobile__inner">
                  <Button
                    variant="primary"
                    className="header__nav__feature-btn"
                    onClick={() => handleMobileFeatureBtn()}
                  >
                    Custom feature
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <ModalFeature
            isActive={isModalFeatureActive}
            onModalToggle={modalFeatureHandler}
            onSubmit={onFeatureSubmit}
          />
        </HeaderStyle>
      )}
    </Transition>

  )
}

export default Header

