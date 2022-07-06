import React from "react"
import { useEffect } from "react"
import Web3Modal from "web3modal"
import { ethers } from "ethers"
import providerOptions from "./providerOptions"
import { Button } from "../../UIKit"

export const ConnectWalletBtnEther = ({
                                        onWalletConnect = () => {
                                        }
                                      }) => {
  const handleConnect = async () => {

    const web3Modal = new Web3Modal({
      network: "rinkeby", // optional
      cacheProvider: false, // optional
      providerOptions // required
    })
    const provider = await web3Modal.connect()
    // await provider.enable()
    const library = new ethers.providers.Web3Provider(provider)
    try {
      console.log("provider : ", provider)

      const accounts = await library.listAccounts()
      const account = accounts[0]
      console.log("account : ", account)

      const network = await library.getNetwork()
      console.log("network : ", network)

      if (account) {
        onWalletConnect()
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
