import styled from 'styled-components';

export const LoginStyle = styled.div`
  background: ${({theme}) => theme.gradients.gradient1};
  position: relative;
  overflow: hidden;

  .pattern {
    position: absolute;

    &-1 {
      width: 598px;
      height: 100%;
      top: 0;
      left: 0;
    }

    &-2 {
      width: 590px;
      height: 590px;
      top: 0;
      right: 0;
    }
  }

  .header-inner {
    min-height: 100vh;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;

  }

  .main-section {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .login-box {
    padding: 32px;
    border-radius: 20px;
    background-color: ${({theme}) => theme.colors.white};
    max-width: 548px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    .text {
      color: ${({theme}) => theme.colors.sonicSilver};
      margin: 8px 0 32px;
    }
  }
`
