import React from "react";
import { useState } from "react";
export const filtros = React.createContext();
const { Provider } = filtros;

function FiltrosDatos({ children }) {
  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(9999);
  function establecerFiltros(min, max) {
    if (min >= 0 && max >= min && max < 99999) {
      setMaximo(max);
      setMinimo(min);
    }
  }
  return (
    <Provider
      value={{ minimo, maximo, setMaximo, setMinimo, establecerFiltros }}
    >
      {children}
    </Provider>
  );
}

export default FiltrosDatos;
