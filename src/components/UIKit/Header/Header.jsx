import { useEffect, useState } from "react"
import { HeaderStyle } from "./Header.style"
import { useLockedBody } from "hooks/useLockedBody"
import { Transition } from "react-transition-group"
import { addressFormat } from "utils/text"
import { Button, ModalFeature } from "../index"
import {logout} from 'services/WeblyApi';
import {
  userActions,
  useUserDispatch,
  useUserState,
} from 'context/UserContext';
import LocalStorage from 'services/localStorage';
import {ethers} from 'ethers';


export const Header = ({} ) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [locked, setLocked] = useLockedBody()

  const [isModalFeatureActive, setIsModalFeatureActive] = useState(false)
  const {address: accountAddress} = useUserState()
  const dispatch = useUserDispatch()


  useEffect(() => {
    const connect = async () => {
      if(typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0]
        dispatch(userActions.addUser(account))
        dispatch(userActions.isLoggedIn(account))
      }
    }

    connect()

  },[])


  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    if (provider) {
      provider.provider.on('accountsChanged', () => handleLogout());
    } else {

      console.error("Please, install Metamask.");
    }
}, []);

  const modalFeatureHandler = (state) => setIsModalFeatureActive(state)
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

  const handleLogout = () => {
    logout(accountAddress)
    LocalStorage.clear()
    dispatch(userActions.clearUser())
  }

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
                  <div className="header__nav__address">
                    {/*<span className="text-b2">{address}</span>*/}
                    <span className="text-b2">{addressFormat(accountAddress)}</span>
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

                  <div className="header__nav__inner logout-btn">
                    <Button
                      variant="secondary"
                      onClick={handleLogout}
                    >
                      Logout
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
                    onClick={handleMobileFeatureBtn}
                    width='100%'
                  >
                    Custom feature
                  </Button>
                  <Button
                    variant="secondary"
                    className="header__nav__feature-btn logout-mobile"
                    onClick={handleLogout}
                    width='100%'
                  >
                    Logout
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
