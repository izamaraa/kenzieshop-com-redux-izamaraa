import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-weight: bold;
    width: 70px;
    font-size: 10px;
  }
  img {
    border: solid 2px grey;
    width: 70px;
    height: 70px;
    border-radius: 30px;
  }
  button {
    background-color: brown;
    border: none;
    border-radius: 10px;
    width: 60px;
    font-size: 12px;
    :active {
      background-color: aliceblue;
    }
  }

  .box-preco {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 750px) {
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
  }
`;
export const DivItem = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px;
  background-color: #fcfcfc;
  border-radius: 30px;
  justify-content: space-around;
  align-items: center;
`;
