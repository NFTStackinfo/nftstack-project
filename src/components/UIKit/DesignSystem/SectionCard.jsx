import React from "react"
import Tag from "../Tag/Tag"
import Card from "../Card/Card"

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
                  <Tag type="default" />
                </div>

                <div className="tag-variant">
                  <span className="text-b2">Network ETH: </span>
                  <Tag type="eth" />
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
