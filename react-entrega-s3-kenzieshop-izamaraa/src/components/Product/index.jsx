import { useDispatch } from "react-redux";
import { addAoCartThunk } from "../../store/modules/cart/thunks";
import { Div, DivItem } from "./styled";
export default function Product({ product }) {
  const { name, price, img } = product;

  const produto = { ...product, quantidade: 1 };
  const dispatch = useDispatch();

  return (
    <Div>
      <DivItem>
        <div>
          <img src={img} alt={name} />
        </div>
        <div>
          <p>{name}</p>
        </div>
        <div className="box-preco">
          <p> R${price}.00</p>
          <button
            onClick={() => {
              dispatch(addAoCartThunk(produto));
            }}
          >
            Adicionar item
          </button>
        </div>
      </DivItem>
    </Div>
  );
}
