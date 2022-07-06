import WalletConnectProvider from '@walletconnect/web3-provider'
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Torus from "@toruslabs/torus-embed";
import Fortmatic from "fortmatic";
import Authereum from "authereum";

const infuraId = '39f8d6d639634aa1a6dcb4e6f5040b9b'
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId,
      // qrcodeModalOptions: {
        // desktopLinks: [
        //
        // ]
        // exclude: ['ledger', 'wallet3', 'secuX', 'ricewalelt', 'keyring', 'pubkwallet, kryptoGo]
      // }
    }
  },
  torus: {
    package: Torus
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Modal Example App",
      infuraId
    }
  },
  fortmatic: {
    package: Fortmatic, // required
    options: {
      key: "pk_test_82FB60209C391C27", // required
      infuraId // if we don't pass it, it will default to localhost:8454
    }
  },
  authereum: {
    package: Authereum // required
  },
};

export default providerOptions
