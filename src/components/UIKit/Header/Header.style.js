import styled from "styled-components"

export const HeaderStyle = styled.header`
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;

  @keyframes header-entering {
    from {
      height: 72px;
    }
    to {
      height: calc(72px + 80px + 2px + 40px);
    }
  }


  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 100%;
    max-height: calc(100vh - 32px);


    ::before {
      content: '';
      position: fixed;
      inset: 0;
      background-color: ${({ theme }) => theme.colors.modalOverlay};
      z-index: -1;
      opacity: 0;
    }

    &.entering {
      &::before, .header__nav-mobile {
        animation: fade-in 0.3s ease-in-out;
      }

      .header {
        &__content {
          animation: header-entering 0.3s ease-in-out;
          overflow: hidden;
        }
      }
    }

    &.entered {
      &::before, .header__nav-mobile {
        opacity: 1;
      }

      .header {
        &__content {
          height: calc(72px + 80px + 2px + 40px);
        }
      }
    }

    &.exiting {
      &::before, .header__nav-mobile {
        animation: fade-in 0.3s ease-in-out reverse;
      }

      .header {
        &__content {
          animation: header-entering 0.3s ease-in-out reverse;
          overflow: hidden;
        }
      }
    }

    &.exited {
      &::before, .header__nav-mobile {
        opacity: 0;
      }

      .header {
        &__content {
          height: 72px;
        }
      }
    }


    .header {
      &__nav-mobile {
        opacity: 0;
        display: block !important;
        position: absolute;
        top: 72px;
        left: 0;
        right: 0;
        border-top: 2px solid ${({ theme }) => theme.colors.gainsboro};

        &__inner {
          padding: 40px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
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
        padding-left: 16px;
        padding-right: 16px;
      }
    }

    &__content {
      position: relative;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.ghostWhite};
      padding: 16px 24px;
      border-radius: 36px;
      height: 72px;

      @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
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

    &__navbar {
      display: flex;
      width: 100%;
      height: fit-content;
      align-items: center;
    }

    &__nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;

      &::-webkit-scrollbar {
        display: none !important;
      }

      &__address {
        flex-shrink: 0;
        margin-right: 24px;
        height: 40px;
        display: flex;
        align-items: center;
      }

      &__inner {
        display: flex;
        overflow-y: auto;
        height: 100%;
        width: fit-content;
        align-items: center;
        justify-content: center;

        @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
          display: none;
        }
      }
    }

    &__hamburger {
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        display: inline-grid;
      }
    }


    &__nav-mobile {
      display: none;
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
