import styled, {css} from 'styled-components';


export const Label = styled.label`
  display: block;
  margin-bottom: ${({withMargin, noMargin}) => withMargin ?
    '32px' :
    noMargin ? '0' : '24px'};
  position: relative;
  /*remove from here*/

  .input::-webkit-outer-spin-button,
  .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */

  .input[type=number] {
    -moz-appearance: textfield;
  }

  .input:-webkit-autofill,
  .input:-webkit-autofill:hover,
  .input:-webkit-autofill:focus,
  .input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: black;
    font-size: 16px;
  }

  .input {
    width: 100%;
    outline: none;
    background-color: #ffffff;
    color: black;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid ${({errorMessage}) => errorMessage ?
      'red' :
      'blue'};
    caret-color: ${({errorMessage}) => errorMessage ? 'red' : 'black'};
    display: block;
    border-radius: 0;
    -webkit-appearance: none;
    padding: 22px 16px 8px 0;

    &::placeholder {
      opacity: 0;
    }

    &:not(:placeholder-shown) {
      + span {
        transform: translateY(4px);
        font-size: 14px;
      }
    }

    &.disabled, &:disabled {
      opacity: 0.7;
      pointer-events: none;
      border-bottom-color: rgba(0, 0, 255, 0.24);

      & ~ span {
        opacity: 0.7;
      }
    }
  }

  .textarea {
    resize: none;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    transition: .2s;
    color: grey;
    cursor: text;
    will-change: transform, font-size;
    line-height: 1;
    font-weight: 400;
  }

  &:focus-within {
    > span {
      transform: translateY(4px);
      font-size: 14px;
    }
  }

  .error-message {
    position: absolute;
    top: 100%;
    transform: translateY(2px);
    color: red;
    font-size: 12px};
  }

`

export const ButtonSubmitWrapper = styled.div`
  padding-bottom: 32px;
  position: relative;
  ${({buttonMargin}) =>
          buttonMargin && css`
        margin-bottom: 40px
  `};

  .info-text {
    position: absolute;
    bottom: 12px;
  }

  .button-loader {
    display: flex;
    align-items: center;
  }

  .button-submit {
    display: block;
    height: 28px;
    line-height: 28px;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 24px;
    background-color: blue;
    color: white;
    box-shadow: 0 8px 16px rgba(45, 22, 116, 0.1);
    cursor: pointer;

    &.disabled, &:disabled {
      background-color: lightblue;
      pointer-events: none;
      box-shadow: none;
    };
  }

`
