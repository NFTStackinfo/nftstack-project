import { formMessages } from "./messages"
import { regex } from "./regex"

export const requiredValidate = {
  required: { value: true, message: formMessages.required }
}

export const emailValidate = {
  required: { value: true, message: formMessages.required },
  pattern: {
    value: regex.email,
    message: formMessages.email
  }
}

export const phoneValidate = {
  required: { value: true, message: formMessages.required },
  pattern: {
    value: regex.phone,
    message: formMessages.phone
  }
}

export const carPriceValidation = {
  maxLength: {
    value: 10,
    message: formMessages.price
  }
}
