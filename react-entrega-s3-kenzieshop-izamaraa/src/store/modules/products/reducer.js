import Livro1 from "../../../Images/Livro1.png";
import Livro2 from "../../../Images/Livro2.png";
import Livro3 from "../../../Images/Livro3.png";
import Livro4 from "../../../Images/Livro4.png";
import Livro5 from "../../../Images/Livro5.png";
import Livro6 from "../../../Images/Livro6.png";

const stateProducts = [
  {
    id: 1,
    name: "O Que Tem Dentro Da Sua Fralda ?",
    price: 20.0,
    img: Livro1,
  },
  {
    id: 2,
    name: "O Mundo Das Emoções",
    price: 24.0,
    img: Livro2,
  },
  {
    id: 3,
    name: "O Pequeno Príncipe Preto",
    price: 25.0,
    img: Livro3,
  },
  {
    id: 4,
    name: "Malala",
    price: 26.0,
    img: Livro4,
  },
  {
    id: 5,
    name: "Eu Sou Assim E Vou Te Mostrar",
    price: 17.0,
    img: Livro5,
  },
  {
    id: 6,
    name: "A Casa",
    price: 28.0,
    img: Livro6,
  },
];

const productsReducer = (state = stateProducts, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default productsReducer;
