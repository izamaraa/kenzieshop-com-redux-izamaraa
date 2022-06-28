export default function Modal({ fecharModal }) {
  return (
    <>
      <h3> OBRIGADO PELO SEU PEDIDO !</h3>
      <button className="fecharDiv" onClick={fecharModal}>
        Fechar
      </button>
    </>
  );
}
