import React from 'react';
import {Input} from 'components/UIKit';
import {SmartContractFormStyle} from './SmartContractForm.style';
import {
  Controller,
  useForm,
  useFormState,
  useFieldArrayuseFieldArray,
  useFieldArray,
} from 'react-hook-form';
import {
  carPriceValidation,
  emailValidate,
  phoneValidate,
  validateRequired
} from "helpers/validations/validations"

const SmartContractForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    control,
    setValue,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      test: [{ firstName: "Bill", lastName: "Luo" }]
    }
    // defaultValues: {
    //   name: "",
    //   email: "",
    //   phone: "",
    //   state: "",
    //   vehicleVin: "",
    //   vehicleMake: "",
    //   vehicleModel: "",
    //   vehiclePrice: "",
    //   vehiclePhotos: [],
    // },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "test"
    }
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);
  return (
      <SmartContractFormStyle>
        <div className="container">
          <h1>Smart Contract Form</h1>
          <p>This is a smart contract form.</p>
          <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              render={({ field }) => (
                <Input
                  value={field.value}
                  ref={field.ref}
                  onChange={field.onChange}
                  label="Project Name"
                  errorMessage={errors.projectName?.message}
                />
              )}
              name="projectName"
              control={control}
              rules={validateRequired}
            />
            <div>
              <label>
                <div>
                  <input type="radio" value="ERC721" {...register("contractType")} />
                  ERC721
                </div>
              </label>
              <label>
                <div>
                  <input type="radio" value="ERS721A" {...register("contractType")} />
                  ERS721A
                </div>
              </label>
              <label>
                <div>
                  <input type="radio" value="ERC1155" {...register("contractType")} />
                  ERC1155
                </div>
              </label>
            </div>
            <Controller
              render={({ field }) => (
                <Input
                  value={field.value}
                  ref={field.ref}
                  onChange={field.onChange}
                  label="Collection Name"
                  errorMessage={errors.collectionName?.message}
                />
              )}
              name="collectionName"
              control={control}
              rules={validateRequired}
            />
            <Controller
              render={({ field }) => (
                <Input
                  value={field.value}
                  ref={field.ref}
                  onChange={field.onChange}
                  label="Symbol"
                  errorMessage={errors.symbol?.message}
                />
              )}
              name="symbol"
              control={control}
              rules={validateRequired}
            />
            <ul>
              {fields.map((item, index) => {
                return (
                  <li key={item.id}>
                    <Controller
                      render={({ field }) => (
                        <Input
                          value={field.value}
                          ref={field.ref}
                          onChange={field.onChange}
                          label="Symbol"
                          errorMessage={errors.symbol?.message}
                        />
                      )}
                      name={`test[${index}].address`}
                      control={control}
                      rules={validateRequired}
                    />
                    <button type="button" onClick={() => remove(index)}>
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={() => {
                append({ firstName: "", lastName: "" });
              }}
            >
              append
            </button>
            <button type="submit">submit</button>
          </form>
        </div>

      </SmartContractFormStyle>
  );
};

export default SmartContractForm;
