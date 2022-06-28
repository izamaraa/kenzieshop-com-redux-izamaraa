import ProductCart from "../../components/ProductCart";
import { useSelector } from "react-redux";
import { TotalPrice } from "../../components/TotalPrice";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal";
import { HeaderPgInicial } from "../../components/Header/styled";
import { ContainerCart, DivCart } from "./styled";

export default function Cart() {
  const history = useHistory();
  const cart = useSelector(({ cart }) => cart);

  const [openModal, setOpenModal] = useState(false);

  function abrirModal() {
    setOpenModal(true);
  }

  function fecharModal() {
    setOpenModal(false);
  }
  return (
    <>
      <HeaderPgInicial>
        <h1>Kenzie shop</h1>
        <button onClick={() => history.push("/")}>Voltar</button>
      </HeaderPgInicial>
      <ContainerCart>
        <DivCart>
          {cart.length > 0 ? (
            <div>
              <h2>Meu carrinho</h2>
              <div className="dentro-do-carrinho">
                {cart.map((product) => (
                  <ProductCart key={product.id} product={product} />
                ))}

                <>
                  <TotalPrice />
                </>
              </div>
            </div>
          ) : (
            <>
              <>
                {" "}
                <h2>Meu carrinho</h2>
              </>

              <>
                <p>Carrinho vazio !</p>
              </>

              <>
                <p>Adicione itens.</p>
              </>
            </>
          )}
          <>
            <button onClick={abrirModal}>Finalizar compra</button>
          </>
          {openModal === true && <Modal fecharModal={fecharModal} />}
        </DivCart>
      </ContainerCart>
    </>
  );
}
