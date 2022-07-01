import styled from "styled-components"

export const ModalDeployingStyle = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.modelOverlay};
  overflow: auto;
  justify-content: center;
  align-items: center;
  display: grid;
  z-index: 1000;
  visibility: visible;
  opacity: 0;
  pointer-events: none;
  //transition: all 0.3s ease-in-out;

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
      max-width: 520px;
      width: 100%;
      height: fit-content;
      margin-left: auto;
      margin-right: auto;
    }

    &__content {
      width: 100%;
      height: fit-content;
      background-color: ${({ theme }) => theme.colors.white};
      padding: 32px;
      border-radius: 20px;
      box-shadow: ${({ theme }) => theme.shadows.lvl5};

      > h3 {
        text-align: center;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.raisinBlack}
      }

      > p {
        margin-top: 24px;
      }

      &__btn {
        margin-top: 32px;
        width: 100%;
      }
    }
  }

  .content {
    background-color: #FFFFFF;
    border-radius: 16px;
    width: 100%;
    padding: 16px 30px 0;
    height: fit-content;
    display: flex;
    flex-direction: column;


    .modal-header {
      align-self: center;
      width: 100%;

      &__btn-close {
        margin-left: auto;

        &:hover {
          background-color: rgba(0, 0, 0, 0.15);
        }
      }
    }

    .modal-body {
      height: fit-content;
      align-self: center;
    }
  }
`

export const ModalFeatureStyle = styled.div`
  .modal {
    &__form {
      margin-top: 24px;
      display: grid;
      row-gap: 16px;

      &__btn {
        &-container {
          display: flex;
          justify-content: end;
        }

        &_send{
          margin-left: 12px;
        }
      }
    }
  }
`

