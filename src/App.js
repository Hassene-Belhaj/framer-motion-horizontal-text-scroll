import React from 'react'
import Section from "./Component/Section/Section";
import { createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle`
*{
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: 'Open Sans', sans-serif;
font-family: 'Oswald', sans-serif;
}
body {
  scroll-behavior: smooth;
}

`


const App = () => {
  return (
    <> 
    <GlobalStyle />
       <Section />
    </> 
 )
}

export default App


