import { createGlobalStyle, keyframes } from "styled-components"
import { generateSpaceClassNames } from "../utils/utils"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`

export const GlobalStyle = createGlobalStyle`
  /*reset*/
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  article, aside, details, figcaption, figure, dialog,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  img, video{
    max-width: 100%;
    width: 100%;
    display: block;
  }

  ul, ul li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;

    &:before, &:after {
      content: none;
    }
  }

  a {
    text-decoration: none;
    font-size: 100%;
    color: inherit;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /**
   * Paul Irish box sizing reset so all elements have broder-box.
   */
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit;
  }

  /**
   * custom smarty resets
   */
  a {
    text-decoration: none;
  }

  button, input, a, textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    }
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  /*global*/
  body {
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ theme }) => theme.font.b1.DEFAULT};
    line-height: ${({ theme }) => theme.font.b1.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.b1.letterSpacing};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.outerSpace};
  }

  .main-wrapper {
  }

  //typography
  h1, h2, h3, p, button, a, span {
    font-weight: 400;
  }

  h1, .text-h1 {
    font-size: ${({ theme }) => theme.font.h1.DEFAULT};
    line-height: ${({ theme }) => theme.font.h1.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.h1.letterSpacing};
  }

  h2, .text-h2 {
    font-size: ${({ theme }) => theme.font.h2.DEFAULT};
    line-height: ${({ theme }) => theme.font.h2.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.h2.letterSpacing};
  }

  h3, .text-h3 {
    font-size: ${({ theme }) => theme.font.h3.DEFAULT};
    line-height: ${({ theme }) => theme.font.h3.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.h3.letterSpacing};
  }

  .text-b1 {
    font-size: ${({ theme }) => theme.font.b1.DEFAULT};
    line-height: ${({ theme }) => theme.font.b1.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.b1.letterSpacing};
  }

  .text-b2 {
    font-size: ${({ theme }) => theme.font.b2.DEFAULT};
    line-height: ${({ theme }) => theme.font.b2.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.b2.letterSpacing};
  }

  .text-b3 {
    font-size: ${({ theme }) => theme.font.b3.DEFAULT};
    line-height: ${({ theme }) => theme.font.b3.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.b3.letterSpacing};
  }

  .text-c {
    font-size: ${({ theme }) => theme.font.c.DEFAULT};
    line-height: ${({ theme }) => theme.font.c.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.c.letterSpacing};
  }

  .font {
    &-regular {
      font-weight: 400
    }

    &-semibold {
      font-weight: 600
    }

    &-extrabold {
      font-weight: 800
    }
  }

  //typography

  // components
  .container, .container-md, .container-sm {
    width: 100%;
    padding: 0 40px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 0 16px;
    }
  }

  .container {
    max-width: 1200px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      max-width: 1152px;
    }

    &-md {
      max-width: 1010px;

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: 962px;
      }
    }

    &-sm {
      max-width: 818px;

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: 770px;
      }
    }

    &-xs {
      max-width: 360px;
      width: 100%;
    }
  }
  // components


  /*colors*/
  .color-primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  .text {
    &-gradient {
      background: ${({ theme }) => theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    &-center {
      text-align: center;
    }
  }

  /*animations*/
  .animated {
    opacity: 0;
  }

  .fade-in {
    animation: ${fadeIn} .5s ease-in forwards;
  }


  body iframe {
    pointer-events: none !important; /*for development*/
    max-height: 1px !important;
    max-width: 1px !important;
    position: absolute !important;
    z-index: -1000 !important;
    overflow: hidden !important;
  }

  .list-dash {
    margin-left: 20px;

    li {
      list-style-type: '- ';
      margin-bottom: 12px;

      p {
        padding-bottom: 0 !important;
      }
    }
  }

  .warn-text {
    padding: 24px 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkText};
  }

  ${({ theme }) => generateSpaceClassNames(theme.spaces)}
`
