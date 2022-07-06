import React from "react"
import { Card, Tag } from "../index"


function SectionCard(props) {
  return (
    <section className="section section-card">
      <div className="container">
        <div className="content">
          <h2>Cards</h2>

          <div className="section-card__container">
            <div className="tag-container">
              <h3 className="text-b2 title">Tags</h3>

              <div className="tag-content">
                <div className="tag-variant">
                  <span className="text-b2">Default: </span>

                  <div className="tag-variant__list">
                  <Tag type="default" />
                  <Tag type="default" label="In development"/>
                  </div>
                </div>

                <div className="tag-variant">
                  <span className="text-b2">Network ETH: </span>

                  <div className="tag-variant__list">
                    <Tag type="erc721" />
                    <Tag type="erc721a" />
                    <Tag type="erc1155" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container">
              <h3 className="text-b2 title">Cards</h3>

              <div className="card-content">
                <div className="card-variant">
                  <Card variant="create"/>
                </div>

                <div className="card-variant">
                  <Card
                    network="rinkeby"
                    contractType="erc721a"
                    date={new Date}
                    projectName="Racing Social Club"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionCard
