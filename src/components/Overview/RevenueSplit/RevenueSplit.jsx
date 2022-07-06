import React, { useState, useEffect } from "react"
import {
  RecipientsAddresses,
  RevenueSplitCount,
  RevenueSplitHeader,
  RevenueSplitHeaderContent,
  RevenueSplitHeaderControl,
  RevenueSplitContent,
  RevenueSplitStyle, RevenueSplitList, RevenueSplitListPercent, RevenueSplitBody
} from "./RevenueSplit.style"
import { truncate } from "../../../utils/text"
import { Transition } from "react-transition-group"
import { Button } from "components/UIKit"


const RevenueSplit = ({
                        className,
                        recipients = [{ address: "", percent: "" }]
                      }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [addresses, setAddresses] = useState([])


  const handleResize = () => {
    const windowWidth = window.innerWidth

    setAddresses(windowWidth < 768 ?
      recipients.map(({address}, idx) => (
        truncate(address, 0, 4, address.length - 5, address.length - 1, " ... ")
      ))
      : recipients.map(({address}, idx) => (
        truncate(address, 0, 9, address.length - 5, address.length - 1, " ... ")
      ))
    )
  }


  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <RevenueSplitStyle className={["revenue-split", className].join(" ")}>
      <RevenueSplitContent>
        <RevenueSplitHeader>
          <RevenueSplitHeaderContent>
            <RevenueSplitCount>
          <span
            className="text-b3 font-semibold"
          >Revenue Split
            <span
              className="font-regular"
            > ({recipients.length} Recipients)</span></span>
            </RevenueSplitCount>

            <RecipientsAddresses className="text-c">
              {addresses.map((address, idx) => (
                <li key={address + idx}>
                  {address}
                  {idx !== recipients.length - 1 && ","}&nbsp;
                </li>
              ))}
            </RecipientsAddresses>
          </RevenueSplitHeaderContent>

          <RevenueSplitHeaderControl>
            <Button
              variant="black"
              suffixIcon={isOpen ? "carret-up" : "carret-down"}
              onClick={() => setIsOpen(() => !isOpen)}
            />
          </RevenueSplitHeaderControl>
        </RevenueSplitHeader>

        <Transition in={isOpen} timeout={500}>
          {state => (
            <RevenueSplitBody className={[state].join(" ")} recipientsCount={recipients.length}>
              <RevenueSplitList>
                {recipients.map(({ address, percent }, idx) => (
                  <li key={address + idx}>
                    <span className="text-b3">{address}</span>
                    <RevenueSplitListPercent className="text-c">
                      {percent}% of revenue
                    </RevenueSplitListPercent>
                  </li>
                ))}
              </RevenueSplitList>
            </RevenueSplitBody>

          )}
        </Transition>

      </RevenueSplitContent>
    </RevenueSplitStyle>
  )
}

export default RevenueSplit
