import { formMessageMax, formMessageMin, formMessages } from "./messages"
import { regex } from "./regex"

export const validateRequired = {
  required: { value: true, message: formMessages.required }
}

export const validateEmail = {
  required: { value: true, message: formMessages.required },
  pattern: {
    value: regex.email,
    message: formMessages.email
  }
}

export const validatePhone = {
  required: { value: true, message: formMessages.required },
  pattern: {
    value: regex.phone,
    message: formMessages.phone
  }
}

export const validateMaxLength = (length) => ({
  maxLength: {
    value: length
  }
})

export const validateMinLength = (length) => ({
  minLength: {
    value: length
  }
})

export const validateMinMaxLength = (min, max) => ({
  minLength: {
    value: min
  },
  maxLength: {
    value: max
  }
})

export const validateMax = (value) => ({
  max: {
    value,
    message: formMessageMax(value)
  }
})

export const validateMin = (value) => ({
  max: {
    value,
    message: formMessageMin(value)
  }
})

export const validateMinMax = (min, max) => ({
  min: {
    value: min,
    message: formMessageMin(min)
  },
  max: {
    value: max,
    message: formMessageMax(max)
  }
})

export const validateMinMaxRequired = ({
                                         min=0,
                                         max,
                                         more = min,
                                         less = max,
                                       }) => ({
  required: { value: true, message: formMessages.required },
  min: {
    value: min,
    message: formMessageMin(more)
  },
  max: {
    value: max,
    message: formMessageMax(less)
  }
})

export const validateCollectionName = {
  required: { value: true, message: formMessages.required },
  pattern: {
    value: regex.collectionName,
    message: formMessages.collectionName
  }
}


