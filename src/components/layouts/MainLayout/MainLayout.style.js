import styled, { css } from "styled-components"

export const MainLayoutStyle = styled.div`
  .main-layout {
    &__wrapper {
      padding-top: calc(72px + 16px +
      ${({ backPosition, back }) => back
        ? backPosition === "left" ? "80px" : "48px"
        : "80px"
      });

      padding-bottom: ${({ backPosition, back }) => back
        ? backPosition === "left" ? "80px" : "48px"
        : "80px"
      };
      min-height: 100vh;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        ${({ back }) => back &&
          css`
            padding-top: calc(72px + 16px + 24px);
            padding-bottom: 24px;
          `
        }
      }


      ${({ back }) => back
        ? css`
          @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {

          }
        `
        : css`
          @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
            padding-top: calc(72px + 16px + 64px);
          };

          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            padding-top: calc(72px + 16px + 48px);
          }
        `
      };


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
