import { useSelector } from "react-redux";

export const TotalPrice = () => {
  const cart = useSelector((store) => store.cart);

  const totalCart = cart.reduce(
    (valorAtual, valorAnterior) =>
      valorAtual + valorAnterior.price * valorAnterior.quantidade,
    0
  );

  return <p> valor total : {totalCart.toFixed(2)}</p>;
};
