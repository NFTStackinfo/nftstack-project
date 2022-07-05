export const formMessages = {
    required: 'This field is required',
    email: 'Wrong email format.',
    phone: 'Wrong phone format.',
    invalidType: 'File type is invalid',
}

export const formMessageMinLength = (length) => `Characters length should be more then ${length}`
export const formMessageMaxLength = (length) => `Characters length should be less then ${length}`

export const formMessageMin = (val) => `Value should be more then ${val}`
export const formMessageMax = (val) => `Value should be less then ${val}`
