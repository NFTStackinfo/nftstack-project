import styled from "styled-components"

export const SmartContractFormPageStyle = styled.div`

`

export const SmartContractForm = styled.form`
  display: grid;
  row-gap: 24px;

  .form {
    &__contract-type {
      >span {
        padding-right: 12px;
        padding-left: 12px;
        color: ${({ theme }) => theme.colors.sonicSilver};
      }

      &__radio-container {
        margin-top: 16px;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        column-gap: 16px;
      }
    }
  }
`
