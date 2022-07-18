import styled from "styled-components"

export const OverviewPageStyle = styled.div`
  .overview {
    &__content {
      border: 1px solid ${({ theme }) => theme.colors.cadetBlue};
      border-radius: 12px;
      padding: 24px;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
          padding: 16px;
      }
    }

    &__header {
      > div {
        display: flex;

        >h3 {
          width: 100%;
          margin-right: 12px;
        }

        >.tag {
          flex-shrink: 0;
        }
      }

      >p {
        margin-top: 8px;
        letter-spacing: normal;

        >span {
          overflow-wrap: break-word;
          color: ${({ theme }) => theme.colors.sonicSilver};
        }
      }
    }

    &__body {
      margin-top: 24px;

      >.revenue-split{
        margin-top: 24px;
      }
    }

    &__footer {
      margin-top: 24px;
      display: flex;
      justify-content: end;
      width: 100%;

     &__btn-deploy, &__btn-view {
       margin-left: 16px;
     }

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
        align-items: center;

        >.btn {
          width: 100%;
        }

        &__btn-deploy {
          margin-left: 0;
          margin-top: 16px;
        }
      }
    }
  }
`
