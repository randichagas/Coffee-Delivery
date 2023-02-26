import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;

    background-color: ${({ theme }) => theme.colors.background}
  }
`

export const Wrapper = styled.div`
  max-width: 78rem;
  margin: 0 auto;
  padding-inline: 4rem;
  /* background-color: blue; */

  /* @media (max-width: 1250px) {
    max-width: 60rem;
  } */
`
