import * as React from "react"
import { RadioStyle } from "./Radio.style"
import { forwardRef } from "react"

export const Radio = forwardRef(({
                                   label,
                                   checked,
                                   disabled,
                                   name,
                                   onChange,
                                   className = "",
                                   size = 18,
                                   ...props
                                 }, ref) => {
  return (
    <RadioStyle
      size={size}
      className={`${className} ${disabled ? "disabled" : ""}`}
      ref={ref}
    >
      <input
        type="radio"
        checked={checked && !disabled}
        onChange={onChange}
        disabled={disabled}
        name={name}
        {...props}
      />
      <span className="radio-content" />
      {label && <span className="radio-label text-b2">{label}</span>}
    </RadioStyle>
  )
})
