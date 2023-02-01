import { useState } from "react";
import React from "react";
import { toast } from "react-toastify";
export const MiCarrito = React.createContext();
const { Provider } = MiCarrito;

function MiCarritoDatos({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  function agregarACarro(producto, cant) {
    let carro = carrito;
    if (carro.find((prod) => producto.id === prod.id)) {
      toast(producto.nombre + " ya esta en el carrito");
    } else {
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

  function vaciarCarrito() {
    setCarrito([]);
    setCantidad(0);
  }

  return (
    <Provider
      value={{
        carrito,
        setCarrito,
        agregarACarro,
        eliminarItem,
        vaciarCarrito,
        cantidad,
      }}
    >
      {children}
    </Provider>
  );
}

export default MiCarritoDatos;
