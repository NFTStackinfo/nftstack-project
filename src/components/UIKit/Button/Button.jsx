import React from "react"
import { Icon } from "../index"
import { ButtonStyle } from "./Button.style"

function Button({
                  children,
                  link,
                  disabled = false,
                  onClick,
                  className = "",
                  variant = "",
                  prefixIcon,
                  onPrefixClick,
                  onSuffixClick,
                  suffixIcon,
                  ...props
                }) {
  return (
    <>
      {link ? (
        <ButtonStyle
          as="a"
          href={link}
          className={[
            "btn",
            ...variant.split(" "),
            children ? "btn_px-4" : "btn_px-2",
            className
          ].join(" ")}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {prefixIcon && <Icon name={prefixIcon} />}
          {children && <span>{children}</span>}
          {suffixIcon && <Icon name={suffixIcon} />}
        </ButtonStyle>
      ) : (
        <ButtonStyle
          as="button"
          className={[
            "btn",
            ...variant.split(" "),
            children ? "btn_px-4" : "btn_px-2",
            className
          ].join(" ")}
          onClick={onClick}
          disabled={disabled}
          {...props}
        >
          {prefixIcon && (
            <Icon
              name={prefixIcon}
              className="btn__prefix"
              onClick={onPrefixClick}
            />
          )}
          {children && <span>{children}</span>}
          {suffixIcon && (
            <Icon
              name={suffixIcon}
              className="btn__suffix"
              onClick={onSuffixClick}
            />
          )}
        </ButtonStyle>
      )}
    </>
  )
}

export { Button }
