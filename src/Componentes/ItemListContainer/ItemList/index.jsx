import React from "react"
import Item from "./Item"
function ItemList({ productos }) {
    return (
        <div className="ListaProductos">
            {productos.map((product) => {
                return <Item key={product.id} producto={product}/>
            })}
        </div>
    )
}
export default ItemList 