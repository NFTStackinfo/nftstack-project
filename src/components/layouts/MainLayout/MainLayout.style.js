import styled, { css } from "styled-components"

export const MainLayoutStyle = styled.div`
  min-height: 100vh;
`

export const MainLayoutWrapper = styled.div`
  height: 100%;
  padding-top: calc(72px + 16px +
  ${({ backPosition, back }) => back
    ? backPosition === "left" ? "80px" : "48px"
    : "80px"
  });

  padding-bottom: ${({ backPosition, back }) => back
    ? backPosition === "left" ? "80px" : "48px"
    : "80px"
  };

  ${({ back }) => back
    ? css`
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-top: calc(72px + 16px + 24px);
        padding-bottom: 24px;
      }
    `
    : css`
      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-top: calc(72px + 16px + 64px);
        padding-bottom: 64px;
      };

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-top: calc(72px + 16px + 48px);
        padding-bottom: 48px;
      }
    `
  };
`

export const MainLayoutContainer = styled.div`
  position: relative;
`

export const MainLayoutBack = styled.div`
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
`

export const MainLayoutContent = styled.div``
