import React, {useState} from 'react';
import {DeployPageStyle} from './DeployPage.style';
import {MainLayout} from 'components/layouts';
import {ContainerSm, Content, Title} from '../../styles/components';
import data  from 'components/Deploy/DeployCard/deploy-card-data';
import DeployCard from 'components/Deploy/DeployCard/DeployCard';
import {Button} from 'components/UIKit';
import PaymentBox from 'components/Deploy/PaymentBox/PaymentBox';

const DeployPage = () => {
  const [error, setError] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

const handleChange = (e) => {
  setError(!e.target.checked);
  setConfirmed(e.target.checked);
}

const handleDeploy = () => {
    if(!confirmed) {
      return setError(true)
    }
    console.log('deploy');
}
  return (
    <MainLayout
      headerAddress="0x0E086Bfb73Dd4F52a42753C0848f426FA079A76e"
      back="/smart-contract"
    >
      <DeployPageStyle>
        <ContainerSm inner>
          <Title>Review and Deploy</Title>

          <Content>
            <PaymentBox className='payment-box' error={error} onchange={handleChange}/>
            <DeployCard data={data}/>
            <p className="text-c warning-text">Note: Ethereum network must be on Rinkeby</p>
            <p className='text-c'>To be able to deploy on Rinkeby you must have test ETH. <a
              href="#" target='_blank'  className='link'>Get Free 0.1ETH</a></p>
            <Button className="rinkeby-button" variant="primary" width='100%' onClick={handleDeploy}>DEPLOY ON RINKEBY</Button>
            <Button variant="secondary" width='100%'>DEPLOY ON MAINNET</Button>
          </Content>
        </ContainerSm>
      </DeployPageStyle>
    </MainLayout>
  );
};

export default DeployPage;
