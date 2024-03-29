import styled, { css } from "styled-components"

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
`

export const ModalContainer = styled.div`
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
`

export const ModalContent = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 32px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.lvl5};
  width: 100%;
  height: fit-content;
`

export const ModalTitle = styled.h3`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.h3.DEFAULT};
  line-height: ${({ theme }) => theme.font.h3.lineHeight};
  letter-spacing: ${({ theme }) => theme.font.h3.letterSpacing};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.outerSpace};
  text-align: ${({ center, right }) =>
    center ? "center"
      : right ? "right"
        : "left"
  };
}`

export const ModalText = styled.p`
  font-size: ${({ theme }) => theme.font.b3.DEFAULT};
  line-height: ${({ theme }) => theme.font.b3.lineHeight};
  letter-spacing: ${({ theme }) => theme.font.b3.letterSpacing};
  color: ${({ theme }) => theme.colors.outerSpace};
  font-weight: 400;
  margin-top: 24px;
  text-align: ${({ center, right }) =>
    center ? "center"
      : right ? "right"
        : "left"
  };
`

export const ModalFeatureForm = styled.form`
  margin-top: 24px;

  .fields-container {
    display: grid;
    row-gap: 16px;
  }
`

export const ModalFooter = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  column-gap: 12px;
  justify-content: end;
  width: 100%;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${({ buttonFit }) => !buttonFit && css`
      grid-auto-columns: unset;
      grid-auto-flow: unset;
      row-gap: 12px;
      column-gap: 0;
      grid-template-columns: 1fr;
    `}
    > .btn {
      width: ${({ buttonFit }) => buttonFit ? "fit-content" : "100%"};
      justify-self: end;
    }
  }
`


