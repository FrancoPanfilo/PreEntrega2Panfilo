import "./App.css";
import NavBar from "./Componentes/NavBar";
import Articulos from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import Cart from "./Componentes/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MiCarritoDatos from "./MiCarritoContext";
import BarraLateral from "./Componentes/BarraLateral";
import FiltrosDatos from "./FiltrosDatos";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MiCarritoDatos>
          <FiltrosDatos>
            <NavBar />
            <Routes>
              <Route path="/" element={<BarraLateral />} />
              <Route path="/Categoria/:categoria" element={<BarraLateral />} />
            </Routes>
            <Routes>
              <Route path="/" element={<Articulos />} />
              <Route path="/Categoria/:categoria" element={<Articulos />} />
              <Route path="/detalle/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </FiltrosDatos>
        </MiCarritoDatos>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
