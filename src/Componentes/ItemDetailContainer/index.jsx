import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { productsCollection } from "../../firebase";
function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = () => {
      getDoc(doc(productsCollection, id)).then((pro) => {
        const prod = pro.data();
        prod.id = pro.id;
        setProducto(prod);
        setCargando(false);
      });
    };
    getProduct();
  }, [id]);
  return cargando ? (
    <p>Cargando</p>
  ) : (
    <div className="Detalle">
      <ItemDetail producto={producto}></ItemDetail>
    </div>
  );
}

export default ItemDetailContainer;
