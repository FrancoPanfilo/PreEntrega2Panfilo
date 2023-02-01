import { useContext } from "react";
import { useState } from "react";
import { MiCarrito } from "../../MiCarritoContext";
import Autenticacion from "./Autenticacion";
import Checkout from "./Checkout";
function Cart() {
  const { carrito, eliminarItem } = useContext(MiCarrito);
  const [factura, setFactura] = useState("facturaEscondida");
  const [referencia, setReferencia] = useState("referenciaEscondida");
  const [datos, setDatos] = useState({ total: 0 });
  return (
    <div className="cart">
      <div className="productos">
        {carrito.map((producto) => {
          return (
            <div className="productoCarrito" key={producto.id}>
              <div className="nombreYCantidad">
                <h3>{producto.nombre}</h3>
                <p>Cantidad: {producto.cantidad}</p>
              </div>

              <div className="productoCarritoCont">
                <img
                  className=""
                  src={producto.imagen}
                  alt="un producto del carrito"
                />
                <div className="minCont">
                  <p className="precioRojo">{producto.precio} U$D</p>
                  <img
                    alt="elemento en carrito"
                    className="eliminar"
                    src="https://img.icons8.com/ios/500/trash--v1.png"
                    onClick={() => {
                      eliminarItem(producto);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Autenticacion desactivador={{ setFactura, setDatos }} />
      <Checkout activador={{ factura, datos, setFactura, setReferencia }} />
      <div className={referencia}>
        <p id="ventaId"></p>
      </div>
    </div>
  );
}

export default Cart;
