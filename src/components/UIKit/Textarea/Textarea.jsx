import React, { forwardRef, useState } from "react"
import { TextareaStyle } from "./Textarea.style"
import { randomStr } from "../../../utils/text"
import { Icon } from "../index"


export const Textarea = forwardRef(({
                                      className,
                                      value,
                                      onChange,
                                      onBlur,
                                      icon,
                                      iconColored,
                                      label = "Label*",
                                      helperText,
                                      errorMessage,
                                      charactersCount,
                                      disabled,
                                      placeholder = "",
                                      textareaHeight = "100px"
                                    }, ref) => {
  const [inputId] = useState(randomStr(8))

  return (
    <TextareaStyle
      className={[
        "input-group",
        className,
        errorMessage ? "error" : "",
        disabled ? "disabled" : ""
      ].join(" ")}
      icon={icon}
      isIconColored={iconColored}
      textareaHeight={textareaHeight}
    >
      <label className="input-group__label text-c font-semibold"
             htmlFor={inputId}>{label}</label>

      <div className="input-group__input">
        {icon && <Icon name={icon} />}

        <textarea
          ref={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
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

    </TextareaStyle>
  )
})
