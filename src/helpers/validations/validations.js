import {messages} from "./messages";
import {regex} from "./regex";

export const required = {
    required: messages.required,
}

export const emailValidate = {
    required: messages.required,
    pattern: {
        value: regex.email,
        message: messages.email,
    }
}

export const phoneValidate = {
    required: messages.required,
    pattern: {
        value: regex.phone,
        message: messages.phone,
    }
}

export const carPriceValidation = {
    maxLength: {
        value: 10,
        message: messages.price,
    },
}
