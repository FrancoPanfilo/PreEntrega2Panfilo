import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

function ItemDetailContainer(){
    const idProducto = useParams().id;
    return(
        <div className="Detalle">
            <ItemDetail id={idProducto-1}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer