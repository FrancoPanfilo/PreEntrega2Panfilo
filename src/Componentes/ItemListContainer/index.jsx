import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { productos } from "../../datos/productos";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Articulos() {
    const [products, setProducts] = useState([])
    const categoria = useParams()
    useEffect(() => {
        const cargarProductos = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(productos)
                }, 1500)
            })
        }
        cargarProductos()
            .then((res) => {
                if (categoria.categoria){
                    setProducts(res.filter((producto)=>
                        producto.categoria===categoria.categoria))
                }else setProducts(res)
            })
            .catch((error) => {
                console.log("Los Productos no se cargaron correctamente")
            })
    }, [categoria])
    return (
        <div className="">
            <ItemList productos={products} />
        </div>
    )

}

export default Articulos