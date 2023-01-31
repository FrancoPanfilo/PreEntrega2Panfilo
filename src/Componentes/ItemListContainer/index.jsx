import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsCollection } from "../../firebase";
import { getDocs } from "firebase/firestore";

function Articulos() {
  const [products, setProducts] = useState([]);
  const { categoria } = useParams();
  useEffect(() => {
    const getProducts = () => {
      getDocs(productsCollection)
        .then((res) => {
          const productos = res.docs.map((pro) => {
            const producto = pro.data();
            producto.id = pro.id;
            return producto;
          });
          // FIltro segun la categoria. Si no hay categoria , no se filtra
          // se puede hacer con query , pero prefiero esta forma
          if (categoria) {
            setProducts(
              productos.filter((producto) => producto.categoria === categoria)
            );
          } else setProducts(productos);
        })
        .catch((error) => {
          console.log("Los Productos no se cargaron correctamente");
        });
    };

    //ejecuto la funcion creada
    getProducts();
  }, [categoria]);
  return (
    <div className="">
      <ItemList productos={products} />
    </div>
  );
}

export default Articulos;
