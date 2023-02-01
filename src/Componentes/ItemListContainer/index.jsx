import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsCollection } from "../../firebase";
import { getDocs, query, where } from "firebase/firestore";
import { useContext } from "react";
import { filtros } from "../../FiltrosDatos";

function Articulos() {
  const [products, setProducts] = useState([]);
  const { categoria } = useParams();
  const { minimo, maximo, setMaximo, setMinimo } = useContext(filtros);
  useEffect(() => {
    const getProducts = () => {
      let filtro = productsCollection;
      filtro = query(filtro, where("precio", ">=", minimo));
      filtro = query(filtro, where("precio", "<=", maximo));
      getDocs(filtro)
        .then((res) => {
          const productos = res.docs.map((pro) => {
            const producto = pro.data();
            producto.id = pro.id;
            return producto;
          });
          if (categoria) {
            setProducts(productos.filter((pro) => pro.categoria === categoria));
          } else setProducts(productos);
        })
        .catch((error) => {
          console.log("Los Productos no se cargaron correctamente");
        });
    };
    getProducts();
  }, [categoria, maximo, minimo]);
  if (products.length < 1) {
    return (
      <div className="errorFiltro">
        <p>¡Los filtros no tienen resultado!</p>
        <button
          onClick={() => {
            setMinimo(0);
            setMaximo(99999);
          }}
        >
          Restablecer filtros
        </button>
      </div>
    );
  } else
    return (
      <div className="">
        <ItemList productos={products} />
      </div>
    );
}

export default Articulos;
