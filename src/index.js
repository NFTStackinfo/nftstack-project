import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MoralisProvider} from 'react-moralis';
import DesignSystem from "./components/UIKit/DesignSystem/DesignSystem"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyle } from "./styles/globalStyles"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <MoralisProvider appId="01tC7tpptxJVPIB2aJ28baToxwaW6sFub1hcFX1a" serverUrl="https://y8hgxupi6ivs.usemoralis.com:2053/server">
    //   <GlobalStyle suppressMultiMountWarning/>
      // <App/>
    // </MoralisProvider>,
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
      <App/>

  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
