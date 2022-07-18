import { useEffect, useState } from "react"
import { HeaderStyle } from "./Header.style"
import { useLockedBody } from "hooks/useLockedBody"
import { Transition } from "react-transition-group"
import { addressFormat } from "utils/text"
import { Button, ModalFeature } from "../index"
import { logout } from "services/WeblyApi"
import {
  userActions,
  useUserDispatch,
  useUserState
} from "context/UserContext"
import LocalStorage from "services/localStorage"
import { ethers } from "ethers"
import { useNavigate } from "react-router-dom"


export const Header = ({ setPageLeaveCallback }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [locked, setLocked] = useLockedBody()
  const navigate = useNavigate()

  const [isModalFeatureActive, setIsModalFeatureActive] = useState(false)
  const { address: accountAddress } = useUserState()
  const dispatch = useUserDispatch()


  useEffect(() => {
    const connect = async () => {
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        })
        const account = accounts[0]
        dispatch(userActions.addUser(account))
        dispatch(userActions.isLoggedIn(account))
      }
    }

    connect()

  }, [])


  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    if (provider) {
      provider.provider.on("accountsChanged", () => handleLogout())
    } else {

      console.error("Please, install Metamask.")
    }
  }, [])

  const toggleModalFeature = () => setIsModalFeatureActive(() => !isModalFeatureActive)
  const onFeatureSubmit = data => {
    console.log("data : ", data)
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(() => !isMenuOpen)
    setLocked(() => !locked)
  }

  const handleMobileFeatureBtn = () => {
    handleMenuToggle()
    setIsModalFeatureActive(true)
  }

  const handleLogout = async () => {
    await logout(accountAddress)
    LocalStorage.clear()
    dispatch(userActions.clearUser())
  }

  const handleDashboard = () => navigate("/dashboard")

  return (
    <Transition in={isMenuOpen} timeout={300}>
      {state => (
        <HeaderStyle
          className={["header", isMenuOpen && "open", state, "wrapper"].join(" ")}>
          <div className="header__container">
            <div className="header__content">
              <div className="header__navbar">
                <div className="header__logo">
                  <a href="https://webly.pro/">
                    <img src="/assets/watermark-dark.svg" alt="Webly" />
                  </a>
                </div>

                <nav className="header__nav">
                  <ul className="header__nav__list text-b2">
                    <li onClick={() => setPageLeaveCallback(handleDashboard)}>
                      Dashboard
                    </li>

                    <li
                      onClick={() => setIsModalFeatureActive(true)}
                    >
                      Request feature
                    </li>
                  </ul>
                </nav>

                <div className="header__right-bar">
                  <div className="header__address">
                    {/*<span className="text-b2">{address}</span>*/}
                    <span
                      className="text-b2">{addressFormat(accountAddress)}</span>
                  </div>

                  <Button
                    variant="secondary"
                    onClick={() => setPageLeaveCallback(handleLogout)}
                  >
                    Logout
                  </Button>
                </div>

                <Button
                  onClick={handleMenuToggle}
                  className="header__hamburger"
                  variant="black"
                  suffixIcon={isMenuOpen ? "close" : "menu"}
                />
              </div>

              <div className="header__nav-mobile">
                <div className="header__nav-mobile__inner">
                  <ul className="header__nav-mobile__list text-h3">
                    <li
                      onClick={() => {
                        handleMenuToggle()
                        setPageLeaveCallback(handleDashboard)
                      }}
                    >Dashboard
                    </li>

                    <li
                      onClick={() => handleMobileFeatureBtn()}
                    >
                      Request feature
                    </li>
                  </ul>

                  <div
                    className="header__nav-mobile__logout"
                  >
                     <span

                       onClick={() => {
                         handleMenuToggle()
                         setPageLeaveCallback(handleLogout)
                       }}
                     >
                    Logout
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ModalFeature
            isActive={isModalFeatureActive}
            toggleModal={toggleModalFeature}
            onSubmit={onFeatureSubmit}
          />
        </HeaderStyle>
      )}
    </Transition>

  )
}
