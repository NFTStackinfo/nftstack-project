import styled from 'styled-components';

export const CheckboxStyle = styled.label`
  cursor: pointer;
  display: inline-flex;
  width: ${(props) => props.count ? "100%" : "auto"};


  &:not(:last-child) {
    margin-bottom: ${(props) => props.count ? "12px" : "0"}
  }

  .checkbox-content {
    min-width: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.colors.sonicSilver};
    border-radius: 3px;
    transition: 0.3s;
    box-sizing: border-box;
    margin-top: 2px;

    .icon {
      fill: ${({theme}) => theme.colors.white};
      opacity: 0;
    }
  }
  .checkbox-label {
    transition: 0.3s;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 0;


    &:not(:empty) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked {
      & ~ .checkbox-content {
        border-color: ${({theme}) => theme.colors.electricUltramarine};
        background-color: ${({theme}) => theme.colors.electricUltramarine};
        .icon {
          opacity: 1;
        }
      }
    }
  }

  &.disabled {
    pointer-events: none;

    .checkbox-content {
      border-color: ${({theme}) => theme.colors.cadetBlue};

      &:after {
        background: ${({theme}) => theme.colors.cadetBlue};
      }
    }

    .checkbox-label {
      color: ${({theme}) => theme.colors.cadetBlue};
    }
  }

`
