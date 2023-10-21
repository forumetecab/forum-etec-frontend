import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
 }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Container = styled.main`
  flex: 1;
  margin: 0 auto;
  max-width: 50rem;
  width: 100%;
  margin-bottom: 5rem;
`
