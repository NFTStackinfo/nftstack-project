import styled from "styled-components"

export const SmartContractFormPageStyle = styled.div`

`

export const SmartContractForm = styled.form`
  display: grid;
  row-gap: 24px;

  .form {
    &__contract-type {
      > span {
        padding-right: 12px;
        padding-left: 12px;
        color: ${({ theme }) => theme.colors.sonicSilver};
      }
    }

    &__radio-group {
      margin-top: 16px;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      column-gap: 16px;
    }

    &__input-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        grid-template-columns: 1fr;
        row-gap: 24px;
      }
    }

    &__wallets {
      display: flex;
      flex-direction: column;

      > &__title {
        display: block;
        color: ${({ theme }) => theme.colors.outerSpace}
      }

      &__list {
        margin-top: 16px;
        display: grid;
        row-gap: 16px;

        &__item {
          display: flex;
          align-items: start;

          > * {
            :nth-child(2) {
              margin-left: 16px;
            }

            :nth-child(3) {
              margin-left: 8px;
            }
          }

          &__btn-remove {
            margin-top: 20px;
          }
        }
      }

      &__btn-add {
        margin-top: 16px;
      }
    }
  }
`
