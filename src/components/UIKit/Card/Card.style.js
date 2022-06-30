import styled from "styled-components"

export const CardStyle = styled.div`
  max-width: 360px;
  max-height: 173px;
  height: 171px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.cadetBlue};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
  padding: 24px;
  cursor: pointer;

  :hover {
    border-color: ${({ theme }) => theme.colors.interBlue};
  }

  .card__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  &.create {
    .card__content {
      justify-content: center;
      align-items: center;

      > .icon {
        width: 24px;
        height: 24px;
        margin-bottom: 12px;
        cursor: pointer;

        path {
          fill: ${({ theme }) => theme.colors.sonicSilver};
        }
      }

      > span {
        color: ${({ theme }) => theme.colors.outerSpace};
      }
    }
  }

  &.contract {
    background-image: ${({ theme }) => theme.gradients.gradient2};

    .card__content {
      &__header {
        display: flex;
        justify-content: space-between;

        .tag {
          flex-shrink: 0;
        }
      }

      &__network {
        color: ${({ theme }) => theme.colors.sonicSilver};
        margin-top: 8px;
      }

      >.default-tag {
        margin-top: 12px;
      }

      &__date {
        margin-top: auto;
        color: ${({ theme }) => theme.colors.sonicSilver};
      }
    }
  }
`
