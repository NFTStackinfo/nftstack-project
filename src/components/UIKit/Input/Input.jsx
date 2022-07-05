import React, { forwardRef, useState } from "react"
import { InputStyle } from "./Input.style"
import { Icon } from "../Icon/Icon"
import { randomStr } from "../../../utils/text"

const Input = forwardRef(({
                 className,
                 value,
                 onChange,
                 onBlur,
                 icon,
                 iconColored = false,
                 label = "Label*",
                 helperText,
                 errorMessage,
                 charactersCount = false,
                 disabled = false,
                 type = "text",
                 placeholder = "",
               }, ref) => {
  const [inputId] = useState(randomStr(8))

  return (
    <InputStyle
      className={[
        "input-group",
        className,
        errorMessage ? "error" : "",
        disabled ? "disabled" : ""
      ].join(" ")}
      icon={icon}
      isiconcolored={iconColored ? true : undefined}>
      <label className="input-group__label text-c font-semibold"
             htmlFor={inputId}>{label}</label>

      <div className="input-group__input">
        {icon && <Icon name={icon} />}

        <input
          ref={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          placeholder={placeholder}
          className="text-b3 font-regular"
          id={inputId}
          disabled={disabled}
        />
      </div>

      {helperText || charactersCount || errorMessage ? (
        <div className="input-group__footer text-c">
          <span className="input-group__helper-text">
            {errorMessage || helperText}
          </span>

          {charactersCount &&
            <span
              className="input-group__characters-count">
              {value.length}
            </span>
          }
        </div>
      ) : ""}

    </InputStyle>
  )
})

export default Input
