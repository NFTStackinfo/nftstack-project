import React, {useEffect, useState} from 'react';
import {
  OverviewPageStyle,
} from './OverviewPage.style';
import {
  ContainerMd, ContainerSm, Content, Title,
} from '../../styles/components';
import {networkData} from './overview-page-data';
import RevenueSplit from '../../components/Overview/RevenueSplit/RevenueSplit';
import {MainLayout} from 'components/layouts';
import {Tag, Banner, Button, ModalDeploying} from 'components/UIKit';
import {useNavigate, useParams} from 'react-router-dom';
import {useContractById} from '../../fetchHooks/useContractById';
import Preloader from '../../components/UIKit/Preloader/Preloader';
import {deployContract} from '../../utils/deploy';
// import {Network} from '../../helpers/consts';
import {useMutation} from 'react-query';
import {updateContract} from '../../services/WeblyApi';

const OverviewPage = () => {
  const {contract_id} = useParams();
  const navigate = useNavigate()
  const {data, isLoading, isFetching, refetch} = useContractById(contract_id);
  const contract = data?.contract;
  const [isDeploying, setIsDeploying] = useState(false);

  const network = contract?.mainnetAddress ? 'mainnet' : 'rinkeby'

  const contractAddress = contract?.mainnetAddress || contract?.rinkebyAddress
  const deployData = data?.abi;

  // useEffect(() => {
  //   if(data?.contract?.rinkebyAddress === null) {
  //     navigate('/dashboard')
  //   }
  // }, [data?.contract]);

  const { mutate } = useMutation(updateContract, {
    onSuccess: data  =>  {
      refetch()
    },
    onError: () => {
      console.log("there was an error")
    }
  });

  const handleMainnetDeploy = async (abi, bytecode) => {
    if (typeof window.ethereum !== 'undefined') {
      const contractAddress = await deployContract(4, abi, bytecode, (e) =>setIsDeploying(e))
      if(contractAddress) {
        const modifiedData = {
          chainId: 4,
          contractId: contract_id,
          mainnetAddress: contractAddress,
        };
        setIsDeploying(false)
        mutate(modifiedData)
      }

    }
  }

  return (
    <MainLayout
      back="/dashboard"
      backPosition="top"
      container="md"
    >
      {
        (isLoading || isFetching) ? <Preloader/> :
          <>
            {
              isDeploying ?
                <Preloader/> :
                <OverviewPageStyle>
                  <ContainerMd inner>
                    <div className="overview__content">
                      <div className="overview__header">
                        <div>
                          <h3
                            className="text-b2 font-semibold">{contract?.projectName}</h3>

                          <Tag type={contract?.typeId}/>
                        </div>

                        <p className="text-b3 font-regular">
                          {networkData[network].text}:
                          <span
                            className="font-semibold"
                          > {contractAddress}</span>
                        </p>
                      </div>

                      <div className="overview__body">
                        <Banner
                          text="Read Developer documentation to learn how to setup Mint Button"
                        />

                        <RevenueSplit
                          recipients={contract?.walletAddresses}
                        />
                      </div>


                      <div className="overview__footer">
                        {
                          !contract?.mainnetAddress &&
                          <Button
                            variant="secondary"
                            to={`/smart-contract/${contract_id}`}
                          >
                            Edit
                          </Button>
                        }

                        <Button
                          variant="secondary"
                          href={networkData[network].platformURI + contract?.rinkebyAddress}
                          target="_black"
                          rel="noreferrer"
                          className="overview__footer__btn-view"
                        >
                          View on {networkData[network].platform}
                        </Button>

                        {!contract?.mainnetAddress && (
                          <Button
                            variant="primary"
                            className="overview__footer__btn-deploy"
                            onClick={() => handleMainnetDeploy(deployData?.abi,
                              deployData?.bytecode)}
                          >
                            Deploy on mainnet
                          </Button>
                        )}
                      </div>
                    </div>
                  </ContainerMd>
                </OverviewPageStyle>
            }
          </>

      }
    </MainLayout>
  );
};

export default OverviewPage;
