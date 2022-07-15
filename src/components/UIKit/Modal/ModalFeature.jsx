import React  from "react"
import { Modal } from "./Modal"
import { useForm, Controller } from "react-hook-form"
import {
  validateEmail,
  validateRequired
} from "../../../helpers/validations/validations"
import {
  ModalFeatureForm,
  ModalFooter,
  ModalText,
  ModalTitle
} from "./Modal.style"
import { Textarea, Input, Button } from "../index"


export const ModalFeature = ({ isActive, toggleModal, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      description: ""
    }
  })

  const sendHandle = (data) => {
    reset()
    toggleModal()
    onSubmit(data)
  }

  const handleCancel = () => {
    reset()
    toggleModal()
  }

  return (
    <Modal isActive={isActive}>
      <ModalTitle center>Custom Feature</ModalTitle>

      <ModalText center>
        Send Us A Short Description Of Custom Feature You Want
      </ModalText>

      <ModalFeatureForm onSubmit={handleSubmit(sendHandle)}
                        className="modal__form">
        <div className="fields-container">
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
        </div>

        <ModalFooter buttonFit>
          <Button
            variant="secondary"
            className="modal__form__btn_close"
            type="button"
            onClick={() => handleCancel()}
          >Cancel</Button>

          <Button
            variant="primary"
            className="modal__form__btn_send"
            type="submit"
          >Send request</Button>
        </ModalFooter>
      </ModalFeatureForm>
    </Modal>
  )
}
