import { useDispatch } from "react-redux";
import { removeAoCart } from "../../store/modules/cart/action";
import {
  addAoCartThunk,
  removeAoCartThunk,
} from "../../store/modules/cart/thunks";
import { useState } from "react";
import { Border } from "./styled";

const ProductCart = ({ product }) => {
  const [produto, setProduto] = useState(product);

  const dispatch = useDispatch();
  const { id, name, price, img, quantidade } = produto;
  return (
    <Border>
      <div>
        <img src={img} alt={name} />
      </div>
      <p>{name}</p>
      <p>{price.toFixed(2)}</p>
      <button onClick={() => dispatch(removeAoCart(id))}>Remover item</button>
      <p>Quantidade:{quantidade}</p>
      <button
        onClick={() => {
          dispatch(addAoCartThunk(product));
          console.log(produto);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch(removeAoCartThunk(product));
          console.log(produto);
        }}
      >
        -
      </button>
    </Border>
  );
};
export default ProductCart;
