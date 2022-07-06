import * as React from "react"
import { CheckboxStyle } from "./Checkbox.style"
import { forwardRef } from "react"
import { Icon } from "../index"


export const Checkbox = forwardRef(({
                                      label,
                                      checked,
                                      disabled,
                                      name,
                                      onChange,
                                      className = "",
                                      size = 18,
                                      indeterminate,
                                      ...props
                                    }, ref) => {
  return (
    <CheckboxStyle
      size={size}
      className={`${className} ${disabled ? "disabled" : ""}`}
      ref={ref}
    >
      <input
        type="checkbox"
        checked={checked && !disabled}
        onChange={onChange}
        disabled={disabled}
        name={name}
        {...props}
      />
      <span className="checkbox-content">
        <Icon name={indeterminate ? "subtract" : "checkmark"} size={16} />
      </span>
      {label && <span className="checkbox-label text-b2">{label}</span>}
    </CheckboxStyle>
  )
})
