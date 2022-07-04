import styled, { css } from "styled-components"
import { innerBorder } from "../../../utils/utils"
import { theme } from "../../../styles/theme"
import { Link } from "react-router-dom"

export const ButtonStyle = styled.button`
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.font.b2.DEFAULT};
  letter-spacing: ${({ theme }) => theme.font.b2.letterSpacing};
  line-height: ${({ theme }) => theme.font.b2.lineHeight};
  font-weight: 400;
  background: transparent;
  text-transform: uppercase;
  border-radius: 30px;
  height: 40px;
  width: ${({ width }) => width};
  cursor: pointer;
  transition: all 300ms linear;
  text-decoration: none;

  &.btn_px {
    &-4 {
      padding-right: 16px;
      padding-left: 16px;
    }

    &-2 {
      padding-right: 8px;
      padding-left: 8px;
    }
  }

  > .btn__label {
    color: ${({ theme }) => theme.colors.white};
  }

  :not(:disabled):hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  :disabled {
    cursor: default !important;

    > .btn__label {
      color: ${({ theme }) => theme.colors.cadetBlue} !important;
    }

    ${({ isIconColored }) =>
      !isIconColored && css`
        .icon path {
          fill: ${({ theme }) => theme.colors.cadetBlue} !important;
        }
      `}
  }

  .icon {
    width: 24px;
    height: 24px;

    ${({ isIconColored }) =>
      !isIconColored && css`
        path {
          fill: ${({ theme }) => theme.colors.white};
        }
      `}
  }

  &.blue {
    > .btn__label {
      color: ${({ theme }) => theme.colors.electricUltramarine};
    }

    ${({ isIconColored }) =>
      !isIconColored && css`
        .icon path {
          fill: ${({ theme }) => theme.colors.electricUltramarine};
        }
      `}
    :not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.ghostWhite};
    }
  }

  &.black {
    > .btn__label {
      color: ${({ theme }) => theme.colors.outerSpace};
    }

    ${({ isIconColored }) =>
      !isIconColored && css`
        .icon path {
          fill: ${({ theme }) => theme.colors.outerSpace};
        }
      `}
    :not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.ghostWhite};
    }
  }

  &.primary {
    background-color: ${({ theme }) => theme.colors.electricUltramarine};

    :not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.interBlue};
    }

    :disabled {
      background-color: ${({ theme }) => theme.colors.cadetBlue} !important;

      > .btn__label {
        color: ${({ theme }) => theme.colors.ghostWhite} !important;
      }

      ${({ isIconColored }) =>
        !isIconColored && css`
          .icon path {
            fill: ${({ theme }) => theme.colors.ghostWhite} !important;
          }
        `}
    }
  }

  &.secondary {
    ${innerBorder({ color: theme.colors.outerSpace })}
    > .btn__label {
      color: ${({ theme }) => theme.colors.outerSpace};
    }

    ${({ isIconColored }) =>
      !isIconColored && css`
        .icon path {
          fill: ${({ theme }) => theme.colors.outerSpace};
        }
      `}
    :not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.ghostWhite};
    }

    :disabled {
      ${innerBorder({ color: theme.colors.cadetBlue, important: true })}
    }
  }
`

export const LinkStyle = styled(Link)`
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.font.b2.DEFAULT};
  letter-spacing: ${({ theme }) => theme.font.b2.letterSpacing};
  line-height: ${({ theme }) => theme.font.b2.lineHeight};
  font-weight: 400;
  background: transparent;
  text-transform: uppercase;
  border-radius: 30px;
  height: 40px;
  width: ${({ width }) => width};
  cursor: pointer;
  transition: all 300ms linear;
  text-decoration: none;

  &.btn_px {
    &-4 {
      padding-right: 16px;
      padding-left: 16px;
    }

    &-2 {
      padding-right: 8px;
      padding-left: 8px;
    }
  }

  > .btn__label {
    color: ${({ theme }) => theme.colors.white};
  }

  :not(:disabled):hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  :disabled {
    cursor: default !important;

    > .btn__label {
      color: ${({ theme }) => theme.colors.cadetBlue} !important;
    }

    ${({ isIconColored }) =>
      !isIconColored && css`
        .icon path {
          fill: ${({ theme }) => theme.colors.cadetBlue} !important;
        }
      `}
  }

  .icon {
    width: 24px;
    height: 24px;

    ${({ isIconColored }) =>
      !isIconColored && css`
        path {
          fill: ${({ theme }) => theme.colors.white};
        }
      `}
  }

  &.blue {
    > .btn__label {
      color: ${({ theme }) => theme.colors.electricUltramarine};
    }

    ${({ isIconColored }) =>
      !isIconColored && css`
        .icon path {
          fill: ${({ theme }) => theme.colors.electricUltramarine};
        }
      `}
    :not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.ghostWhite};
    }
  }

  &.black {
    > .btn__label {
      color: ${({ theme }) => theme.colors.outerSpace};
    }

    ${({ isIconColored }) =>
      !isIconColored && css`
        .icon path {
          fill: ${({ theme }) => theme.colors.outerSpace};
        }
      `}
    :not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.ghostWhite};
    }
  }

  &.primary {
    background-color: ${({ theme }) => theme.colors.electricUltramarine};

    :not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.interBlue};
    }

    :disabled {
      background-color: ${({ theme }) => theme.colors.cadetBlue} !important;

      > .btn__label {
        color: ${({ theme }) => theme.colors.ghostWhite} !important;
      }

      ${({ isIconColored }) =>
        !isIconColored && css`
          .icon path {
            fill: ${({ theme }) => theme.colors.ghostWhite} !important;
          }
        `}
    }
  }

  &.secondary {
    ${innerBorder({ color: theme.colors.outerSpace })}
    > .btn__label {
      color: ${({ theme }) => theme.colors.outerSpace};
    }

    ${({ isIconColored }) =>
      !isIconColored && css`
        .icon path {
          fill: ${({ theme }) => theme.colors.outerSpace};
        }
      `}
    :not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.ghostWhite};
    }

    :disabled {
      ${innerBorder({ color: theme.colors.cadetBlue, important: true })}
    }
  }
`
