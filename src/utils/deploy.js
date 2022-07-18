import {ethers} from 'ethers';
import {parseUnits} from 'ethers/lib.esm/utils';

export const deployContract = async (chainId, abi, bytecode, isLoading, callback) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log({provider});
    const signature = await provider.getSigner();
    console.log(signature);

    const {chainId: networkId} = await provider.getNetwork();
    if (networkId !== chainId) {
      console.log(networkId !== chainId);
      return  callback();
    }
    const factory = new ethers.ContractFactory(abi, bytecode, signature)

    // isLoading(true)
    const contract = await factory.deploy(parseUnits("100"))

    isLoading(true)
    console.log({ contract })
    const deployTransaction = await contract.deployTransaction.wait()
    return  deployTransaction?.contractAddress
}
