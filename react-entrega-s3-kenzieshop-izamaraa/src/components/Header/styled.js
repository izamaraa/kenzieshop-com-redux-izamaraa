import styled from "styled-components";
export const HeaderPgInicial = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    margin-left: 20px;
    margin-top: 0px;
    color: brown;
  }
  button {
    margin-right: 20px;
    border: none;
    border-radius: 10px;
    background-color: lightgray;
    font-size: 20px;
    :active {
      background-color: aliceblue;
    }
  }
  button:hover {
    cursor: pointer;
  }
`;
