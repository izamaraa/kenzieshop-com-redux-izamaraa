import styled from "styled-components";

export const ContainerCart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  height: 100vh;
`;

export const DivCart = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: #fcfcfc;
  border-radius: 30px;
  width: 500px;
  h2 {
    display: flex;
    justify-content: space-around;
  }
  img {
    border: solid 2px grey;
    width: 70px;
    height: 70px;
    border-radius: 30px;
  }
  .dentro-do-carrinho {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button:hover {
    cursor: pointer;
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
  /* @media (min-width: 750px) {
    p {
      font-size: 18px;
      width: 150px;
    }
    img {
      width: 100px;
      height: 100px;
    }
    .box-preco {
      flex-direction: row;
    }
    button {
      font-size: 16px;
      width: 80px;
    }
  } */
`;
