import { useState } from "react";
import React from "react";
export const MiCarrito = React.createContext();
const { Provider } = MiCarrito;

function MiCarritoDatos({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  function agregarACarro(producto, cant) {
    let carro = carrito;
    if (carro.find((prod) => producto === prod)) {
      console.log(producto.nombre + " ya esta en el carrito");
    } else {
      // clono el objeto para no cambiar las propiedades que este tenia
      let prod = { ...producto };
      prod.cantidad = cant;
      prod.precio = prod.precio * prod.cantidad;
      carro.push(prod);
      setCarrito(carro);
      setCantidad(cantidad + cant);
    }
  }

  function eliminarItem(producto) {
    let i = 0;
    let articuloNoborrado = true;
    while (i < carrito.length && articuloNoborrado) {
      if (carrito[i] === producto) {
        let carro = [...carrito];
        carro.splice(i, 1);
        setCarrito(carro);
        setCantidad(cantidad - producto.cantidad);
        articuloNoborrado = false;
      }
      i++;
    }
  }

  return (
    <Provider
      value={{ carrito, setCarrito, agregarACarro, eliminarItem, cantidad }}
    >
      {children}
    </Provider>
  );
}

export default MiCarritoDatos;
