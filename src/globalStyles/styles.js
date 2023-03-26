import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Oxygen', sans-serif;
  }
  
 body {
   background-color: #000;
 }

  *::-webkit-scrollbar-track {
    background: #5F6F94;
    border-radius: 10px;
  }
  *::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb {
    background: #FEF5AC;
    border-radius: 10px;
  }
`