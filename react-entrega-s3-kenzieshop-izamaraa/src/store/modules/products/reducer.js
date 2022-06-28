const stateProducts = [
  {
    id: 1,
    name: "O Que Tem Dentro Da Sua Fralda ?",
    price: 20.0,
    img: "https://www.clipescola.com/wp-content/uploads/2020/05/O-que-tem-dentro-da-sua-fralda.png",
  },
  {
    id: 2,
    name: "O Mundo Das Emoções",
    price: 24.0,
    img: "https://m.media-amazon.com/images/I/51PHfXaJDnL.jpg",
  },
  {
    id: 3,
    name: "O Pequeno Príncipe Preto",
    price: 25.0,
    img: "https://cdn.sistemawbuy.com.br/arquivos/1945cf2aa53f644df14c4dd21a5ee14d/produtos/JU1DO3/o-pequeno-principe-preto-601c33bfe0a6c.jpg",
  },
  {
    id: 4,
    name: "Malala",
    price: 26.0,
    img: "https://ea9vhhuzko5.exactdn.com/wp-content/uploads/2016/01/1-1.jpg?strip=all&lossy=1&resize=627%2C900",
  },
  {
    id: 5,
    name: "Eu Sou Assim E Vou Te Mostrar",
    price: 17.0,
    img: "http://www.colegioportorico.com.br/wp-content/uploads/2019/04/dica-de-leitura-colegio-portyo-rico.png",
  },
  {
    id: 6,
    name: "A Casa",
    price: 28.0,
    img: "https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2020/03/09/833161/20200309192636684278e.jpg",
  },
];

const productsReducer = (state = stateProducts, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default productsReducer;
