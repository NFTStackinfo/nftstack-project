import React from "react"
import { CardStyle } from "./Card.style"
import { dateFormat } from "../../../utils/date"
import { cardData } from "./card-data"
import { Icon, Tag } from "../index"

export const Card = ({
                       projectName,
                       network,
                       updatedAt,
                       variant = "contract",
                       typeId,
                       chainId,
                       className = "",
                       state
                     }) => {

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

            <p className="card__content__network text-b3">{cardData[chainId]?.text}</p>

            {state &&
              <Tag type="default" className="default-tag" label={state} />}

            <p className="card__content__date text-c">Submitted
                                                      on: {dateFormat(updatedAt)}</p>
          </>)
        }
      </div>
    </CardStyle>
  )
}
