import React, {useEffect, useState} from 'react';
import {DeployPageStyle} from './DeployPage.style';
import {MainLayout} from 'components/layouts';
import {ContainerSm, Content, Title} from '../../styles/components';
import DeployCard from 'components/Deploy/DeployCard/DeployCard';
import {Button, ModalDeploying} from 'components/UIKit';
import PaymentBox from 'components/Deploy/PaymentBox/PaymentBox';
import {useContractState} from '../../context/ContractContext';
import {useNavigate, useParams} from 'react-router-dom';
import {useContractById} from '../../fetchHooks/useContractById';
import {parseUnits} from 'ethers/lib.esm/utils';
import {ethers, Signer} from 'ethers';
import Preloader from '../../components/UIKit/Preloader/Preloader';
import {useMutation} from 'react-query';
import {
  createContract,
  editContract,
  updateContract,
} from '../../services/WeblyApi';
import {Network} from '../../helpers/consts';

const DeployPage = () => {
  const [isModalDeployingActive, setIsModalDeployingActive] = useState(false);
  const [error, setError] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const navigate = useNavigate();
  const {contract_id} = useParams();
  const {data, isLoading, isFetching} = useContractById(contract_id);
  const contract = data?.contract;

  const deployData = data?.abi;

  const toggleModalDeploying = () => setIsModalDeployingActive(
    () => !isModalDeployingActive);
  const handleChange = (e) => {
    setError(!e.target.checked);
    setConfirmed(e.target.checked);
  };

  useEffect(() => {
    // if(Object.keys(contract).length === 0) {
    //   navigate('/smart-contract')
    // }
  }, []);

  const { mutate } = useMutation(updateContract, {
    onSuccess: data  =>  {
      console.log(data);
    },
    onError: () => {
      console.log("there was an error")
    }
  });

  const handleDeploy = async (chainId, abi, bytecode) => {
    console.log(typeof chainId);
    if (!confirmed) {
      return setError(true);
    }
    if (typeof window.ethereum !== 'undefined') {

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({provider});
      const signature = await provider.getSigner();
      console.log(signature);

      const {chainId: networkId} = await provider.getNetwork();

      if (networkId !== chainId) {
         return  toggleModalDeploying();
      }



      const factory = new ethers.ContractFactory(abi, bytecode, signature)

      console.log({ factory })

      setIsDeploying(true)
      const contract = await factory.deploy(parseUnits("100"))

      console.log({ contract })

      const deployTransaction = await contract.deployTransaction.wait()
      const contractAddress = deployTransaction?.contractAddress
      console.log({ deployTransaction })
      setIsDeploying(false)

      const modifiedData = {
        chainId: chainId.toString(),
        contractId: contract_id,
        ...(chainId ===  Network.MAINNET && { mainnetAddress: contractAddress }),
        ...(chainId ===  Network.RINKEBY && { rinkebyAddress: contractAddress})
      };
      // console.log({modifiedData});

      mutate(modifiedData)
    }

  };

  return (
    <MainLayout
      back={`/smart-contract/${contract_id}`}
    >
      {
        (isLoading || isFetching) ? <Preloader/> :
          <>
            {
              isDeploying ?
                <Preloader/> :
                <DeployPageStyle>
                  <ContainerSm inner>
                    <Title>Review and Deploy</Title>

                    <Content>
                      <PaymentBox className="payment-box" error={error}
                                  onchange={handleChange}/>
                      <DeployCard data={contract}/>
                      <p className="text-c warning-text">Note: Ethereum network must
                        be on
                        Rinkeby</p>
                      <p className="text-c">To be able to deploy on Rinkeby you must
                        have
                        test ETH. <a
                          href="#" target="_blank" className="link">Get Free
                          0.1ETH</a>
                      </p>
                      <Button className="rinkeby-button" variant="primary"
                              width="100%"
                              onClick={() => handleDeploy(4, deployData?.abi,
                                deployData?.bytecode)}>DEPLOY ON RINKEBY</Button>
                      <Button variant="secondary" width="100%"
                              onClick={() => handleDeploy(1)}>DEPLOY ON
                        MAINNET</Button>
                    </Content>
                  </ContainerSm>
                  <ModalDeploying
                    isActive={isModalDeployingActive}
                    toggleModal={toggleModalDeploying}
                    network="rinkeby"
                  />
                </DeployPageStyle>
            }
          </>
      }
    </MainLayout>
  );
};

export default DeployPage;
