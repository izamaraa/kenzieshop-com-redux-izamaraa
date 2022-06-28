import { addAoCart, addMais, removeAoCart, removeMenos } from "./action";

export const addAoCartThunk = (produto) => (dispatch, getState) => {
  const { cart } = getState();
  const find = cart.find((item) => produto.id === item.id);
  //   console.log(cart);
  if (find) {
    dispatch(addMais(find.id));
    console.log("teste");
  } else {
    dispatch(addAoCart(produto));
  }
};
export const removeAoCartThunk = (produto) => (dispatch, getState) => {
  const { cart } = getState();
  const find = cart.findIndex((item) => produto.id === item.id);

  if (find !== -1 && cart[find].quantidade > 1) {
    cart[find].quantidade--;
    dispatch(removeMenos(cart));
  } else {
    dispatch(removeAoCart(produto.id));
  }
};
