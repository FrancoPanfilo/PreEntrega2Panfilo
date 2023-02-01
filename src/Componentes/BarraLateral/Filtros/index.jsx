import { useContext } from "react";
import { filtros } from "../../../FiltrosDatos";
function Filtros() {
  const { minimo, maximo, establecerFiltros } = useContext(filtros);
  return (
    <div className="filtros">
      <h5>Personaliza tu busqueda</h5>
      <label>
        Precio minimo:
        <input
          id="minimo"
          type="number"
          name="Precio Minimo"
          defaultValue={minimo}
        />
      </label>
      <label>
        Precio maximo:
        <input
          id="maximo"
          type="number"
          name="Precio Maximo"
          defaultValue={maximo}
        />
      </label>
      <button
        onClick={() => {
          establecerFiltros(
            parseInt(document.getElementById("minimo").value),
            parseInt(document.getElementById("maximo").value)
          );
        }}
      >
        Aplicar Filtros
      </button>
    </div>
  );
}
export default Filtros;
