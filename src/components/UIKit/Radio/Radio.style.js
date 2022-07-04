import styled from 'styled-components';

export const RadioStyle = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  width: ${(props) => props.count ? "100%" : "auto"};


  &:not(:last-child) {
    margin-bottom: ${(props) => props.count ? "12px" : "0"}
  }

  .radio-content {
    min-width: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.colors.sonicSilver};
    border-radius: 50%;
    transition: 0.3s;
    box-sizing: border-box;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${({theme}) => theme.colors.electricUltramarine};
      transition: 0.3s;
    }
  }
  .radio-label {
    transition: 0.3s;
    line-height: 23px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;


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
      & ~ .radio-content {
        border-color: ${({theme}) => theme.colors.electricUltramarine};
        &:after {
          opacity: 1;
        }
      }
    }
  }

  &.disabled {
    pointer-events: none;

    .radio-content {
      border-color: ${({theme}) => theme.colors.cadetBlue};

      &:after {
        background: ${({theme}) => theme.colors.cadetBlue};
      }
    }

    .radio-label {
      color: ${({theme}) => theme.colors.cadetBlue};
    }
  }

`
