import styled from 'styled-components';

export const PaymentBoxStyle = styled.div`
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme, error}) => error ? theme.colors.snow : theme.colors.ghostWhite};

  .title {
    font-weight: 400;
    color: ${({theme}) => theme.colors.sonicSilver};
  }
  .info {
    font-weight: 600;
    padding: 4px 0 12px;
  }

  .error {
    color: ${({theme}) => theme.colors.vividCrimson};
    margin-top: 12px;
  }
`
