import styled from "styled-components"

export const Main = styled.main`
  background-color: ${({theme}) => theme.dark_grayish_blue};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  text-align: center;
  position: relative;
  border-radius: 10px;
  min-height: 280px;
  max-width: 500px;
  
  h1 {
    color: ${({theme}) => theme.green};
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  p {
    font-size: 2.8rem;
    color: ${({theme}) => theme.light_cyan};
  }

  p + img {
    max-width: 100%;
    margin-bottom: 20px;
  }

  button {
    background-color: ${({theme}) => theme.green};
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    outline: none;

    position: absolute;
    bottom: -30px;
    transition: 100ms;
  }

  button img {
    max-width: 100%;
  }

  button:hover {
    cursor: pointer;
    box-shadow: 0 0 20px ${({theme}) => theme.green};
  }
`