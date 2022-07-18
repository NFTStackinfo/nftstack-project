import React from "react"
import { CardStyle } from "./Card.style"
import { dateFormat } from "../../../utils/date"
import { cardData } from "./card-data"
import { Icon, Tag } from "../index"

export const Card = ({
                       projectName,
                       updatedAt,
                       variant = "contract",
                       typeId,
                       draft,
                       rinkebyAddress,
                       mainnetAddress,
                       className = "",
                     }) => {


  const networkId = mainnetAddress ? '1' : rinkebyAddress ? '4' : ''

  return (
    <CardStyle  className={["card", variant, className].join(" ")}>
      <div className="card__content">
        {variant === "create"
          ? (<>
            <Icon name="add-circle" />

            <span className="text-c">
              Create a New Contract
            </span>
          </>)
          : (<>
            <div className="card__content__header">
              <h3 className="text-b2 font-semibold">{projectName}</h3>

              <Tag type={typeId} />
            </div>

            <p className="card__content__network text-b3">{cardData[networkId]?.text}</p>

            {draft &&
              <Tag type="default" className="default-tag" label='Draft' />}

            <p className="card__content__date text-c">Submitted
                                                      on: {dateFormat(updatedAt)}</p>
          </>)
        }
      </div>
    </CardStyle>
  )
}
