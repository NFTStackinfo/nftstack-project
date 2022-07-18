import React from "react"
import { useEffect } from "react"
import { ethers } from "ethers"
import { Button } from "components/UIKit"
import {login, verifyLogin} from 'services/WeblyApi';
import LocalStorage from 'services/localStorage';
import {userActions, useUserDispatch} from 'context/UserContext';

export const ConnectWalletBtnEther = ({
                                        onWalletConnect = () => {
                                        }
                                      }) => {

  const dispatch = useUserDispatch()


  const  handleConnectWallet = async () => {
    if(typeof window.ethereum !== 'undefined') {

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0]
      dispatch(userActions.addUser(account))
      LocalStorage.setItem('address', account)
      if (account) {
        const message = await login()
        const signature = await provider.getSigner().signMessage(message)
        const verifyResponse = await verifyLogin({signature: signature})
        LocalStorage.setItem('hash', verifyResponse.hash)
        onWalletConnect(verifyResponse.hash)
      }
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
      onClick={() => handleConnectWallet()}
    >
      Connect metamask
    </Button>
  )
}
