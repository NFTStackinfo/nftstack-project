import styled, { css } from "styled-components"
import { outsideBorder } from "../../../utils/utils"
import { theme } from "../../../styles/theme"

export const InputStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.sonicSilver};

  &.error {
    .input-group {
      &__label {
        color: ${({ theme }) => theme.colors.vividCrimson}
      }

      &__input {
        > input {
          border-color: ${({ theme }) => theme.colors.vividCrimson};
        }
      }

      &__helper-text {
        color: ${({ theme }) => theme.colors.vividCrimson};
      }
    }
  }

  &.disabled {
    color: ${({ theme }) => theme.colors.cadetBlue} !important;

    .input-group {
      &__input {
        >.icon {
          ${({ isiconcolored }) =>
            !isiconcolored && css`
              path {
                fill: ${({ theme }) => theme.colors.cadetBlue} !important;
              }
            `}
        }

        > input {
          border-color: ${({ theme }) => theme.colors.cadetBlue} !important;
          color: ${({ theme }) => theme.colors.cadetBlue} !important;

          ::placeholder {
            color: ${({ theme }) => theme.colors.cadetBlue} !important;
          }

        }

      }
    }
  }

  .input-group {
    &__label {
      padding-right: 12px;
      padding-left: 12px;
    }

    &__input {
      height: fit-content;
      position: relative;
      margin-top: 4px;

      > .icon {
        position: absolute;
        left: 12px;
        top: 8px;
        width: 24px;
        height: 24px;

        ${({ isiconcolored }) =>
          !isiconcolored && css`
            path {
              fill: ${({ theme }) => theme.colors.sonicSilver}
            }
          `}
      }

      > input {
        height: 40px;
        width: 100%;
        border: 1px solid ${({ theme }) => theme.colors.sonicSilver};
        border-radius: 25px;
        padding: 8px 12px 8px ${({ icon }) => icon ? "44px" : "12px"};
        color: ${({ theme }) => theme.colors.outerSpace};
        background-color: ${({ theme }) => theme.colors.white};
        transition: all 0.3s ease-in-out;


        ::placeholder {
          color: ${({ theme }) => theme.colors.sonicSilver};
        }

        :focus {
          border-color: ${({ theme }) => theme.colors.electricUltramarine};
          ${outsideBorder({ color: theme.colors.lavender, size: 2 })}
        }
      }
    }

    &__footer {
      margin-top: 4px;
      padding: 0 12px;
      display: flex;
      justify-content: space-between;
    }

    &__characters-count {
      margin-left: 8px;
      width: 36px;
      text-align: right;
    }
  }
`
