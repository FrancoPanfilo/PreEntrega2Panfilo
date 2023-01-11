import { productos } from "../../../datos/productos"
function ItemDetail(id){
    const mostrar = productos.filter((producto)=>producto.id-1===id.id)
    return(
        <div>
                {mostrar.map((producto)=>{
                    return (
                        <div className="itemDetalle">
                            <h5 className="">{producto.nombre}</h5>
                            <div className="imagenContenedor"><img className="" src={producto.imagen} alt="un producto a la venta" /></div>
                            <p>{producto.descripcion}</p>
                            <p className="precio">{producto.precio} U$D</p>
                            <button>Agregar al carrito</button>
                        </div>
                    )
                })}
        </div>
    )
}

export default ItemDetail