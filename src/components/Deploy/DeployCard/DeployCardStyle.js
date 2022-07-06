import styled from 'styled-components';

export const DeployCardStyle = styled.ul`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({theme}) => theme.colors.gainsboro};

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .label {
    min-width: 200px;
    padding-right: 8px;
    color: ${({theme}) => theme.colors.sonicSilver};
  }
  .value {
    color: ${({theme}) => theme.colors.outerSpace};
    width: 100%;
  }
`
