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

const DeployPage = () => {
  const [error, setError] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  // const {contract} = useContractState()
  const navigate = useNavigate()
  const {contract_id} = useParams()
  const {data, isLoading} = useContractById(contract_id)
  const contract = data?.contract

  console.log(contract)


const handleChange = (e) => {
  setError(!e.target.checked);
  setConfirmed(e.target.checked);
}

  useEffect(() => {
     // if(Object.keys(contract).length === 0) {
     //   navigate('/smart-contract')
     // }
  }, []);


const handleDeploy = (chainId) => {
    if(!confirmed) {
      return setError(true)
    }
    const modifiedData = {
      ...contract,
      chainId: chainId
    }
    console.log(modifiedData);
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
            <Button className="rinkeby-button" variant="primary" width='100%' onClick={() => handleDeploy(4)}>DEPLOY ON RINKEBY</Button>
            <Button variant="secondary" width='100%' onClick={() => handleDeploy(1)}>DEPLOY ON MAINNET</Button>
          </Content>
        </ContainerSm>
      </DeployPageStyle>
    </MainLayout>
  );
};

export default DeployPage;
