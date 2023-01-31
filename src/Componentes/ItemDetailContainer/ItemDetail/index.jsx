import { useContext, useState } from "react";
import { MiCarrito } from "../../../MiCarritoContext";

function ItemDetail({ producto }) {
  const context = useContext(MiCarrito);
  const { agregarACarro } = context;
  const [cantidad, setCantidad] = useState(1);
  return (
    <div className="itemDetalle">
      <h5 className="">{producto.nombre}</h5>
      <div className="imagenContenedor">
        <img className="" src={producto.imagen} alt="un producto a la venta" />
      </div>
      <p>{producto.descripcion}</p>
      <p className="precio">{producto.precio} U$D</p>
      <div>
        <select
          id="cantidadP"
          onChange={() =>
            setCantidad(document.getElementById("cantidadP").value)
          }
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <button
          className="botonAgregar"
          onClick={() => agregarACarro(producto, parseFloat(cantidad))}
        >
          Agregar {cantidad} al carrito
        </button>
      </div>
    </div>
  );
}
export default ItemDetail;
