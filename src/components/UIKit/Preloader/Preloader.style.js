import styled from "styled-components"

export const PreloaderStyle = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 30;
  animation: loading 1.5s linear infinite;

  >div {
    width: 64px;
    height: 64px;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
