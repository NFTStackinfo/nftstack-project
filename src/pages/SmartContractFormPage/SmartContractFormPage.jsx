import React from "react"
import {
  SmartContractForm,
  SmartContractFormPageStyle
} from "./SmartContractFormPage.style"
import MainLayout from "../../components/layouts/MainLayout/MainLayout"
import { ContainerSm, Content, Title } from "../../styles/components"
import { useForm, Controller } from "react-hook-form"
import { requiredValidate } from "../../helpers/validations/validations"
import Input from "../../components/UIKit/Input/Input"
import { Radio } from "../../components/UIKit"

const SmartContractFormPage = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({
    mode: "onChange",
    defaultValues: {
      projectName: "New project 1",
      collectionName: ""
    }
  })

  const onSubmit = (data) => {
    console.log("onSubmit : ", data)
  }

  return (
    <MainLayout
      headerAddress="0x0E086Bfb73Dd4F52a42753C0848f426FA079A76e"
      back="/"
    >
      <SmartContractFormPageStyle>
        <ContainerSm inner>
          <Title>Create Smart Contract</Title>

          <Content>
            <SmartContractForm onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="projectName"
                control={control}
                rules={requiredValidate}

                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Input
                    value={value}
                    type="text"
                    label="Project Name*"
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    errorMessage={errors.projectName?.message}
                  />)}
              />

              <div className="form__contract-type">
                <span className="text-c font-semibold">ETH Contract Type*</span>

                <div className="form__contract-type__radio-container">
                  <Radio label="ERC721" checked />

                  <Radio label="ERC721A" />

                  <Radio label="ERC1155" />
                </div>
              </div>

              <Controller
                name="collectionName"
                control={control}
                rules={requiredValidate}

                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Input
                    value={value}
                    type="text"
                    label="Collection Name*"
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    errorMessage={errors.collectionName?.message}
                  />)}
              />

              <Controller
                name="symbol"
                control={control}
                rules={requiredValidate}

                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Input
                    value={value}
                    type="text"
                    label="Symbol*"
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    errorMessage={errors.symbol?.message}
                  />)}
              />

              <Controller
                name="supplyCount"
                control={control}
                rules={requiredValidate}

                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Input
                    value={value}
                    type="text"
                    label="Total Supply Count*"
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    errorMessage={errors.collectionName?.message}
                  />)}
              />

            </SmartContractForm>
          </Content>
        </ContainerSm>
      </SmartContractFormPageStyle>
    </MainLayout>
  )
}

export default SmartContractFormPage
