import React, { useEffect, useState } from "react"
import { Modal } from "./Modal"
import { useForm, Controller } from "react-hook-form"
import {
  validateEmail,
  validateRequired
} from "../../../helpers/validations/validations"
import { ModalFeatureForm } from "./Modal.style"
import { Textarea, Input, Button } from "../index"


export const ModalFeature = ({ isActive, onModalToggle, onSubmit }) => {
  const [isModalActive, setIsModalActive] = useState(false)

  useEffect(() => {
    setIsModalActive(isActive)
  }, [isActive])

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      description: ""
    }
  })

  const sendHandle = (data) => {
    setValue("name", "")
    setValue("email", "")
    setValue("description", "")
    setIsModalActive(false)
    onSubmit(data)
  }

  return (
    <Modal isActive={isModalActive} onModalToggle={onModalToggle}>
      <h3 className="modal__title">Custom Feature</h3>

      <p className="modal__text text-center">
        Send Us A Short Description Of Custom Feature You Want
      </p>

      <ModalFeatureForm onSubmit={handleSubmit(sendHandle)}
                        className="modal__form">
        <Controller
          name="name"
          control={control}
          rules={validateRequired}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              value={value}
              type="text"
              label="Name"
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              errorMessage={errors.name?.message}
            />
          )}

        >
        </Controller>


        <Controller
          name="email"
          control={control}
          rules={validateEmail}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              value={value}
              type="email"
              label="Email*"
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              errorMessage={errors.email?.message}
            />
          )}

        >
        </Controller>

        <Controller
          name="description"
          control={control}
          rules={validateRequired}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Textarea
              value={value}
              type="description"
              label="Feature Description*"
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              textareaHeight="110px"
              errorMessage={errors.description?.message}
            />
          )}

        >
        </Controller>

        <div className="modal__form__btn-container">
          <Button
            variant="secondary"
            className="modal__form__btn_close"
            type="button"
            onClick={() => setIsModalActive(false)}
          >Cancel</Button>

          <Button
            variant="primary"
            className="modal__form__btn_send"
            type="submit"
          >Send request</Button>
        </div>
      </ModalFeatureForm>
    </Modal>
  )
}
