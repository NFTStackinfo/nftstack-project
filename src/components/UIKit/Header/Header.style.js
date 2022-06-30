import styled from "styled-components"

export const HeaderStyle = styled.header`

  .content {
    background-color: ${({ theme }) => theme.colors.ghostWhite};
    height: 72px;
    padding: 20px 24px;
    border-radius: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  .header {

    &__logo {
      max-width: 108px;
      flex-shrink: 0;

      > a {
        display: block;

        img {
          width: 108px;
        }
      }
    }
  }
`

export const HeaderLogoStyle = styled.header`
  .content {
    height: 72px;
    padding: 20px 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  .header {

    &__logo {
      max-width: 108px;
      flex-shrink: 0;

      > a {
        display: block;

        img {
          width: 108px;
        }
      }
    }
  }
`
