import {ethers} from 'ethers';
import {parseUnits} from 'ethers/lib.esm/utils';

export const deployContract = async (chainId, abi, bytecode, isLoading, callback) => {

  console.log('mtav')
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  console.log({provider})
    const signature = await provider.getSigner();

  console.log({signature})

    const {chainId: networkId} = await provider.getNetwork();
    if (networkId !== chainId) {
      console.log('payman')
      return  callback();
    }
  console.log({ networkId })
  console.log({ abi })
    const factory = new ethers.ContractFactory(abi, bytecode, signature)
  console.log({ factory })

    // isLoading(true)
    const contract = await factory.deploy(parseUnits("0"))
  console.log({contract})

    isLoading(true)
    const deployTransaction = await contract.deployTransaction.wait()
  console.log({deployTransaction})
    return  deployTransaction?.contractAddress
}
