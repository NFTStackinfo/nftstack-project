import styled from "styled-components"

export const HeaderStyle = styled.header`
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {

    &.open {
      height: 100%;
      max-height: calc(100vh - 32px);

      .header__container, .header__content {
      }

      @keyframes header-entering {
        from {
          height: 0;
        }
        to {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
        }
      }

      ::before {
        content: '';
        position: fixed;
        inset: 0;
        background-color: ${({ theme }) => theme.colors.modalOverlay};
        z-index: -1;
      }

      .header__content {
        align-items: start;
        height: calc(72px + 80px + 2px + 40px);
      }

      .header__nav {
        display: grid;
        position: absolute;
        top: 72px;
        left: 0;
        height: calc(80px + 40px + 2px);
        border-top: 2px solid ${({ theme }) => theme.colors.gainsboro};
        padding-top: 40px;
        padding-bottom: 40px;

        &__inner {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      }
    }
  }

  .header {
    &__container {
      max-width: 1200px;
      width: 100%;
      padding: 0 40px;
      margin: 0 auto;
      height: 100%;

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 0 16px;
      }
    }

    &__content {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${({ theme }) => theme.colors.ghostWhite};
      height: 72px;
      padding: 20px 24px;
      border-radius: 36px;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-left: 16px;
        padding-right: 16px;
      }
    }

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

    &__nav {
      &::-webkit-scrollbar {
        display: none !important;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: none;
        overflow-y: auto;
        height: 100%;
        width: 100%;
      }

      &__inner {
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
          flex-direction: column;
          align-items: inherit;
          justify-content: space-between;
        }
      }
    }

    &__hamburger {
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: inline-grid;
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
