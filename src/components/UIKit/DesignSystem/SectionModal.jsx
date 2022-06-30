import React, { useState } from "react"
import Tag from "../Tag/Tag"
import Card from "../Card/Card"
import { Button } from "../Button/Button"
import Modal from "../Modal/Modal"

function SectionModal(props) {
  const [isModalActive, setIsModalActive] = useState(false)
  const modalHandler = (state) => setIsModalActive(state)

  return (
    <section className="section section-modal">
      <div className="container">
        <div className="content">
          <h2>Modal</h2>

          <div className="section-modal__container">
            <div className="modal-container">
              <Button variant="primary" onClick={() => modalHandler(true)}>Open modal</Button>

              <Modal isActive={isModalActive} onModalToggle={modalHandler} network="rinkeby"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionModal
