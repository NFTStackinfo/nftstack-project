import styled from "styled-components"

export const DesignSystemStyle = styled.div`
  padding: 60px 0;
  display: grid;
  row-gap: 120px;

  .section {
    .container {
      padding-left: 40px;
      padding-right: 40px;
      max-width: 1200px;
      width: 100%;
    }

    .title {
      color: ${({ theme }) => theme.colors.neonBlue};
      font-weight: 600;
      margin-bottom: 16px;
    }

    .content {
      width: 100%;

      >h2, .section-title {
        font-weight: 600;
        margin-bottom: 24px;
      }
    }

    &-typography {
      &__container {
        display: grid;
        row-gap: 40px;
      }

      .typography__variant {
        display: grid;
        row-gap: 16px;
      }
    }

    &-btn {
      &__container {
        display: grid;
        row-gap: 56px;

        &__inner {
          display: grid;
          row-gap: 24px;
        }
      }

      &_v {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        padding: 20px;
        column-gap: 24px;
        border: 1px dashed #9747FF;
        border-radius: 5px;

        &_tertiary_1 {
          background-color: ${({ theme }) => theme.colors.electricUltramarine};
        }
      }
    }

    &-card {
      &__container {
        display: grid;
        row-gap: 56px;
      }

      .tag, .card {
        &-content {
          display: grid;
          row-gap: 16px;
        }

        &-variant {
          display: flex;
          max-width: 400px;

          >span {
            margin-right: 16px;
          }

          &__list {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: max-content;
            column-gap: 16px;
          }
        }
      }
    }

    &-header {
      &__container {
        &_inner {
          background-color: ${({ theme }) => theme.colors.cadetBlue};
          display: grid;
          row-gap: 56px;
          padding: 56px 0;
          border: 1px dashed #9747FF;
          border-radius: 5px;
        }
      }
    }

    &-footer {
      &__container {
        &_inner {
          background-color: ${({ theme }) => theme.colors.interBlue};
          display: grid;
          row-gap: 56px;
          padding: 56px 0;
          border: 1px dashed #9747FF;
          border-radius: 5px;
        }
      }
    }
  }
`
