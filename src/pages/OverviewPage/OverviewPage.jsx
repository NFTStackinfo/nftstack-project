import React, { useEffect } from "react"
import {
  OverviewPageStyle
} from "./OverviewPage.style"
import MainLayout from "../../components/layouts/MainLayout/MainLayout"
import {
  ContainerMd
} from "../../styles/components"
import Tag from "../../components/UIKit/Tag/Tag"
import { networkData } from "./overview-page-data"
import Banner from "../../components/UIKit/Banner/Banner"
import { Button } from "../../components/UIKit"
import RevenueSplit from "../../components/Overview/RevenueSplit/RevenueSplit"


const OverviewPage = ({
                        projectName = "Racing Social Club",
                        contractType = "erc721",
                        network = "rinkeby",
                        contractAddress = "0x01d2e2FDEEAFa7809C9e0036e131859B14E0E0Ea",
                        processed=true
                      }) => {
  return (
    <MainLayout
      headerAddress="0x0E086Bfb73Dd4F52a42753C0848f426FA079A76e"
      back="/"
      backPosition="top"
      container="md"
    >
      <OverviewPageStyle>
        <ContainerMd inner>
          <div className="overview__content">
            <div className="overview__header">
              <div>
                <h3 className="text-b2 font-semibold">{projectName}</h3>

                <Tag type={contractType} />
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
                recipients={[
                  {address: '0x0E086Bfb73Dd4F52a42753C0848f426FA079A76e', percent: 30},
                  {address: '0x0E086Bfb73Dd4F52a42753C0848f426FA079A76e', percent: 10},
                  {address: '0x0E086Bfb73Dd4F52a42753C0848f426FA079A76e', percent: 10},
                  {address: '0x0E086Bfb73Dd4F52a42753C0848f426FA079A76e', percent: 10},
                  {address: '0x0E086Bfb73Dd4F52a42753C0848f426FA079A76e', percent: 10},
                  {address: '0x0E086Bfb73Dd4F52a42753C0848f426FA079A76e', percent: 10},
                  {address: '0x0E086Bfb73Dd4F52a42753C0848f426FA079A76e', percent: 10},
                ]}
              />
            </div>


            <div className="overview__footer">
              <Button
                variant="secondary"
                href={networkData[network].platformURI + contractAddress}
                target="_black"
                rel="noreferrer"
                className="overview__footer__btn-view"
              >
                View on {networkData[network].platform}
              </Button>

              {!processed && (
                <Button
                  variant="primary"
                  className="overview__footer__btn-deploy"
                >
                  Deploy on mainnet
                </Button>
              )}
            </div>
          </div>
        </ContainerMd>
      </OverviewPageStyle>
    </MainLayout>
  )
}

export default OverviewPage
