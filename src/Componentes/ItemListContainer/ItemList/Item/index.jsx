import React from "react"
import { Link } from "react-router-dom"

function Item({ producto }) {
    return (
        <Link to={`/detalle/${producto.id}`}>
        <div className="item">
                <h5 className="">{producto.nombre}</h5>
                <div className="imagenContenedor"><img className="" src={producto.imagen} alt="un producto a la venta" /></div>
                <p>{producto.precio} U$D</p>
        </div>
        </Link>
    )

}

export default Item