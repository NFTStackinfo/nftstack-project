import styled, { css } from "styled-components"

export const MainLayoutStyle = styled.div`
  .main-layout {
    &__wrapper {
      padding-top: calc(72px + 16px + 80px);
      padding-bottom: 80px;
      min-height: 100vh;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-top: calc(72px + 16px + 24px);
      }
    }

    &__container {
      position: relative;
    }

    &__back {

      ${({ backPosition }) => backPosition === "left"
        ? css`
          position: absolute;
          left: 40px;
          top: 0;
        `
        : css`
          margin-bottom: 16px;
        `
      };

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        left: 16px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        position: sticky;
        margin-bottom: 16px;
      }
    }
  }
`
