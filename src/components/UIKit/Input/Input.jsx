import React, { forwardRef, useCallback, useState } from "react"
import { InputStyle } from "./Input.style"
import { randomStr } from "../../../utils/text"
import { Icon } from "../index"


export const Input = forwardRef(({
                                   className,
                                   value,
                                   onChange,
                                   onBlur,
                                   onFocus,
                                   icon,
                                   iconColored,
                                   label = "Label*",
                                   helperText,
                                   errorMessage,
                                   charactersCount,
                                   disabled,
                                   type = "text",
                                   placeholder = "",
                                   ...props
                                 }, ref) => {
  const [inputId] = useState(randomStr(8))

  const handleWheel = useCallback((e) => {
    e.target.blur()
  }, [])

  const focusHandler = (e) => {
    if (type === "number") {
      e.target.addEventListener("wheel", handleWheel)
    }

    if (onFocus) {
      onFocus(e)
    }
  }

  const blurHandler = (e) => {
    if (type === "number") {
      e.target.removeEventListener("wheel", handleWheel)
    }

    if (onBlur) {
      onBlur(e)
    }
  }


  return (
    <InputStyle
      className={[
        "input-group",
        className,
        errorMessage ? "error" : "",
        disabled ? "disabled" : ""
      ].join(" ")}
      icon={icon}
      isIconColored={iconColored}>
      <label className="input-group__label text-c font-semibold"
             htmlFor={inputId}>{label}</label>

      <div className="input-group__input">
        {icon && <Icon name={icon} />}

        <input
          ref={ref}
          value={value}
          onChange={onChange}
          onBlur={blurHandler}
          onFocus={focusHandler}
          type={type}
          placeholder={placeholder}
          className="text-b3 font-regular"
          id={inputId}
          disabled={disabled}
          {...props}
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
