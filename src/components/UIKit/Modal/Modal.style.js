import styled from "styled-components"

export const ModalStyle = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.modelOverlay};
  z-index: -1;
  opacity: 0;
  overflow: auto;
  display: grid;
  justify-content: center;
  align-items: center;

  &.active {
    z-index: 100;
    opacity: 1;
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

      >h3 {
        text-align: center;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.raisinBlack}
      }

      >p {
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
