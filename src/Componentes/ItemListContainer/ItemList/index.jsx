import React from "react"
import Item from "./Item"
function ItemList({ productos }) {
    return (
        <div className="ListaProductos">
            {productos.map((producto) => {
                return <Item producto={producto}/>
            })}
        </div>
    )
}
export default ItemList