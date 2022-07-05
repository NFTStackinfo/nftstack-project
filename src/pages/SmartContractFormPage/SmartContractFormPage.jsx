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
import { Button, Radio } from "../../components/UIKit"

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
      contractType: "ERC721",
      collectionName: "",
      symbol: "",
      supplyCount: ""
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
                    label="Project Name*"
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    errorMessage={errors.projectName?.message}
                  />)}
              />

              <div className="form__contract-type">
                <span className="text-c font-semibold">ETH Contract Type*</span>

                <div className="form__radio-group">
                  <Radio
                    label="ERC721"
                    value="ERC721" {...register("contractType")}
                  />

                  <Radio
                    label="ERC721A"
                    value="ERC721A"
                    {...register("contractType")}
                  />

                  <Radio
                    label="ERC1155"
                    value="ERC1155" {...register("contractType")}
                  />
                </div>
              </div>

              <Controller
                name="collectionName"
                control={control}
                rules={requiredValidate}

                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Input
                    value={value}
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
                    type="number"
                    label="Total Supply Count*"
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    errorMessage={errors.supplyCount?.message}
                  />)}
              />

              <div className="form__input-row">
                <Controller
                  name="presaleMintPrice"
                  control={control}
                  rules={requiredValidate}

                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Input
                      value={value}
                      type="number"
                      label="Presale Mint Price*"
                      onChange={onChange}
                      onBlur={onBlur}
                      ref={ref}
                      icon="ethereum"
                      iconColored
                      errorMessage={errors.presaleMintPrice?.message}
                    />)}
                />

                <Controller
                  name="presaleMintLimit"
                  control={control}
                  rules={requiredValidate}

                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Input
                      value={value}
                      type="number"
                      label="Presale Mint Limit Per Wallet*"
                      onChange={onChange}
                      onBlur={onBlur}
                      ref={ref}
                      errorMessage={errors.presaleMintLimit?.message}
                    />)}
                />
              </div>

              <div className="form__input-row">
                <Controller
                  name="mintPrice"
                  control={control}
                  rules={requiredValidate}

                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Input
                      value={value}
                      type="number"
                      label="Mint Price*"
                      onChange={onChange}
                      onBlur={onBlur}
                      ref={ref}
                      icon="ethereum"
                      iconColored
                      errorMessage={errors.mintPrice?.message}
                    />)}
                />

                <Controller
                  name="mintLimit"
                  control={control}
                  rules={requiredValidate}

                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Input
                      value={value}
                      type="number"
                      label="Mint Limit Per Wallet*"
                      onChange={onChange}
                      onBlur={onBlur}
                      ref={ref}
                      errorMessage={errors.mintLimit?.message}
                    />)}
                />
              </div>

              <Button variant="primary" width="100%">
                Continue
              </Button>

            </SmartContractForm>
          </Content>
        </ContainerSm>
      </SmartContractFormPageStyle>
    </MainLayout>
  )
}

export default SmartContractFormPage
