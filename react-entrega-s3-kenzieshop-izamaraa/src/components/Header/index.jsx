import { HiShoppingCart } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { HeaderPgInicial } from "./styled";
export default function Headerl() {
  const history = useHistory();
  return (
    <HeaderPgInicial>
      <h1>Kenzie shop</h1>
      <button>
        <HiShoppingCart onClick={() => history.push("/carrinho")} />
      </button>
    </HeaderPgInicial>
  );
}
