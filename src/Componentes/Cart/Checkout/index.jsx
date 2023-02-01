import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import { MiCarrito } from "../../../MiCarritoContext";
import { useContext } from "react";

function Checkout(activador) {
  const { vaciarCarrito } = useContext(MiCarrito);
  const { factura, datos, setFactura, setReferencia } = activador.activador;
  let total = datos.total;
  function idAleatorio() {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }
  return (
    <div className={factura}>
      <h3>Factura</h3>
      <p>Total a pagar {total}</p>
      <button
        onClick={() => {
          const id = idAleatorio();
          const compra = {
            datos,
            fecha: serverTimestamp(),
            id,
          };
          addDoc(collection(db, "Ventas"), compra);
          vaciarCarrito();
          setFactura("facturaEscondida");
          setReferencia("referencia");
          document.getElementById("ventaId").innerText =
            "Referencia de compra: " + id;
        }}
      >
        Confirmar compra
      </button>
    </div>
  );
}
export default Checkout;
