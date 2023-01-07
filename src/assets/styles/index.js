import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.dark_blue};
    font-family: 'Manrope', sans-serif;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 500px) {
    :root {
      font-size: 50%;
    }

    main {
      width: 99vw;
      gap: 50px;
    }
  }
`

export default GlobalStyle