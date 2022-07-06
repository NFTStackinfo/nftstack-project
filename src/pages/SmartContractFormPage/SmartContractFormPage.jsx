import React, { useEffect } from "react"
import {
  SmartContractForm,
  SmartContractFormPageStyle
} from "./SmartContractFormPage.style"
import { ContainerSm, Content, Title } from "../../styles/components"
import { useForm, Controller, useFieldArray } from "react-hook-form"
import {
  validateMinMax,
  validateRequired
} from "../../helpers/validations/validations"
import { MainLayout } from "components/layouts"
import { Input, Button, Radio } from "components/UIKit"


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
      supplyCount: "",
      presaleMintPrice: "",
      presaleMintLimit: 1,
      mintPrice: "",
      mintLimit: 1,
      baseURI: ""
    }
  })

  const { fields, append, remove } = useFieldArray(
    {
      control,
      name: "walletAddresses"
    }
  )

  const onSubmit = (data) => {
    console.log("onSubmit : ", data)
  }

  const getWalletErrorMessage = (idx, name) => errors?.walletAddresses?.length > 0 && errors.walletAddresses[idx]
    ? errors.walletAddresses[idx][name]?.message
    : ""

  useEffect(() => {
    append({})
    append({})
  }, [])


  return (
    <MainLayout
      back="/dashboard"
    >
      <SmartContractFormPageStyle>
        <ContainerSm inner>
          <Title>Create Smart Contract</Title>

          <Content>
            <SmartContractForm onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="projectName"
                control={control}
                rules={validateRequired}

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
                rules={validateRequired}

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
                rules={validateRequired}

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
                rules={validateRequired}

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
                  rules={validateRequired}

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
                  rules={validateRequired}

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
                  rules={validateRequired}

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
                  rules={validateRequired}

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

              <Controller
                name="baseURI"
                control={control}
                rules={validateRequired}

                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Input
                    value={value}
                    type="url"
                    label="Set Base URI*"
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    helperText="Helper Text Lorem Ipsum Dolar Seat"
                    errorMessage={errors.supplyCount?.message}
                  />)}
              />

              <div className="form__wallets">
                <span className="text-b3 font-semibold form__wallet__title">Withdrawal Wallet Address </span>

                <ul className="form__wallets__list">
                  {fields.map(({ id, address, split }, index) => {
                    return (
                      <li key={id} className="form__wallets__list__item">
                        <Controller
                          name={`walletAddresses[${index}].address`}
                          control={control}
                          rules={validateRequired}

                          render={({
                                     field: {
                                       onChange,
                                       onBlur,
                                       value,
                                       ref
                                     }
                                   }) => (
                            <Input
                              value={value}
                              label="Wallet Address*"
                              onChange={onChange}
                              onBlur={onBlur}
                              ref={ref}
                              errorMessage={getWalletErrorMessage(index, "address")}
                            />)}
                        />

                        <Controller
                          name={`walletAddresses[${index}].split`}
                          control={control}
                          rules={validateMinMax(0, 100)}

                          render={({
                                     field: {
                                       onChange,
                                       onBlur,
                                       value,
                                       ref
                                     }
                                   }) => (
                            <Input
                              value={value}
                              type="number"
                              min="0"
                              max="100"
                              label="Split %*"
                              onChange={onChange}
                              onBlur={onBlur}
                              ref={ref}
                              errorMessage={getWalletErrorMessage(index, "split")}
                            />)}
                        />

                        <Button
                          type="button"
                          onClick={() => remove(index)}
                          suffixIcon="remove-circle"
                          variant="blue"
                          className={["form__wallets__list__item__btn-remove"].join(" ")}
                        />
                      </li>
                    )
                  })}
                </ul>

                <Button
                  prefixIcon="add-circle"
                  variant="blue"
                  type="button"
                  onClick={() => append({})}
                  className="form__wallets__btn-add"
                >
                  Add wallet
                </Button>
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
