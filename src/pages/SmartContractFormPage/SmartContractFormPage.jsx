import React, { useEffect, useState } from "react"
import {useNavigate, useParams} from 'react-router-dom';
import {useMutation} from 'react-query';
import {useForm, Controller, useFieldArray, useFormState} from 'react-hook-form';
import {
  SmartContractForm,
  SmartContractFormPageStyle
} from "./SmartContractFormPage.style"
import { ContainerSm, Content, Title } from "styles/components"
import {
  validateMinMax,
  validateRequired
} from "../../helpers/validations/validations"
import { MainLayout } from "components/layouts"
import { Input, Button, Radio } from "components/UIKit"
import {createContract, editContract} from 'services/WeblyApi';
import defaultValues, {typeId} from './smart-contract-data';
import {useContractById} from 'fetchHooks/useContractById';
import Preloader from "components/UIKit/Preloader/Preloader"

const SmartContractFormPage = ({}) => {
  const navigate = useNavigate()
  const {contract_id} = useParams()

  const [id, setId] = useState(null)
  const {data, isLoading, isFetching} = useContractById(id)


  const contract = data?.contract

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue
  } = useForm({
    mode: "onChange",
    defaultValues
  })

  const { dirtyFields } = useFormState({
    control
  });
  console.log(dirtyFields);

  const { fields, append, remove } = useFieldArray(
    {
      control,
      name: "walletAddresses"
    }
  )

  useEffect(() => {
    if(contract_id) {
      setId(contract_id)
    }
  }, [contract_id])


  useEffect(() => {
      if(contract) {
        Object.keys(contract).map(key => {
          if(key === 'walletAddresses') {
            contract[key]?.map((row, index) => {
              setValue(`${key}[${index}].split`, row.percent)
              setValue(`${key}[${index}].address`, row.address)
            })
          }
          else setValue(key, contract[key]?.toString());
        })
      }
  }, [contract]);

  const { mutate } = useMutation(contract ? editContract : createContract, {
    onSuccess: data  =>  {
      if(data?.contractId) {
        return navigate(`/deploy/${data?.contractId}`)
      }
      navigate(`/deploy/${id}`)
    },
    onError: () => {
      console.log("there was an error")
    }
  });

  const onSubmit = (data) => {

    if(contract && dirtyFields) {

      mutate({
        ...data,
        contractId: contract.id
      })
      return navigate(`/deploy/${id}`)

    }
    mutate(data)
  }

  const getWalletErrorMessage = (idx, name) => errors?.walletAddresses?.length > 0 && errors.walletAddresses[idx]
    ? errors.walletAddresses[idx][name]?.message
    : ""

  return (
    <MainLayout
      back={(!isLoading || !isFetching) &&"/dashboard"}
    >

      {
        (isLoading || isFetching) ? <Preloader /> :
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
                        value={typeId.ERC721}
                        {...register("typeId")}
                      />

                      <Radio
                        label="ERC721A"
                        value={typeId.ERC721A}
                        {...register("typeId")}
                      />

                      <Radio
                        label="ERC1155"
                        value={typeId.ERC1155}
                        {...register("typeId")}
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
                    name="collectionSymbol"
                    control={control}
                    rules={validateRequired}

                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Input
                        value={value}
                        label="Symbol*"
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                        errorMessage={errors.collectionSymbol?.message}
                      />)}
                  />

                  <Controller
                    name="totalCount"
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
                        errorMessage={errors.totalCount?.message}
                      />)}
                  />

                  <Controller
                    name="reserveCount"
                    control={control}
                    rules={validateRequired}

                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Input
                        value={value}
                        type="number"
                        label="Reserve Count*"
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                        errorMessage={errors.reserveCount?.message}
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
                      name="presaleLimitPerWallet"
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
                          errorMessage={errors.presaleLimitPerWallet?.message}
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
                      name="limitPerWallet"
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
                          errorMessage={errors.limitPerWallet?.message}
                        />)}
                    />
                  </div>

                  <Controller
                    name="metadataUri"
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
                        errorMessage={errors.metadataUri?.message}
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
                              // rules={validateMinMax(0, 100)}
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
                              disabled={fields.length === 1}
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
      }

    </MainLayout>
  )
}

export default SmartContractFormPage
