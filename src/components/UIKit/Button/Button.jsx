import React from "react"
import { Icon } from "../index"
import { ButtonStyle, LinkStyle } from "./Button.style"

export const Button = ({
                         children,
                         disabled,
                         onClick,
                         className = "",
                         variant = "",
                         prefixIcon,
                         onPrefixClick,
                         onSuffixClick,
                         suffixIcon,
                         iconColored,
                         width = "fit-content",
                         to,
                         ...props
                       }) => {
  return (
    <>
      {props?.href ? (
          <ButtonStyle
            as="a"
            className={[
              "btn",
              ...variant.split(" "),
              children ? "btn_px-4" : "btn_px-2",
              className
            ].join(" ")}
            isIconColored={iconColored}
            width={width}
            {...props}
          >
            {prefixIcon && <Icon name={prefixIcon} />}
            {children && <span className="btn__label">{children}</span>}
            {suffixIcon && <Icon name={suffixIcon} />}
          </ButtonStyle>
        )
        : to ? (
            <LinkStyle
              className={[
                "btn",
                ...variant.split(" "),
                children ? "btn_px-4" : "btn_px-2",
                className
              ].join(" ")}
              onClick={onClick}
              disabled={disabled}
              isIconColored={iconColored}
              width={width}
              to={to}
              {...props}
            >
              {prefixIcon && (
                <Icon
                  name={prefixIcon}
                  className="btn__prefix"
                  onClick={onPrefixClick}
                />
              )}
              {children && <span className="btn__label">{children}</span>}
              {suffixIcon && (
                <Icon
                  name={suffixIcon}
                  className="btn__suffix"
                  onClick={onSuffixClick}
                />
              )}
            </LinkStyle>
          )
          : (
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
              isIconColored={iconColored}
              width={width}
              {...props}
            >
              {prefixIcon && (
                <Icon
                  name={prefixIcon}
                  className="btn__prefix"
                  onClick={onPrefixClick}
                />
              )}
              {children && <span className="btn__label">{children}</span>}
              {suffixIcon && (
                <Icon
                  name={suffixIcon}
                  className="btn__suffix"
                  onClick={onSuffixClick}
                />
              )}
            </ButtonStyle>
          )
      }
    </>
  )
}
