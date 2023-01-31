import { useEffect, useState } from "react";
function BarraLateral() {
  const [barra, setBarra] = useState("Escondida");
  const [rotar, setRotar] = useState(
    "M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
  );
  return (
    <div className="barraLateral">
      <div className={barra}>
        <h3>Filtros</h3>
      </div>
      <div
        className="contenedorDesplegar"
        onClick={() => {
          if (barra === "Escondida") {
            setBarra("Desplegada");
            setRotar(
              "M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"
            );
          } else {
            setBarra("Escondida");
            setRotar(
              "M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
            );
          }
        }}
      >
        <svg
          className="contenedorIcono"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
        >
          <path className="cambiarEscala" fillRule="evenodd" d={rotar}></path>
        </svg>
      </div>
    </div>
  );
}

export default BarraLateral;
