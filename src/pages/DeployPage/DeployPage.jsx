import React, {useEffect, useState} from 'react';
import {DeployPageStyle} from './DeployPage.style';
import {MainLayout} from 'components/layouts';
import {ContainerSm, Content, Title} from '../../styles/components';
import DeployCard from 'components/Deploy/DeployCard/DeployCard';
import {Button} from 'components/UIKit';
import PaymentBox from 'components/Deploy/PaymentBox/PaymentBox';
import {useContractState} from '../../context/ContractContext';
import { useNavigate, useParams } from "react-router-dom"
import { useContractById } from "../../fetchHooks/useContractById"
import { parseUnits } from "ethers/lib.esm/utils"
import { ethers, Signer } from "ethers"

const DeployPage = () => {
  const [error, setError] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  // const {contract} = useContractState()
  const navigate = useNavigate()
  const {contract_id} = useParams()
  const {data, isLoading} = useContractById(contract_id)
  const contract = data?.contract

  const deployData = data?.abi



const handleChange = (e) => {
  setError(!e.target.checked);
  setConfirmed(e.target.checked);
}

  useEffect(() => {
     // if(Object.keys(contract).length === 0) {
     //   navigate('/smart-contract')
     // }
  }, []);


const handleDeploy = async (chainId, abi, bytecode) => {
    if(!confirmed) {
      return setError(true)
    }
  // console.log(abi)
  // console.log(bytecode)
  if(typeof window.ethereum !== 'undefined') {
    // await requestAccount();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log({ provider })
    const signature = await provider.getSigner()
    console.log(signature)
    
    const factory = new ethers.ContractFactory(abi, bytecode, signature)

    console.log({ factory })

    const contract = await factory.deploy(parseUnits("100"))
    //
    console.log({ contract })
    //
    const deployTransaction = await contract.deployTransaction.wait()

    console.log({ deployTransaction })

    const modifiedData = {
      ...contract,
      chainId: chainId
    }
    console.log({ modifiedData });
  }

}

if(isLoading) {
  return null
}
  return (
    <MainLayout
      back={`/smart-contract/${contract_id}`}
    >
      <DeployPageStyle>
        <ContainerSm inner>
          <Title>Review and Deploy</Title>

          <Content>
            <PaymentBox className='payment-box' error={error} onchange={handleChange}/>
            <DeployCard data={contract}/>
            <p className="text-c warning-text">Note: Ethereum network must be on Rinkeby</p>
            <p className='text-c'>To be able to deploy on Rinkeby you must have test ETH. <a
              href="#" target='_blank'  className='link'>Get Free 0.1ETH</a></p>
            <Button className="rinkeby-button" variant="primary" width='100%' onClick={() => handleDeploy(4, deployData?.abi, deployData?.bytecode)}>DEPLOY ON RINKEBY</Button>
            <Button variant="secondary" width='100%' onClick={() => handleDeploy(1)}>DEPLOY ON MAINNET</Button>
          </Content>
        </ContainerSm>
      </DeployPageStyle>
    </MainLayout>
  );
};

export default DeployPage;
