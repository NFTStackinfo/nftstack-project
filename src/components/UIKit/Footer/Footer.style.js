import styled from "styled-components"

export const FooterStyle = styled.footer`
  padding: 24px 0;

  .footer {

    &__content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      align-items: center;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        grid-template-columns: 1fr;
        row-gap: 16px;
      }
    }

    &__logo {
      justify-self: start;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        justify-self: center;
      }

      > img {
        display: block;
        width: 108px;
      }
    }

    &__arr {
      justify-self: center;

      > span {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    &__socials {
      justify-self: end;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        justify-self: center;
      }

      &__list {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        column-gap: 8px;
      }
    }
  }
`
