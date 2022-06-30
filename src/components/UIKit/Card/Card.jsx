import React from "react"
import { CardStyle } from "./Card.style"
import { Icon } from "../Icon/Icon"
import Tag from "../Tag/Tag"
import { dateFormat } from "../../../utils/date"
import { cardData } from "./card-data"

function Card({ projectName, network, date, variant='contract', className=''}) {

  return (
    <CardStyle className={['card', variant, className].join(" ")}>
      <div className="card__content">
        {variant === "create"
          ? (<>
            <Icon name="add-circle"/>

            <span className="text-c">
              Create a New Contract
            </span>
          </>)
          : (<>
            <div className="card__content__header">
              <h3 className="text-b2 font-semibold">{projectName}</h3>

              <Tag type={cardData[network].network}/>
            </div>

            <p className="card__content__network text-b3">{cardData[network].text}</p>

            <Tag type="default" className="default-tag"/>

            <p className="card__content__date text-c">Submitted on: {dateFormat(date)}</p>
          </>)
        }
      </div>
    </CardStyle>
  )
}

export default Card
