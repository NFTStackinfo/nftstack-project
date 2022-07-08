import React from "react"
import { useEffect } from "react"
import Web3Modal from "web3modal"
import { ethers } from "ethers"
import providerOptions from "./providerOptions"
import { Button } from "components/UIKit"
import {loginByAddress, verifyLogin} from 'services/WeblyApi';
import LocalStorage from 'services/localStorage';
import {userActions, useUserDispatch} from 'context/UserContext';

export const ConnectWalletBtnEther = ({
                                        onWalletConnect = () => {
                                        }
                                      }) => {

  const dispatch = useUserDispatch()

  const handleConnect = async () => {

    const web3Modal = new Web3Modal({
      network: "rinkeby", // optional
      cacheProvider: false, // optional
      providerOptions // required
    })
    const provider = await web3Modal.connect()
    // await provider.enable()
    try {

      const library = new ethers.providers.Web3Provider(provider)
      console.log("library : ", library)

      const accounts = await library.listAccounts()
      const account = accounts[0]

      dispatch(userActions.addUser(library, account))




      console.log("account : ", account)

      const network = await library.getNetwork()
      console.log("network : ", network)

      if (account) {
        const message = await loginByAddress(account)
        const signature = await library.getSigner().signMessage(message)
        console.log(typeof message, typeof signature);
        const verifyResponse = await verifyLogin(account, signature)
        console.log(verifyResponse.hash);
        LocalStorage.setItem('hash', verifyResponse.hash)
        onWalletConnect(verifyResponse.hash)
      }
    } catch (e) {
      console.error("Error connecting to web3:", e)
    }
  }


  // reset WalletConnect
  useEffect(() => {
    localStorage.removeItem("walletconnect")
    localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE")
  }, [])

  return (
    <Button
      prefixIcon="metamask"
      variant="secondary"
      iconColored
      width="100%"
      onClick={() => handleConnect()}
    >
      Connect metamask
    </Button>
  )
}
