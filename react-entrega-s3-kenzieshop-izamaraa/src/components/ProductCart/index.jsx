import { useDispatch } from "react-redux";
// import { removeAoCart } from "../../store/modules/cart/action";
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
      <div className="img-nome">
        <img src={img} alt={name} />
      </div>

      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>R${price.toFixed(2)}</p>
      </div>

      <div className="preco-quantidade">
        {/* <button onClick={() => dispatch(removeAoCart(id))}>Remover item</button> */}
        <>
          <p>Quantidade:{quantidade}</p>
        </>
        <div>
          <>
            <button
              onClick={() => {
                dispatch(addAoCartThunk(product));
              }}
            >
              +
            </button>
          </>
          <>
            <button
              onClick={() => {
                dispatch(removeAoCartThunk(product));
                console.log(produto);
              }}
            >
              -
            </button>
          </>
        </div>
      </div>
    </Border>
  );
};
export default ProductCart;
