import styled from "styled-components";

export const Border = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid lightgray;
  width: 500px;
  p {
    font-size: 15px;
  }
  button {
    :active {
      background-color: aliceblue;
    }
  }
  button:hover {
    cursor: pointer;
  }
  .preco-quantidade {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    border: none;
    margin: 2px;
    background-color: lightgray;
    font-size: 20px;
    :active {
      background-color: aliceblue;
    }
  }
`;
