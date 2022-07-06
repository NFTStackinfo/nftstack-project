import styled from 'styled-components';

export const DeployPageStyle = styled.div`
  .payment-box {
    margin-bottom: 24px;
  }
  .warning-text {
    color: ${({theme}) => theme.colors.sangria};
    font-weight: 600;
    padding: 24px 0 6px;
  }
  .rinkeby-button {
    margin-bottom: 24px;
    margin-top: 12px;
  }
`
