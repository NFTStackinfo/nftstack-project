import styled from "styled-components"

export const ModalStyle = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.modalOverlay};
  overflow: auto;
  justify-content: center;
  align-items: center;
  display: grid;
  z-index: 1000;
  visibility: visible;
  opacity: 0;
  pointer-events: none;
  padding: 40px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  @keyframes modal-entering {
    from {
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
    }
    to {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
    }
  }

  .mt {
    &-8 {
      margin-top: 32px;
    }
  }

  &.entering {
    animation: modal-entering 0.3s ease-in-out;
  }

  &.entered {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }

  &.exiting {
    animation: modal-entering 0.3s ease-in-out reverse;
  }

  &.exited {
    visibility: visible;
    opacity: 0;
    pointer-events: none;
  }

  .modal {
    &__container {
      max-width: 600px;
      width: 100%;
      height: fit-content;
      margin-left: auto;
      margin-right: auto;
      padding: 0 40px;

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-left: 16px;
        padding-right: 16px;
      }
    }

    &__content {
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 32px;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: ${({ theme }) => theme.shadows.lvl5};
      width: 100%;
      height: fit-content;
    }

    &__title {
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.font.h3.DEFAULT};
      line-height: ${({ theme }) => theme.font.h3.lineHeight};
      letter-spacing: ${({ theme }) => theme.font.h3.letterSpacing};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.outerSpace};
      text-align: center;
    }

    &__text {
      font-size: ${({ theme }) => theme.font.b3.DEFAULT};
      line-height: ${({ theme }) => theme.font.b3.lineHeight};
      letter-spacing: ${({ theme }) => theme.font.b3.letterSpacing};
      color: ${({ theme }) => theme.colors.outerSpace};
      font-weight: 400;
      margin-top: 24px;
    }
  }
`

export const ModalFeatureForm = styled.form`
  margin-top: 24px;
  display: grid;
  row-gap: 16px;

  .modal__form {
    &__btn {
      &-container {
        display: flex;
        justify-content: end;
      }

      &_send {
        margin-left: 12px;
      }
    }
  }
`


